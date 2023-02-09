import React from "react";
import { Link } from "react-router-dom";
import Graph from "./Graph";
import GraphCircle from "./GraphCircle";

function MainGraph() {
  const orders = [
    {
      id: 1,
      name: "amit",
      number: 8700282172,
      email: "ak7280032@gmail.com",
      OrderDetails: "",
    },
    {
      id: 2,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
  ];
  return (
    <>
      <div className="row">
      <div className="col-lg-5 content-center bg-white rounded">
        <GraphCircle/>
        </div>
        <div className="col-lg-7">
        <Graph />
        </div>
       
      </div>
    </>
  );
}

export default MainGraph;
