import React from "react";
import "./Question.css";

const Question = ({ ques }) => {
  let { question, options } = ques;
  return (
    <div className="container">
      <div className="ques">
        <h5 className="ques-title">{question}</h5>
        <div className="options">
          <p>{options[0]}</p>
          <p>{options[1]}</p>
          <p>{options[2]}</p>
          <p>{options[3]}</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
