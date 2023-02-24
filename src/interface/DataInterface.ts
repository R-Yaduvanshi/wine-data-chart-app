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
  tooltip: {
    trigger: string;
    axisPointer: {
      type: string;
    };
  };
  xAxis: {
    name: string;
    type: string;
    data: string[];
    nameLocation: string;
    axisLabel: {
      formatter: string;
    };
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
      type: string;
      label: {
        show: boolean;
        position: string;
      };
      data: number[];
      showBackground: boolean;
    }
  ];
}
