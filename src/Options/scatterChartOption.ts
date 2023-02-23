import { scatterChartInterface } from "../interface/DataInterface";

export const initialScatterOption: scatterChartInterface = {
  title: {
    text: "ECharts Getting Started Example",
    left: "center",
    textStyle: {
      fontSize: 30,
      color: "red",
    },
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  tooltip: {},
  xAxis: {
    name: "Color Intensity",
    type: "value",
  },
  yAxis: {
    name: "Hue",
    type: "value",
  },
  series: [
    {
      type: "scatter",
      data: [],
    },
  ],
};
