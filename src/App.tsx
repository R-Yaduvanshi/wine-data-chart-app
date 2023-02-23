import React from "react";
import Scatter from "./components/Scatter";
import BarChart from "./components/BarChart";
import "./css/chart.css";
function App() {
  return (
    <div className="parent-container">
      <Scatter />
      <BarChart />
    </div>
  );
}

export default App;
