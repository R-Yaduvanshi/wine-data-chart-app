import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import { ChartData } from "../interface/DataInterface";
// import style from "../c";
import Navbar from "../config/Navbar";
const Scatter: React.FC = () => {
  const [data, setData] = useState<ChartData>({
    title: {
      text: "ECharts Getting Started Example",
    },
    xAxis: {
      name: "Color Intensity",
      type: "value",
      data: [],
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
  });

  //   Data received from Wine-Data.json
  useEffect(() => {
    const colorInte: number[] = [];
    const hue: number[] = [];
    for (const dataObj of WineData) {
      if (colorInte.length < 100) {
        colorInte.push(Number(dataObj["Color intensity"]));
        hue.push(Number(dataObj.Hue));
      }
    }

    setData({
      title: {
        text: "Scatter Plot chart",
      },
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

  return (
    <>
      <div>
        <ReactEcharts option={data} />
      </div>
    </>
  );
};

export default Scatter;
