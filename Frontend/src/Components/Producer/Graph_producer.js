import React from "react";
import { Chart } from "react-google-charts";

var finalData = [[
  "Dates",
  "Rice",
  "Roti",
  "Curry(VEG)",
  "Curry(NON-VEG)"
]]
var propertyValues = [];
const processData = (dataObjs, sortedKeys, size) => {
  var date = []
  var food = []
  var dataKeys = Object.keys(dataObjs);
  var datavalues = Object.values(dataObjs);
  for (let i = size - 1, j = 0; i > size - 6; i--, j++) {
    food[j] = datavalues[i];
    date[j] = dataKeys[i];
  }
  console.log("food:", food)
  console.log("date:", date)
  // finalData[0] = [
  //   "Dates",
  //   "Rice",
  //   "Roti",
  //   "Curry(VEG)",
  //   "Curry(NON-VEG)"
  // ]

  for (var i = 0, j = 0, k = 1; i < 5; i++, k++) {
    var newFood = new Array();
    newFood[j++] = date[i];
    newFood[j++] = parseInt((food[i]).rice);
    newFood[j++] = parseInt((food[i]).roti);
    newFood[j++] = parseInt((food[i]).curryveg);
    newFood[j++] = parseInt((food[i]).currynonveg);
    j = 0;
    finalData[k] = newFood;
  }

  console.log(typeof (finalData))

  const propertyNames = Object.keys(finalData);

  console.log("propertyNames: ", propertyNames);

  propertyValues = Object.values(finalData);

  console.log("propertyValues: ", propertyValues);
}

const ReceiveData = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/producerload/producerload', {
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

export var dateData = [
  [
    "Dates",
    "Rice",
    "Roti",
    "Curry(VEG)",
    "Curry(NON-VEG)"
  ],
  ['new date', 165, 938, 522, 998],
  ["date", 135, 1120, 599, 1268],
  ["date", 157, 1167, 587, 807],
  ["date", 139, 1110, 615, 968],
  ["date", 136, 691, 629, 1026],
];

dateData = [['Dates', 'Rice', 'Roti', 'Curry(VEG)', 'Curry(NON-VEG)'],
['30-3-2022', 10, 20, 10, 9],
['29-3-2022', 10, 20, 10, 10],
['28-3-2022', 9, 12, 1, 3],
['2022-03-31', 12, 16, 2, 3],
['2022-03-30', 1, 20, 3, 3]]



const options = {
  title: "Hotel Food Information",
  vAxis: { title: "Food", textStyle: {color: '#FFF'}, titleTextStyle: {color: '#fff'} },
  hAxis: { title: "Date", textStyle: {color: '#FFF'}, titleTextStyle: {color: '#fff'} },
  seriesType: "bars",
  series: { 5: { type: "line" } },
  backgroundColor: '#353535',
  legendTextStyle: { color: '#FFF' },
  titleTextStyle: { color: '#FFF' }
};

export default function Graph_producer() {
  console.log("ReceiveData called");
  ReceiveData();
  console.log(finalData)
  console.log("dateData: ", typeof (finalData[0][0]))
  return (
    <Chart
      chartType="ComboChart"
      width="100%"
      height="500px"
      data={finalData}
      options={options}
    />
  );
}
