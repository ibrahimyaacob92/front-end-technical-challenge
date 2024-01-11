import { useQuery } from "@tanstack/react-query";
import { getModels } from "../../api/getModels";
import ModelCard from "./ModelCard";
import { Link, useNavigate } from "react-router-dom";
import ListIsEmptyScreen from "../ListIsEmptyScreen";

const ModelList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["models"],
    queryFn: getModels,
  });

  const navigate = useNavigate();
  return (
    <div className="grid w-full grid-cols-1 gap-2 mx-auto lg:grid-cols-2">
      {/* Loading State */}
      {isLoading && <ModelListLoading />}
      {error && <ModelListErrorScreen />}
      {data?.data.length === 0 && <ListIsEmptyScreen />}
      {data?.data.map((i) => (
        <ModelCard
          key={i.model_name}
          data={i}
          onClick={() => navigate(`/analysis/${i.model_name}`)}
        />
      ))}
    </div>
  );
};

export default ModelList;

const ModelListLoading = ({
  skeletonCount = 10,
}: {
  skeletonCount?: number;
}) => {
  return (
    <>
      {new Array(skeletonCount).fill(null).map((_i) => (
        <ModelCard isLoading />
      ))}
    </>
  );
};

const ModelListErrorScreen = () => {
  return (
    <div>
      Error inventory list, return to{" "}
      <Link to="/" className="text-blue-700">
        home
      </Link>{" "}
    </div>
  );
};
