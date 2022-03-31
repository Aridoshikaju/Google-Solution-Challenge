import React from "react";
import { Chart } from "react-google-charts";

const processData = (dataObjs, dataArr, size) => {
  
}

const ReceiveData = async () => {
  try {
    const response = await fetch('http://localhost:5001/api/producerload/producerload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: "mail_1@gmail.com"
      })
    });
    const responseData = await response.json();
    console.log("Hotel Data: ", responseData);
    // console.log(typeof(responseData));
    var sortedKeys = Object.keys(responseData).sort();
    var first = responseData[sortedKeys[0]];
    var size = Object.keys(responseData).length;
    processData(responseData, sortedKeys, size);
  }
  catch (err) {
    console.log(err);
  }
}

export const dateData = [
  [
    "Dates",
    "Rice",
    "Roti",
    "Curry(VEG)",
    "Curry(NON-VEG)"
  ],
  [, 165, 938, 522, 998],
  [, 135, 1120, 599, 1268],
  [, 157, 1167, 587, 807],
  [, 139, 1110, 615, 968],
  [, 136, 691, 629, 1026],
];

export const data = [
  [
    "Month",
    "Bolivia",
    "Ecuador",
    "Madagascar",
    "Papua New Guinea",
    "Rwanda",
    "Average",
  ],
  ["2004/05", 165, 938, 522, 998, 450, 614.6],
  ["2005/06", 135, 1120, 599, 1268, 288, 682],
  ["2006/07", 157, 1167, 587, 807, 397, 623],
  ["2007/08", 139, 1110, 615, 968, 215, 609.4],
  ["2008/09", 136, 691, 629, 1026, 366, 569.6],
];

const options = {
  title: "Monthly Coffee Production by Country",
  vAxis: { title: "Cups" },
  hAxis: { title: "Month" },
  seriesType: "bars",
  series: { 5: { type: "line" } },
  backgroundColor: '#495056',
};

export default function Graph_producer() {
  console.log("ReceiveData called");
  ReceiveData();
  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
