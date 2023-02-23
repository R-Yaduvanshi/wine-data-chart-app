import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import { barChartInterface } from "../interface/DataInterface";
import { initialBartChartOption } from "../Options/BarChartOption";

const BarChart: React.FC = () => {
  const [data, setData] = useState<barChartInterface>(initialBartChartOption);

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
          data: malicAcid,

          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },
          colorBy: "data",
        },
      ],
    });
  }, []);

  return (
    <div
      style={{
        width: "90%",
        height: "50%",
        padding: "10px",
      }}
    >
      <ReactEcharts
        style={{
          width: "100%",
          height: "400px",
        }}
        option={data}
      />
    </div>
  );
};

export default BarChart;
