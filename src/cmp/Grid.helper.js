import { data } from "./demi_data";
//  import { data1 } from './api_utill'

let months = {
  Jan: "01",
  Feb: "02",
  Mar: "03",
  Apr: "04",
  May: "05",
  Jun: "06",
  Jul: "07",
  Aug: "08",
  Sep: "09",
  Oct: "10",
  Nov: "11",
  Dec: "12",
};

 let year2020 = [], year2021 = [], year2022 = [];
  
 let year2020length, year2021length, year2022length;

const change = (data) => {
  for (let i = 0; i < data.length; i++) {

    let monthName = data[i]["commitDate"].slice(0, 3);
    let newdate = data[i]["commitDate"].replace(monthName, months[monthName]).replace(",", "");
    let [month, day, year] = newdate.split(" ");
    let formatedDate = `${year}-${month}-${day}`;

    if (formatedDate.slice(0, 4) === "2020") {
      year2020.push(formatedDate);
    }
    if (formatedDate.slice(0, 4) === "2021") {
      year2021.push(formatedDate);
    }
    if (formatedDate.slice(0, 4) === "2022") {
      year2022.push(formatedDate);
    }

  }
  year2020length = year2020.length;
  year2021length = year2021.length;
  year2022length = year2022.length;
};


change(data);



year2020 = year2020.reduce((accumulator, value) => {
  return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
}, {});
year2021 = year2021.reduce((accumulator, value) => {
  return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
}, {});
year2022 = year2022.reduce((accumulator, value) => {
  return { ...accumulator, [value]: (accumulator[value] || 0) + 1 };
}, {});


export let years = {
  "year2020": year2020,
  "year2021": year2021,
  "year2022": year2022,
};

export let yearslength = {
  "year2020": year2020length,
  "year2021": year2021length,
  "year2022": year2022length,
};


