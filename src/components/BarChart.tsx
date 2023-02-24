import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import {
  AverageMalicAcid,
  barChartInterface,
} from "../interface/DataInterface";
import { initialBartChartOption } from "../Options/BarChartOption";
import "../css/chart.css";
import * as echarts from "echarts";
// import WineData from "../config/Wine-Data.json";
echarts.registerTheme("Night", {
  backgroundColor: "black",
});
echarts.registerTheme("Day", {
  backgroundColor: "#eee",
});
const BarChart: React.FC = () => {
  const [data, setData] = useState<barChartInterface>(initialBartChartOption);
  const [theme, setTheme] = useState<string>();
  const [averageMalicAcids, setAverageMalicAcids] = useState<
    AverageMalicAcid[]
  >([]);

  const malicAcidsByClass: { [key: number]: number[] } = {};
  const XaxisClassData: number[] = [];
  const seriesData: number[] = [];

  averageMalicAcids.map((elem) => {
    XaxisClassData.push(elem.class);
    seriesData.push(elem.average);
  });

  useEffect(() => {
    // here i'm storing each class with their Malik Acid
    WineData.forEach((data) => {
      if (!malicAcidsByClass[data.Alcohol]) {
        malicAcidsByClass[data.Alcohol] = [];
      }
      malicAcidsByClass[data.Alcohol].push(data["Malic Acid"]);
    });

    // Calculation of average malic acid for each class
    const averages = Object.entries(malicAcidsByClass).map(
      ([classKey, malicAcids]) => {
        const classNumber = parseInt(classKey);
        const average =
          malicAcids.reduce((a, b) => a + b, 0) / malicAcids.length;
        return { class: classNumber, average };
      }
    );

    setAverageMalicAcids(averages);

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
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      xAxis: {
        name: "Alcohal",
        type: "category",
        data: XaxisClassData,
        nameLocation: "end",
        axisLabel: {
          formatter: "Class {value}",
        },
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
          data: seriesData,
          type: "bar",
          label: {
            show: true,
            position: "top",
          },
          showBackground: true,
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
