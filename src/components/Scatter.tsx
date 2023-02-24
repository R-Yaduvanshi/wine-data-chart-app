import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import { scatterChartInterface } from "../interface/DataInterface";
import { initialScatterOption } from "../Options/scatterChartOption";
import "../css/chart.css";

const Scatter: React.FC = () => {
  const [data, setData] = useState<scatterChartInterface>(initialScatterOption);
  const [theme, setTheme] = useState<string>();

  //   Data received from Wine-Data.json
  useEffect(() => {
    let objdata = WineData.map((elem) => [
      Number(elem["Color intensity"]),
      Number(elem["Hue"]),
    ]);

    setData({
      title: {
        text: "Scatter Plot chart",
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
        name: "Color Intensity",
        type: "value",
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
        name: "Hue",
        type: "value",
        nameLocation: "end",
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
          type: "scatter",
          data: objdata,
        },
      ],
    });
  }, []);

  // Theme function for Bar Chart
  const handleTheme: () => void = () => {
    setTheme(theme === "Night" ? "Day" : "Night");
  };
  return (
    <>
      <div className="EchartMainContainer">
        <div className="scatterBtnDiv">
          <button onClick={handleTheme}>Toggle Theme</button>
        </div>

        <ReactEcharts className="reactEchart" option={data} theme={theme} />
      </div>
    </>
  );
};

export default Scatter;
