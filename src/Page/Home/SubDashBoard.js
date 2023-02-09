import React from "react";
import MainGraph from "./MainGraph";

function SubDashBoard() {
  let cart = [
    {
      id: 1,
      icon: "cart-check",
      heading: "Total User",
      number: 20000,
    },
    {
      id: 2,
      icon: "arrow-clockwise",
      heading: "This Month",
      number: 12000,
    },
    {
      id: 3,
      icon: "truck",
      heading: "This Week",
      number: 5000,
    },
    {
      id: 4,
      icon: "check",
      heading: "Today",
      number: 3000,
    },
  ];
  return (
    <div className="d-flex justify-content-end px-5">
      <div className="col-lg-10">
        <div className="row my-1">
          {cart.map((value) => {
            const { icon, heading, number } = value;
            return (
              <div className="col-lg-3 px-2 my-2" key={value.id}>
                <div
                  style={{ backgroundColor: "white" }}
                  className={`shadow-sm rounded-2 py-3`}
                >
                  <div className="d-flex justify-content-center">
                    <div className="content-center">
                      <i className={`bi bi-${"person"} fs-3 db-icon mx-2`}></i>
                    </div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <span className="mx-1">{heading}</span>
                        <span
                          className="text-success fw-bold"
                          style={{ fontSize: "smaller" }}
                        >
                          {" "}
                          20%<i className="bi bi-arrow-up"></i>
                        </span>
                      </div>
                      <div className="fs-4">{number}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <MainGraph />
      </div>
    </div>
  );
}

export default SubDashBoard;
