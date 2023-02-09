import React from "react";
import { Link } from "react-router-dom";

function Product() {
  const Products = [
    {
      id: 1,
      name: "amit",
      number: 8700282172,
      email: "#122347827",
      OrderDetails: "",
    },
    {
      id: 2,
      name: "amit",
      number: 8700282172,
      email: "#122347827",
      OrderDetails: "",
    },
    {
      id: 3,
      name: "sushil",
      number: 8700282100,
      email: "#1222734811",
      OrderDetails: "subDashboard",
    },
    {
      id: 4,
      name: "sushil",
      number: 8700282100,
      email: "#1222734811",
      OrderDetails: "subDashboard",
    },
    {
      id: 5,
      name: "sushil",
      number: 8700282100,
      email: "#1222734811",
      OrderDetails: "subDashboard",
    },
    {
      id: 6,
      name: "sushil",
      number: 8700282100,
      email: "#1222734811",
      OrderDetails: "subDashboard",
    },
    {
      id: 7,
      name: "sushil",
      number: 8700282100,
      email: "#1222734811",
      OrderDetails: "subDashboard",
    },
    {
      id: 8,
      name: "sushil",
      number: 8700282100,
      email: "#1222734811",
      OrderDetails: "subDashboard",
    },
    {
      id: 9,
      name: "sushil",
      number: 8700282100,
      email: "#1222734811",
      OrderDetails: "subDashboard",
    },
    {
      id: 10,
      name: "sushil",
      number: 8700282100,
      email: "#1222734811",
      OrderDetails: "subDashboard",
    },
  ];
  return (
    <div className="d-flex justify-content-end px-5">
      <div className="col-lg-10">
        <div className="row">
          <div style={{ overflowX: "scroll" }}>
            <div className="col-lg-12 my-3">
              <h5>Total Product</h5>
              <table className="table">
                <thead>
                  <tr className="table-success">
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Product ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Purchase Date</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Products.map((Products, index) => {
                    const { id, name, number, email, OrderDetails } = Products;
                    return (
                      <tr>
                        <th scope="row" key={id}>
                          {index + 1}
                        </th>
                        <td>{name}</td>
                        <td>{number}</td>
                        <td>{email}</td>
                        <td>{number}</td>
                        <td>{"01-02-2023"}</td>
                        <td className="">
                          <Link to={`/productDetails`}>
                            <i className="bi bi-eye-fill fs-5 text-success mx-2"></i>{" "}
                          </Link>
                          <i className="bi bi-archive-fill fs-5 text-danger"></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
