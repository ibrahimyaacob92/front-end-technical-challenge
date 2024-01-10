import { useQuery } from "@tanstack/react-query";
import { getModels } from "../../api/getModels";
import ModelCard from "./ModelCard";
import { useNavigate } from "react-router-dom";

const ModelList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["models"],
    queryFn: getModels,
  });

  const navigate = useNavigate();
  return (
    <div className="grid w-full grid-cols-1 gap-2 mx-auto lg:grid-cols-2">
      {isLoading && (
        <>
          {new Array(10).fill(null).map((i) => (
            <ModelCard isLoading />
          ))}
        </>
      )}
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
