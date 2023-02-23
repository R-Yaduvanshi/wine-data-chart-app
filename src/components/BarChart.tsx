import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import { barChartInterface } from "../interface/DataInterface";
import { initialBartChartOption } from "../Options/BarChartOption";
import "../css/chart.css";
import * as echarts from "echarts";

echarts.registerTheme("Night", {
  backgroundColor: "black",
});
echarts.registerTheme("Day", {
  backgroundColor: "#eee",
});
const BarChart: React.FC = () => {
  const [data, setData] = useState<barChartInterface>(initialBartChartOption);
  const [theme, setTheme] = useState<string>();
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
        nameLocation: "end",
        nameTextStyle: {
          color: "red",
          fontSize: 12,
          fontWeight: "bold",
          align: "left",
          overflow: "break",
        },
      },
      yAxis: {
        name: "Average Malic Acid",
        type: "value",
        nameTextStyle: {
          color: "red",
          fontSize: 12,
          fontWeight: "bold",
          align: "left",
          overflow: "break",
        },
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

  const handleTheme: () => void = () => {
    setTheme(theme === "Night" ? "Day" : "Night");
  };

  return (
    <div className="EchartMainContainer">
      <div className="scatterBtnDiv">
        <button onClick={handleTheme}>Toggle Theme</button>
      </div>
      <ReactEcharts className="reactEchart" option={data} theme={theme} />
    </div>
  );
};

export default BarChart;
