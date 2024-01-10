import Card from "@mui/joy/Card";
import { ModelType, Models } from "../types";
import { CardContent } from "@mui/joy";
import ModelTypeBadge from "./ModelTypeBadge";
import { Timer } from "lucide-react";
import { defaultIconProps } from "../styles/props";
import { formatDuration } from "../utils/dates";

type Props = {
  data: Models;
  onClick?: () => void;
};

const ModelCard = ({ data, onClick }: Props) => {
  return (
    <Card
      variant="outlined"
      sx={(t) => ({
        transition: "0.3s ease",
        cursor: "pointer",
        ":hover": {
          borderColor: t.palette.primary[500],
        },
      })}
    >
      <div onClick={onClick}>
        <CardContent>
          <div className="flex">
            <div className="font-mono font-semibold">{data.model_name}</div>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ModelTypeBadge modelType={data.model_type as ModelType} />
            <span>·</span>
            <div className="flex items-center gap-1.5 ">
              <Timer {...defaultIconProps} />
              <div className="">
                {formatDuration(new Date(data.ts_start), new Date(data.ts_end))}
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ModelCard;
