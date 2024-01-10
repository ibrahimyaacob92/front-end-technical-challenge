import { useQuery } from "@tanstack/react-query";
import { getAnalysis } from "../../api/getAnalysis";
import { useParams } from "react-router-dom";

const Analysis = () => {
  const { modelName } = useParams<{ modelName: string }>();
  const { data, isLoading, error } = useQuery({
    queryKey: ["analysis"],
    queryFn: () => getAnalysis("cortana"),
  });

  if (isLoading) {
    return <div>{isLoading}</div>;
  }
  if (error) {
    return <div>{}</div>;
  }

  return (
    <div>
      <div>{modelName}</div>
      <hr />
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Analysis;
