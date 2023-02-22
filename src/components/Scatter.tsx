import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import { ChartData } from "../interface/DataInterface";

const Scatter: React.FC = () => {
  const [data, setData] = useState<ChartData>({
    xAxis: {
      name: "Color Intensity",
      type: "value",
      data: [1, 2, 3, 4, 5, 6],
    },
    yAxis: {
      name: "Hue",
      type: "value",
    },
    series: [
      {
        type: "scatter",
        data: [1, 2, 3, 4, 5, 6, 8],
      },
    ],
  });

  useEffect(() => {
    const colorInte: number[] = [];
    const hue: number[] = [];
    for (const dataObj of WineData) {
      //   console.log("MyOBJ=>", dataObj["Color intensity"]);
      if (colorInte.length < 30) {
        colorInte.push(Number(dataObj["Color intensity"]));
        hue.push(Number(dataObj.Hue));
      }
    }

    setData({
      xAxis: {
        name: "Color Intensity",
        type: "value",
        data: colorInte,
      },
      yAxis: {
        name: "Hue",
        type: "value",
      },
      series: [
        {
          type: "scatter",
          data: hue,
        },
      ],
    });
  }, []);

  return <ReactEcharts option={data} />;
};

export default Scatter;
