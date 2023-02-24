import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import "../css/chart.css";
import { barChartInterface } from "../interface/DataInterface";

const BarChart: React.FC = () => {
  // it contain theme value
  const [theme, setTheme] = useState<string>();
  // it contain alcohal class
  const [xAxisData, setXaxisData] = useState<string[]>([]);
  // it contain average of malicAcid
  const [seriesDataa, setSeriesData] = useState<number[]>([]);

  // getData function a object and in this object, i'm setting the key as class of Alcohal,
  // and assign each key is a array of malick acid data
  const getData = () => {
    let malicAcidsByClass: { [key: number]: number[] } = {};
    WineData.forEach((data) => {
      if (!malicAcidsByClass[data.Alcohol]) {
        malicAcidsByClass[data.Alcohol] = [];
      }
      malicAcidsByClass[data.Alcohol].push(data["Malic Acid"]);
    });

    // Here i'm calling the calculateAverage which takes malicAcidsByClass as parameter
    calculateAverage(malicAcidsByClass);
  };

  // here i'm defining the calculateAverage function
  // in this function i'm set the both state [setXaxisData] and setSeriesData
  const calculateAverage = (malicAcidData: any) => {
    setXaxisData(Object.keys(malicAcidData));
    const avg: number[] = [];
    const averages = Object.entries(malicAcidData).map(
      ([classKey, malicAcids]) => {
        const classNumber = parseInt(classKey);
        const average =
          (malicAcids as number[]).reduce((a: number, b: number) => a + b, 0) /
          (malicAcids as number[]).length;
        return { class: classNumber, average };
      }
    );

    averages.forEach((elem) => {
      avg.push(elem.average);
    });
    setSeriesData(avg);
  };

  useEffect(() => {
    getData();
  }, []);

  // Theme function
  const handleTheme: () => void = () => {
    setTheme(theme === "Night" ? "Day" : "Night");
  };

  // optionData
  const optionData: barChartInterface = {
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
      data: xAxisData,
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
        data: seriesDataa,
        type: "bar",
        label: {
          show: true,
          position: "top",
        },
        showBackground: true,
      },
    ],
  };

  return (
    <div className="EchartMainContainer">
      <div className="scatterBtnDiv">
        <button onClick={handleTheme}>Toggle Theme</button>
      </div>
      <ReactEcharts className="reactEchart" option={optionData} theme={theme} />
    </div>
  );
};

export default BarChart;
