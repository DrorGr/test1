import { useEffect, useState } from "react";
import Calendar from "react-github-contribution-calendar";
import { years, dupCouner, dataFormater } from "./utils/Grid.helper";

const Grid = () => {

  const [Values, setValues] = useState("");
  const [year, setYear] = useState(`the current year, pick an year -->> `);
  const [num, setNum] = useState("To view the data regarding");


  useEffect(() => {
    fetchData();
  }, []);   
 

  const fetchData = async () => {
    await fetch(`https://cloudwize-public.s3.us-east-2.amazonaws.com/interview/data-2FTFt8ZcCKeN_g6ffr-ib.json`)  
    .then((res) => res.json())
    .then((res) => dataFormater(res))
    .catch((error) => console.error(`ERROR! ${error}`));
  };

  const optionHendler = (e) => {  
    setYear(e.target.value);
    setValues(dupCouner(years["year" + e.target.value]));
    setNum(years["year" + e.target.value].length);
  }; 


//////////////////////////PackageProps/////
  let until = `${year} ,12 31`;
  let panelColors = ['#0b0f14','#073c25','#03622f','#17ce51','#17ce51'];
  let monthNames= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  let weekNames = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
  let panelAttributes = { 'rx': 3, 'ry': 3  };
//////////////////////////////////////////////


  return ( 
    <>
      <div className="wrapper">
        <div className="title">
          <p>
            {num} Contribluters in {year}
          </p>
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
        <div className="selections">
        <button value="2020" onClick={optionHendler}>2020</button>
        <button value="2021" onClick={optionHendler}>2021</button>
        <button value="2022" onClick={optionHendler}>2022</button>
        </div>
        <div className="legend">
          <p>low</p>
          <div style={{backgroundColor: "#0b0f14", width: "16px", height: "16px"}}></div>
          <div style={{backgroundColor: "#073c25", width: "16px", height: "16px"}}></div>
          <div style={{backgroundColor: "#03622f", width: "16px", height: "16px"}}></div>
          <div style={{backgroundColor: "#17ce51", width: "16px", height: "16px"}}></div>
          <p>high</p>
        </div>
      </div>
</>
  );
};

export default Grid;
