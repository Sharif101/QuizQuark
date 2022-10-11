// import React, { useState } from "react";
import Options from "../Options/Options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./Question.css";
import { useState } from "react";

const Question = ({ ques }) => {
  let { question, options, correctAnswer } = ques;

  let [showrslt, setShowrslt] = useState(false);

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
        <h5 className="ques-title">
          {question}
          {showrslt ? (
            <FontAwesomeIcon
              className="icon"
              onClick={() => setShowrslt(!showrslt)}
              icon={faEyeSlash}
            ></FontAwesomeIcon>
          ) : (
            <FontAwesomeIcon
              className="icon"
              onClick={() => setShowrslt(!showrslt)}
              icon={faEye}
            ></FontAwesomeIcon>
          )}
        </h5>

        {options.map((option) => (
          <Options option={option} correctAnswer={correctAnswer}></Options>
        ))}
        <p className="correctans">
          Correct answer: {showrslt ? correctAnswer : ""}
        </p>
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
