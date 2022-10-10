import React from "react";

const Question = ({ ques }) => {
  let { question } = ques;
  return (
    <div>
      <p>{question}</p>
    </div>
  );
};

export default Question;
