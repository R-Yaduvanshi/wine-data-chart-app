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
    nameLocation: "end",
    nameTextStyle: {
      color: "red",
      fontSize: 12,
      fontWeight: "bold",
      align: "left",
      overflow: "break",
    },
  },
  yAxis: {
    name: "Hue",
    type: "value",
    nameLocation: "end",

    nameTextStyle: {
      color: "red",
      fontSize: 12,
      fontWeight: "bold",
      align: "left",
      overflow: "break",
    },
  },
  series: [
    {
      type: "scatter",
      data: [],
    },
  ],
};
