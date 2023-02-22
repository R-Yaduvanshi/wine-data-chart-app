import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";

interface BarData {
  xAxis: {
    name: string;
    type: string;
    data: number[];
  };
  yAxis: {
    name: string;
    type: string;
  };
  series: [
    {
      name: string;
      data: number[];
      type: string;
      showBackground: boolean;
      backgroundStyle: {
        color: "rgba(220, 220, 220, 0.8)";
      };
    }
  ];
}

const BarChart: React.FC = () => {
  const [data, setData] = useState<BarData>({
    xAxis: {
      name: "Alcohal",
      type: "category",
      data: [],
    },
    yAxis: {
      name: "Color Intencity",
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
      xAxis: {
        name: "Alcohal",
        type: "category",
        data: alcohol,
      },
      yAxis: {
        name: "average",
        type: "value",
      },
      series: [
        {
          name: "Color Intensity",
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
