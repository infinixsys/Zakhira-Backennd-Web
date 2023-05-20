import {React,useState} from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import Search from './Search';
import Sort from './Sort';


function PendingSeller() {
  const PendingSeller = [
    {
      id: 1,
      name: "amit",
      number: 8700282172,
      email: "ak7280032@gmail.com",
      OrderDetails: "",
    },
    {
      id: 2,
      name: "amit kumar",
      number: 8700282172,
      email: "ak7280032@gmail.com",
      OrderDetails: "",
    },
    {
      id: 3,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 4,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 5,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 6,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 7,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 8,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 9,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 10,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
  ];

  const btn = document.getElementById("StatusUpdate");
  const [color, setColor] = useState("warning")
  const StatusUpdate = () =>{

  }
       
  return (
    <div className="d-flex justify-content-end px-5">

      <div className="col-lg-10">
      <div className="row justify-content-between my-2">
          <div className="col-lg-4">
            {" "}
            <Search/>
          </div>
          <div className="col-lg-4">
            <Sort />
          </div>
        </div>
        <div className="row">
          <div style={{ overflowX: "scroll" }}>
            <div className="col-lg-12">
              <h5>Pending Sellers</h5>
              <table className="table">
                <thead>
                  <tr className="table-success">
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Verification</th>
                    <th scope="col">User Details</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {PendingSeller.map((PendingSeller, index) => {
                    const { id, name, number, email, OrderDetails } =
                      PendingSeller;
                    return (
                      <tr>
                        <th scope="row" key={id}>
                          {index + 1}
                        </th>
                        <td>{name}</td>
                        <td>{number}</td>
                        <td>{email}</td>
                        <td>
                          {" "}
                          <button className={`btn btn-${color} btn-sm` } id={"StatusUpdate"} onClick={StatusUpdate}>
                            {"Pending"}
                          </button>
                        </td>

                        <td className="">
                        <DropDown/>
                        </td>
                        <td>
                          {" "}
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

export default PendingSeller;
