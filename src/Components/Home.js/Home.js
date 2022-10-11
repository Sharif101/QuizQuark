import React from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Quiz from "../Quiz/Quiz";
import "./Home.css";

const Home = () => {
  let quizes = useLoaderData().data;
  return (
    <div className="container">
      <Banner></Banner>
      <div className="quizes">
        {quizes.map((quiz) => (
          <Quiz key={quiz.id} quiz={quiz}></Quiz>
        ))}
      </div>
    </div>
  );
};

export default Home;
