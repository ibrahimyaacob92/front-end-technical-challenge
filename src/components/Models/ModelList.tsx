import { useQuery } from "@tanstack/react-query";
import { getModels } from "../../api/getModels";
import ModelCard from "../../components/ModelCard";
import { useNavigate } from "react-router-dom";

const ModelList = () => {
  const { data } = useQuery({
    queryKey: ["models"],
    queryFn: getModels,
  });

  const navigate = useNavigate();
  return (
    <div className="grid w-full grid-cols-1 gap-2 mx-auto lg:grid-cols-2 lg:max-w-6xl">
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