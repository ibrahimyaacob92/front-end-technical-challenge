import { Card, CardContent, Skeleton, Typography } from "@mui/joy";
import { Analysis } from "../../types";
import { useMemo } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { capitalize, startCase } from "lodash";

type Props = {
  data?: Analysis;
  chartGroupIndex?: string;
  isLoading?: boolean;
};

const AnalysisChartCard = ({ data, isLoading, chartGroupIndex }: Props) => {
  const chartData = useMemo(() => {
    const _data =
      data?.map(({ value, ...rest }) => {
        // ? Had to add this because the axis doesnt format along the formatValue props
        const updatedValues: Record<string, number> = {};
        Object.keys(value).forEach((key) => {
          const _key = key as keyof typeof value;
          updatedValues[startCase(_key)] =
            Math.round(value[_key] * 100 * 100) / 100;
        });

        // ? Maybe better to get the label of each field from someone else
        const updatedRest: Record<string, string> = {};
        Object.keys(rest).forEach((key) => {
          const _key = key as keyof typeof rest;
          updatedRest[_key] = startCase(capitalize(rest[_key]));
        });
        return { ...updatedValues, ...updatedRest };
      }) || [];

    const keys = Object.keys(data?.[0]?.value ?? {}).map((i) =>
      startCase(startCase(i))
    );
    return {
      data: _data,
      keys: keys,
    };
  }, [data]);

  return (
    <Card
      sx={{
        height: "100%",
        width: "100%",
        margin: 0,
        minWidth: "300px",
        overflowX: "auto",
        overflowY: "hidden",
      }}
    >
      {isLoading ? (
        <>
          <Skeleton variant="text" width={"30%"} sx={{ marginX: "auto" }} />
          <Skeleton
            sx={{
              position: "inherit",
            }}
          />
          <Skeleton variant="text" width={"50%"} sx={{ marginX: "auto" }} />
        </>
      ) : (
        <>
          <Typography textAlign={"center"} level="title-sm">
            {"Analysis Method Result"}
          </Typography>
          <CardContent
            sx={{
              minWidth: "500px",
            }}
          >
            <ResponsiveBar
              data={chartData.data}
              keys={chartData.keys}
              // label={"null"}
              label={""}
              layout="horizontal"
              colors={{ scheme: "spectral" }}
              indexBy={chartGroupIndex}
              margin={{ top: -5, right: 20, bottom: 90, left: 60 }}
              // enableGridX
              enableGridY={false}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "Percentages",
                legendPosition: "middle",
                legendOffset: 32,
                truncateTickAt: 0,
              }}
              axisLeft={{
                tickSize: 0,
                tickPadding: 5,
                tickRotation: 0,

                legend: capitalize(chartGroupIndex),
                legendPosition: "middle",
                legendOffset: -50,
                truncateTickAt: 0,
              }}
              groupMode="grouped"
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom",
                  direction: "row",
                  justify: false,
                  translateY: 80,
                  itemsSpacing: 2,
                  itemWidth: 120,
                  itemHeight: 20,
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              // height={400}
              // width={1000}
            />
          </CardContent>
        </>
      )}
    </Card>
  );
};

export default AnalysisChartCard;
