import React, { useState, useEffect } from "react";
import ReactEcharts from "echarts-for-react";
import WineData from "../config/Wine-Data.json";
import { scatterChartInterface } from "../interface/DataInterface";
import * as echarts from "echarts";
import { initialScatterOption } from "../Options/scatterChartOption";
const Scatter: React.FC = () => {
  console.log(echarts.registerTheme);
  const [data, setData] = useState<scatterChartInterface>(initialScatterOption);

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
      <div
        style={{
          width: "90%",
          height: "100%",
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
    </>
  );
};

export default Scatter;
