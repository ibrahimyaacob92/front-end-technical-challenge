import { modelTypeIconMap } from "./ModelTypeIcons";
import { ModelType } from "../../types";
import { Package } from "lucide-react";
import { defaultIconProps } from "../../styles/props";

type Props = {
  modelType: ModelType;
};

const modelList = Object.values(ModelType);

const ModelTypeBadge = ({ modelType }: Props) => {
  return (
    <div className="flex items-center gap-1.5">
      {modelList.includes(modelType) ? (
        modelTypeIconMap[modelType]
      ) : (
        <Package {...defaultIconProps} />
      )}
      <div className="text-sm capitalize">{modelType}</div>
    </div>
  );
};

export default ModelTypeBadge;
