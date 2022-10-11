import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";
import "./Questions.css";

const Questions = () => {
  let Ques = useLoaderData();
  let { name } = Ques.data;
  let questions = Ques.data.questions;
  return (
    <div className="container">
      <div className="questions-title">
        <h5>{name} Questions are here</h5>
      </div>

      {questions.map((ques) => (
        <Question ques={ques}></Question>
      ))}
    </div>
  );
};

export default Questions;
