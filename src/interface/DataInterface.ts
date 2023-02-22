export interface ChartData {
  title: {
    text: string;
  };
  xAxis: {
    name: string;
    type: string;
    data?: number[];
  };
  yAxis: {
    name: string;
    type: string;
  };
  series: {
    type: string;
    data: number[];
  }[];
}

export interface BarData {
  xAxis: {
    type: string;
    data: string[];
  };
  yAxis: {
    type: string;
  };
  series: [
    {
      data: number[];
      type: string;
      showBackground: boolean;
      backgroundStyle: {
        color: "rgba(220, 220, 220, 0.8)";
      };
    }
  ];
}
