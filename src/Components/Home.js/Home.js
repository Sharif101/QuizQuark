import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {
  let quizes = useLoaderData().data;
  return (
    <div className="container quizes">
      {quizes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Home;
