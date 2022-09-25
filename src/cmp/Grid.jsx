import { useState } from "react";
import Calendar from "react-github-contribution-calendar";
import { years, yearslength } from "./utils/Grid.helper";

const Grid = () => {

  const [year, setYear] = useState("2020");
  const [num, setNum] = useState(yearslength["year2020"]);
  const [Values, setValues] = useState(years["year2020"]);

  const optionHendler = (e) => {
    setYear(e.target.value);
    setNum(yearslength["year" + e.target.value]);
    setValues(years["year" + e.target.value]);
  }; 

//////////////////////////PackageProps/////
  let until = `${year} ,12 31`;
  let panelColors = ['#040404','#073c25','#03622f','#17ce51','#17ce51'];
  let monthNames= [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  let weekNames = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
  let panelAttributes = { 'rx': 3, 'ry': 3 };
//////////////////////////////////////////////

  return (
    <>
      <div className="wrapper">
        <div className="title">
          <p>
            {num} Contribluters in {year}
          </p>
        </div>
        <div className="selections">
        <button value="2020" onClick={optionHendler}>2020</button>
        <button value="2021" onClick={optionHendler}>2021</button>
        <button value="2022" onClick={optionHendler}>2022</button>
        </div>
        <div className="graph">
          <Calendar 
          values={Values} 
          until={until}
          panelColors={panelColors} 
          weekNames={weekNames}
          monthNames={monthNames}
          panelAttributes={panelAttributes}/>
        </div>
      </div>
    </>
  );
};

export default Grid;
