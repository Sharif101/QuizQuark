import React, { useState } from "react";
import Options from "../Options/Options";
import "./Question.css";

const Question = ({ ques }) => {
  let { question, options, correctAnswer } = ques;

  // let [answer, setAnswer] = useState("");

  // let checkrslt = () => {
  //   // setAnswer(e);
  //   console.log(answer);
  //   if (answer === correctAnswer) {
  //     alert("correct");
  //   } else {
  //     alert("worng");
  //   }
  // };
  return (
    <div className="container">
      <div className="ques">
        <h5 className="ques-title">{question}</h5>
        {options.map((option) => (
          <Options option={option} correctAnswer={correctAnswer}></Options>
        ))}
        {/* <div className="options">
          <div className="inpt" onClick={() => checkrslt()}>
            <input
              onClick={(e) => setAnswer(e.target.value)}
              type="radio"
              name="check"
              id={answer}
              value={options[0]}
            ></input>
            <label htmlFor={answer}>{options[0]}</label>
          </div>
          <div className="inpt" onClick={() => checkrslt()}>
            <input
              onClick={(e) => setAnswer(e.target.value)}
              type="radio"
              name="check"
              id={answer}
              value={options[1]}
            ></input>
            <label htmlFor={answer}>{options[1]}</label>
          </div>
          <div className="inpt" onClick={() => checkrslt()}>
            <input
              onClick={(e) => setAnswer(e.target.value)}
              type="radio"
              name="check"
              id={answer}
              value={options[2]}
            ></input>
            <label htmlFor={answer}>{options[2]}</label>
          </div>
          <div className="inpt" onClick={() => checkrslt()}>
            <input
              onClick={(e) => setAnswer(e.target.value)}
              type="radio"
              name="check"
              id={answer}
              value={options[3]}
            ></input>
            <label htmlFor={answer}>{options[3]}</label>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Question;
