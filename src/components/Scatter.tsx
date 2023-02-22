import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import { ChartData } from "../interface/DataInterface";
// import styles from "../css/scatterstyle.module.css";

const Scatter: React.FC = () => {
  const [data, setData] = useState<ChartData>({
    title: {
      text: "ECharts Getting Started Example",
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
  });

  //   Data received from Wine-Data.json
  useEffect(() => {
    let objdata = WineData.map((elem) => [
      Number(elem["Color intensity"]),
      Number(elem["Hue"]),
    ]);

    setData({
      title: {
        text: "Scatter Plot chart",
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
          data: objdata,
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
