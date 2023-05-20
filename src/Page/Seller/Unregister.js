import { colors } from "@mui/material";
import { React, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import Search from "./Search";
import Sort from "./Sort";
import axios from "axios";

function Unregister() {
  let location = useLocation();
  const tokenData = sessionStorage.getItem("accessToken");
  useEffect(() => {}, [location]);
  const registerBtn = {
    padding: "5px 15px 5px 15px",
    backgroundColor: "white",
    display: "inline-block",
    borderRadius: "5px",
    cursor: "pointer",
    marginRight: "10px",
    fontSize: "16px",
  };

  // const RUsers = [
  //   {
  //     id: 3,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "sushil@gmail.com",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 4,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "sushil@gmail.com",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 5,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "sushil@gmail.com",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 6,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "sushil@gmail.com",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 7,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "sushil@gmail.com",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 8,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "sushil@gmail.com",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 9,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "sushil@gmail.com",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 10,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "sushil@gmail.com",
  //     OrderDetails: "subDashboard",
  //   },
  // ];
  const [unregisterData, SetUnregisterData] = useState([]);
  let UnUser = async () => {
    const UnUserData = await axios.get(
      "http://35.154.124.131:3000/api/v1/admin/un_register_seller",
      {
        headers: {
          Authorization: `Bearer ${tokenData}`,
          "Content-Type": "application/json",
        },
      }
    );
    try {
      SetUnregisterData(UnUserData.data.results);
      console.log(unregisterData.data.results);
    } catch (error) {
      console.log(error);
    }
  };


  const [NewState,SetNewState] = useState();
  const [Status, SetStatus] = useState({
    id: NewState,
    status:false,
    reason: "",
  });
  const {status, reason } = Status;

  const OnStatusChange = (e) => {
    SetStatus({ ...Status, [e.target.name]: e.target.value });
  };

  const StatusData = async () => {
    const headers = {
      Authorization: `Bearer ${tokenData}`,
    };
    let StatusApi = await axios.patch(
      `http://35.154.124.131:3000/api/v1/admin/seller/`,
      Status,
      {
        headers,
      }
    );
    SetStatus({
      status: "",
      reason: "",
    });
  };

  useEffect(() => {
    UnUser();
  }, []);
   
  return (
    <>
      <div className="d-flex justify-content-end px-5">
        <div className="col-lg-10">
          <div className="row justify-content-between my-2">
            <div className="col-lg-4">
              {" "}
              <Search />
            </div>
            <div className="col-lg-4">
              <Sort />
            </div>
          </div>
          <div className="row">
            <div style={{ overflowX: "scroll" }}>
              <div className="col-lg-12">
                <Link to="/register">
                  <h5 style={registerBtn} className="shadow-sm">
                    Register Seller
                  </h5>
                </Link>
                <Link
                  to="/unregister"
                  className={`${
                    location.pathname === "/unregister" ? "color" : ""
                  }`}
                >
                  <h5 style={registerBtn} className="shadow-sm">
                    Unregister Seller
                  </h5>
                </Link>
                <table className="table">
                  <thead>
                    <tr className="table-success">
                      <th scope="col">S.no</th>
                      <th scope="col">Name</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">Email</th>
                      <th scope="col">status</th>
                      <th scope="col">Users Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {unregisterData.map((Users, index) => {
                      const { firstName, number, email, sellerId, status } =
                        Users;
                      return (
                        <tr>
                          <th scope="row" key={sellerId}>
                            {index + 1}
                          </th>
                          <td>{firstName}</td>
                          <td>{number}</td>
                          <td>{email}</td>
                          <td>
                            <button
                              className={
                                status
                                  ? "btn btn-sm btn-success"
                                  : "btn btn-sm btn-danger"
                              }
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={()=>SetStatus({id:sellerId,status:!status})}
                            >
                              {status ? "active" : "Inactive"}
                              
                            </button>
                          </td>
                          <td>
                            <DropDown sellerId={sellerId} />
                          </td>
                          {/* <td className="">
                          <i className="bi bi-archive-fill fs-5 text-danger"></i>
                        </td> */}
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
      {/* Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Status Changes
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="mt-3">
                <label htmlFor="">Reason</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Reason"
                  onChange={OnStatusChange}
                  name="reason"
                  value={reason}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="">Status</label>
                <select
                  className="form-control"
                  onChange={OnStatusChange}
                  name="status"
                  value={status}
                >
                  <option value={true}>True</option>
                  <option value={false}>false</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
                onClick={StatusData}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Unregister;
