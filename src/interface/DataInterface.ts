export interface ChartData {
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
