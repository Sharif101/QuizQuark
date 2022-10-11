import React, { useState } from "react";
import "./Question.css";

const Question = ({ ques }) => {
  let { question, options, correctAnswer } = ques;

  let [answer, setAnswer] = useState("");

  let checkrslt = (e) => {
    setAnswer(e);
    if (answer !== correctAnswer) {
      alert("wrong");
    } else {
      alert("correct");
    }
  };
  return (
    <div className="container">
      <div className="ques">
        <h5 className="ques-title">{question}</h5>
        <div className="options">
          <div className="inpt">
            <input
              onClick={(e) => checkrslt(e.target.value)}
              type="radio"
              name="check"
              value={options[0]}
            ></input>
            <label>{options[0]}</label>
          </div>
          <div className="inpt">
            <input
              onClick={(e) => checkrslt(e.target.value)}
              type="radio"
              name="check"
              value={options[1]}
            ></input>
            <label>{options[1]}</label>
          </div>
          <div className="inpt">
            <input
              onClick={(e) => checkrslt(e.target.value)}
              type="radio"
              name="check"
              value={options[2]}
            ></input>
            <label>{options[2]}</label>
          </div>
          <div className="inpt">
            <input
              onClick={(e) => checkrslt(e.target.value)}
              type="radio"
              name="check"
              value={options[3]}
            ></input>
            <label>{options[3]}</label>
          </div>
          {/* <p>{options[0]}</p>
          <p>{options[1]}</p>
          <p>{options[2]}</p>
          <p>{options[3]}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Question;
