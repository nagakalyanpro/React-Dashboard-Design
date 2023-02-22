import React from "react";
import { FiDownload } from "react-icons/fi";
import InfoBlock from "../components/InfoBlock";
import BarChartInf from "../components/infographs/BarChartInf";
import InfoGraphs from "../components/infographs/InfoGraphs";
import LineChartInf from "../components/infographs/LineChartInf";
import PerfTask from "../components/performance/PerfTask";


import "./main.scss";

const Main = () => {
  return (
    <div className="main-section">
      <div className="first-section">
        <div className="first-left">
          Hi Katie Pena <br />
          <span>Welcome back to CRM Dashboard</span>
        </div>
        <div className="first-right">
          <button>
            <FiDownload />
            Download
          </button>
          <button
            style={{
              backgroundColor: "var(--btn-primary)",
              color: "var(--secondary-color)",
              border: "var(--border)",
            }}
          >
            Add Dashlet
          </button>
        </div>
      </div>
      <div className="second-section">
        <InfoBlock />
      </div>
      <div className="third-section">
        <div className="info-graph">
          <div className="pie-graph">
            <InfoGraphs />
          </div>
          <div className="pie-graph">
            <BarChartInf />
          </div>
          <div className="pie-graph">
            <LineChartInf />
          </div>
        </div>
      </div>
      <div className="fourth-section">
        <PerfTask />
   
      </div>
    </div>
  );
};

export default Main;
