
/// Variables for formating the data 
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
///


///Formating the recived data to the format used by the pakage///

export const dataFormater = (data) => {
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
};

///Counting the dates duplicates  
export const dupCouner = (array) => {
// eslint-disable-next-line no-sequences
return array.reduce((a, c) => (a[c] = ++a[c] || 1 , a), {});
};
///


/// Exporting the final data in a easly queried  format 
export let years = {
  "year2020": year2020,
  "year2021": year2021,
  "year2022": year2022,
};


