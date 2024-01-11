import { useQuery } from "@tanstack/react-query";
import { getAnalysis } from "../../api/getAnalysis";
import { Link, useParams } from "react-router-dom";
import { Typography } from "@mui/joy";
import AnalysisChartCard from "../../components/Analysis/AnalysisChartCard";

const CHART_INDEX_FIELD = "origin"; // maybe better to get this from backend too

const Analysis = () => {
  const { modelName } = useParams<{ modelName: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["analysis"],
    queryFn: () => getAnalysis(modelName ?? ""),
  });

  // Best handle this logic elsewhere
  const chartData = data?.data;
  const chartDataNotAvailable = !chartData?.[0];

  return (
    <div>
      <Typography level="title-lg" my={1}>
        {`${modelName} Model Analysis`}
      </Typography>
      <div className="grid h-screen gap-2 py-6 grid-col-1 v-screen">
        {/* Loading State */}
        {isLoading && <AnalysisCardLoading />}

        {/* Error */}
        {(error ?? chartDataNotAvailable) && !isLoading && (
          <AnalysisErrorScreen />
        )}

        {/* Render Chart */}
        {!chartDataNotAvailable &&
          chartData?.map((i, idx) => (
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

const AnalysisCardLoading = ({
  skeletonCount = 1,
}: {
  skeletonCount?: number;
}) => {
  return (
    <>
      {new Array(skeletonCount).fill(null).map((_i, idx) => (
        <AnalysisChartCard key={idx} isLoading />
      ))}
    </>
  );
};

const AnalysisErrorScreen = () => {
  return (
    <div>
      Error fetching analysis data, return to{" "}
      <Link to="/inventory" className="text-blue-700">
        inventory
      </Link>{" "}
    </div>
  );
};
