import { analysisResponse, modelsResponse } from "./api/mockedData";

export type Models = (typeof modelsResponse)[number];
export type Analysis = (typeof analysisResponse)[number];

export enum ModelType {
  Regression = "Regression",
  Classification = "Classification",
}
