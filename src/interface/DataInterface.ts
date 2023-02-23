export interface scatterChartInterface {
  title: {
    text: string;
    left: string;
    textStyle: {
      fontSize: number;
      color: string;
    };
  };
  toolbox: {
    feature: {
      saveAsImage: {};
    };
  };
  tooltip: {};
  xAxis: {
    name: string;
    type: string;
    nameLocation: string;
    nameTextStyle: {
      color: string;
      fontSize: number;
      fontWeight: string;
      align: string;
      overflow: string;
    };
  };
  yAxis: {
    name: string;
    type: string;
    nameLocation: string;
    nameTextStyle: {
      color: string;
      fontSize: number;
      fontWeight: string;
      align: string;
      overflow: string;
    };
  };
  series: {
    type: string;
    data: number[][];
  }[];
}

export interface barChartInterface {
  title: {
    text: string;
    left: string;
    textStyle: {
      fontSize: number;
      color: string;
    };
  };
  toolbox: {
    feature: {
      saveAsImage: {};
    };
  };
  tooltip: {};
  xAxis: {
    name: string;
    type: string;
    data: number[];
    nameLocation: string;
    nameTextStyle: {
      color: string;
      fontSize: number;
      fontWeight: string;
      align: string;
      overflow: string;
    };
  };
  yAxis: {
    name: string;
    type: string;
    nameTextStyle: {
      color: string;
      fontSize: number;
      fontWeight: string;
      align: string;
      overflow: string;
    };
  };
  series: [
    {
      data: number[];
      type: string;
      showBackground: boolean;
      backgroundStyle: {
        color: "rgba(220, 220, 220, 0.8)";
      };
      colorBy: string;
    }
  ];
}
