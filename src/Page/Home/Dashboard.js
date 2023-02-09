import React from "react";
import { Link } from "react-router-dom";
import SubDashBoard from "./SubDashBoard";

function Dashboard() {
  let box = [
    {
      id: 1,
      backgroundColor: "#AACB73",
      icon: "wallet",
      heading: "Total Revenue",
      number: "1200Rs.",
      col: 3,
    },
    {
      id: 2,
      backgroundColor: "#0694a2",
      icon: "people",
      heading: "Total Seller",
      number: 1200,
      col: 3,
    },
    {
      id: 3,
      backgroundColor: "#86A3B8",
      icon: "bag",
      heading: "Total Product",
      number: 12099,
      col: 3,
    },

    {
      id: 4,
      backgroundColor: "#ffa500",
      icon: "cart",
      heading: "Total Order",
      number: 1200,
      col: 3,
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-end px-5">
      <div className="col-lg-10">
        <h5>Dashboard Overview</h5>
        <div className="row my-1">
          {box.map((value) => {
            const { backgroundColor, icon, heading, number, col } = value;
            return (

              <div
                className={`col-lg-${col} text-center px-2 my-3`}
                key={value.id}
              >
                <Link to="/subDashboard">
                  <div
                    style={{ backgroundColor: backgroundColor }}
                    className={`content-center shadow-sm rounded-2 py-3`}
                  >
                    <div>
                      <i className={`bi bi-${icon} fs-3 text-white`}></i>
                      <div className="text-white">{heading}</div>
                      <h5 className="text-white">{number}</h5>
                    </div>
                  </div> </Link>
              </div>

            );
          })}
        </div>
      </div>
      </div>
      <SubDashBoard />
    </>
  );
}

export default Dashboard;
