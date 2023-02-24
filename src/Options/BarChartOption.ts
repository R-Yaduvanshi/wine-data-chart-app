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
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  xAxis: {
    name: "",
    type: "category",
    data: [],
    nameLocation: "end",
    axisLabel: {
      formatter: "Class {value}",
    },
    nameTextStyle: {
      color: "green",
      fontSize: 8,
      fontWeight: "bold",
      align: "left",
      overflow: "break",
    },
  },
  yAxis: {
    name: "",
    type: "value",
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
      data: [],
      type: "bar",
      label: {
        show: true,
        position: "top",
      },
      showBackground: true,
    },
  ],
};
