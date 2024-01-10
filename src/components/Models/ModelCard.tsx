import Card from "@mui/joy/Card";
import { ModelType, Models } from "../../types";
import { CardContent, Skeleton } from "@mui/joy";
import ModelTypeBadge from "./ModelTypeBadge";
import { Timer } from "lucide-react";
import { defaultIconProps } from "../../styles/props";
import { formatDuration, getRelativeDate } from "../../utils/dates";

type Props = {
  data?: Models;
  isLoading?: boolean;
  onClick?: () => void;
};

const ModelCard = ({ data, isLoading, onClick }: Props) => {
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
          <div className="flex justify-between">
            {isLoading ? (
              <Skeleton width={"30%"} variant="text" />
            ) : (
              <div className="font-mono font-semibold">{data?.model_name}</div>
            )}
            {isLoading ? (
              <Skeleton width={"20%"} variant="text" />
            ) : (
              <ModelTypeBadge modelType={data?.model_type as ModelType} />
            )}
          </div>

          {isLoading ? (
            <Skeleton variant="text" width={"60%"} level="body-sm" />
          ) : (
            <div className="flex items-center justify-between gap-2 text-sm">
              {data && (
                <div>{`Updated at ${getRelativeDate(
                  new Date(data.ts_updated)
                )}`}</div>
              )}

              <div className="flex items-center gap-1 ">
                <Timer {...defaultIconProps} />
                <div className="">
                  {data &&
                    formatDuration(
                      new Date(data?.ts_start ?? ""),
                      new Date(data?.ts_end)
                    )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default ModelCard;
