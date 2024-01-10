import { LineChart, Shapes } from "lucide-react";
import { ModelType } from "../../types";
import { defaultIconProps } from "../../styles/props";

export const modelTypeIconMap = {
  [ModelType.Regression]: <LineChart {...defaultIconProps} />,
  [ModelType.Classification]: <Shapes {...defaultIconProps} />,
};
