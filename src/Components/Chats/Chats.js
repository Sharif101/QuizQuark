import React from "react";
import { useLoaderData } from "react-router-dom";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import "./Chats.css";

const Chats = () => {
  let data = useLoaderData().data;
  //   let { total } = data;
  console.log(data);
  return (
    <div className="container">
      <div className="chat" style={{ width: "95%" }}>
        <LineChart width={300} height={300} data={data}>
          <Line type="monotone" dataKey="total" stroke="#82ca9d"></Line>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
    </div>
  );
};

export default Chats;
