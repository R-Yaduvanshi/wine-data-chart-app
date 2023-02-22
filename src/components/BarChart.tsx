import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import { BarData } from "../interface/DataInterface";

const BarChart: React.FC = () => {
  const [data, setData] = useState<BarData>({
    title: {
      text: "Bar Chart",
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
        name: "Color Intencity",
        data: [],
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "rgba(220, 220, 220, 0.8)",
        },
      },
    ],
  });

  useEffect(() => {
    const malicAcid: number[] = [];
    const alcohol: number[] = [];
    for (const Data of WineData) {
      malicAcid.push(Data["Malic Acid"]);
      alcohol.push(Data.Alcohol);
    }

    setData({
      title: {
        text: "Bar Chart",
      },
      tooltip: {},
      xAxis: {
        name: "Alcohal",
        type: "category",
        data: alcohol,
      },
      yAxis: {
        name: "Average Malic Acid",
        type: "value",
      },
      series: [
        {
          name: "Average Malic Acid",
          data: malicAcid,

          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },
        },
      ],
    });
  }, []);

  return <ReactEcharts option={data} />;
};

export default BarChart;
