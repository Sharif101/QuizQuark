import React from "react";
import { useLoaderData } from "react-router-dom";
import Question from "../Question/Question";

const Questions = () => {
  let questions = useLoaderData().data.questions;
  return (
    <div>
      {questions.map((ques) => (
        <Question ques={ques}></Question>
      ))}
    </div>
  );
};

export default Questions;
