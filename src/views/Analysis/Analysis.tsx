import { useQuery } from "@tanstack/react-query";
import { getAnalysis } from "../../api/getAnalysis";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/joy";
import AnalysisChartCard from "../../components/Analysis/AnalysisChartCard";

const CHART_INDEX_FIELD = "origin"; // maybe better to get this from backend too

const Analysis = () => {
  const { modelName } = useParams<{ modelName: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["analysis"],
    queryFn: () => getAnalysis("cortana"),
  });

  if (error) {
    return <div>{}</div>;
  }

  return (
    <div>
      <Typography level="title-lg" my={1}>
        {`${modelName} Model Analysis`}
      </Typography>
      <div className="grid gap-2 grid-col-1 ">
        {isLoading &&
          new Array(10)
            .fill(null)
            .map((_i, idx) => <AnalysisChartCard key={idx} isLoading />)}
        {data?.data.map((i, idx) => (
          <AnalysisChartCard
            key={idx}
            data={i ?? undefined}
            chartGroupIndex={CHART_INDEX_FIELD}
          />
        ))}
      </div>
    </div>
  );
};

export default Analysis;
