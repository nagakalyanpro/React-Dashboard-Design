import React from "react";

import './perf.scss'

const PerfTask = () => {
  return (
    <>
  <div className="feeds-sec">
  <div className="perf-table">
    <div className="perf-title">
    Top Performance <br />
       <span>Last 2 weeks</span>
       </div>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Reference</th>
            <th>Leads</th>
            <th>Deals</th>
            <th>Task</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ajay Kumar</td>
            <td>155</td>
            <td>140</td>
            <td>30 Tasks Done</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ajay Kumar</td>
            <td>155</td>
            <td>140</td>
            <td>30 Tasks Done</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ajay Kumar</td>
            <td>155</td>
            <td>140</td>
            <td>30 Tasks Done</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ajay Kumar</td>
            <td>155</td>
            <td>140</td>
            <td>30 Tasks Done</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ajay Kumar</td>
            <td>155</td>
            <td>140</td>
            <td>30 Tasks Done</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ajay Kumar</td>
            <td>155</td>
            <td>140</td>
            <td>30 Tasks Done</td>
            <td>90%</td>
          </tr>
          <tr>
              <td>1</td>
            <td>Ajay Kumar</td>
            <td>155</td>
            <td>140</td>
            <td>30 Tasks Done</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ajay Kumar</td>
            <td>155</td>
            <td>140</td>
            <td>30 Tasks Done</td>
            <td>90%</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Ajay Kumar</td>
            <td>155</td>
            <td>140</td>
            <td>30 Tasks Done</td>
            <td>90%</td>
          </tr>
        </tbody>
      </table>
    </div>
      
    <div className='perf-task'>
    <div className="perf-title">
    Tasks <br />
       <span>4 of 8 remaining</span>
       </div>
           <div className="inp-label">
           <label>
        <input type="checkbox" name="option1"  />
        Marketing Dashboard App
      </label>
      <label>
        <input type="checkbox" name="option2"  />
        Employee Dashboard
      </label>
      <label>
        <input type="checkbox" name="option3"  />
        Accounts
      </label>
      <label>
        <input type="checkbox" name="option3"  />
        Finance
      </label>
      <label>
        <input type="checkbox" name="option3"  />
        Development
      </label>
      <label>
        <input type="checkbox" name="option3"  />
        Dispatch
      </label>
           </div>
    </div>
  </div>

</>
  );
};

export default PerfTask;
