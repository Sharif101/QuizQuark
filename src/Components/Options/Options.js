// import React, { useState } from "react";

import toast, { Toaster } from "react-hot-toast";
import "./Option.css";

const Options = ({ option, correctAnswer }) => {
  //   let [answer, setAnswer] = useState("");

  let rslt = (e) => {
    // console.log(e);
    if (e === correctAnswer) {
      toast.success("Correct Answer");
    } else {
      toast.error("Worng Answer");
    }
  };
  return (
    <div className="inpt">
      <Toaster position="top-center" reverseOrder={false} />
      <input
        onChange={(e) => rslt(e.target.value)}
        type="radio"
        name="check"
        id="check"
        value={option}
      ></input>
      <label htmlFor={""}>{option}</label>
    </div>
  );
};

export default Options;
