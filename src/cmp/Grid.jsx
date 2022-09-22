import React, { useState, useEffect } from "react";
import Calendar from "react-github-contribution-calendar";





const Grid = () => {
 
  const [data, setData] = useState([]);
  const [values, setValues] = useState({});

  let dateArr = [];
  let count = {};
  let until = "2020 ,06 30"; 

  useEffect(() => {
    loadData();
    values1(data);
  }, []);

  const loadData = async () => {
    const response = await fetch(
      `https://cloudwize-public.s3.us-east-2.amazonaws.com/interview/data-2FTFt8ZcCKeN_g6ffr-ib.json`
    );
    const data = await response.json();
    setData(data);
  };


  const values1 = (data) => {
    for (const key in data) {
      dateArr.push(data[key]["commitDate"]);
    }
     dateArr.forEach((e) => {
      count[e] = (count[e] || 0) + 1;
    });
    
    setValues(count); 
    
  };
 

  console.log(values);
   

  return (
    <div>
      <Calendar values={values} until={until} />
    </div>
  );
};

export default Grid;
