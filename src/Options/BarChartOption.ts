import { barChartInterface } from "./../interface/DataInterface";
export const initialBartChartOption: barChartInterface = {
  title: {
    text: "Bar Chart",
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
    name: "",
    type: "category",
    data: [],
  },
  yAxis: {
    name: "",
    type: "value",
  },
  series: [
    {
      data: [],
      type: "bar",
      showBackground: true,
      backgroundStyle: {
        color: "rgba(220, 220, 220, 0.8)",
      },
      colorBy: "data",
    },
  ],
};
