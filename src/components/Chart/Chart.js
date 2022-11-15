import React from "react";
import './Chart.css';
import ChartBar from "./ChartBar";

const Chart = props=>{
  const dataPointValue = props.dataPoints.map(dataPoint => dataPoint.value);// to convert the object into values ie. month as number 0,1,2 ..etc*/
  const totalMaximum = Math.max(...dataPointValue);//it id an array we use spread operator
  return (
    <div className="chart">
      {
          props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))
      }
   </div>
  );
 
}

export default Chart;
