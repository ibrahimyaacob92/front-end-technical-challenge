import { analysisResponse, modelsResponse } from "./mockedData";
import { delay } from "./utils";

const modelNames = modelsResponse.map((model) =>
  model.model_name.toLowerCase()
);

export const getAnalysis = async (modelName: string) => {
  let loading = true;
  let data = [];

  await delay(1000);

  if (!modelNames.includes(modelName.toLocaleLowerCase())) {
    data = [null];
    loading = false;

    return { data, loading };
  }

  data = analysisResponse;
  loading = false;

  return { data, loading };
};
