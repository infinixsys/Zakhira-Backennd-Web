import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "./Search";
import Sort from "./Sort";
import DropDown from "./DropDown";
import { useParams } from "react-router-dom";

function RecentOrder() {
  // const orders = [
  //   {
  //     id: 1,
  //     name: "amit",
  //     number: 8700282172,
  //     email: "#122347827",
  //     OrderDetails: "",
  //   },
  //   {
  //     id: 2,
  //     name: "amit",
  //     number: 8700282172,
  //     email: "#122347827",
  //     OrderDetails: "",
  //   },
  //   {
  //     id: 3,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "#1222734811",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 4,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "#1222734811",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 5,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "#1222734811",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 6,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "#1222734811",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 7,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "#1222734811",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 8,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "#1222734811",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 9,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "#1222734811",
  //     OrderDetails: "subDashboard",
  //   },
  //   {
  //     id: 10,
  //     name: "sushil",
  //     number: 8700282100,
  //     email: "#1222734811",
  //     OrderDetails: "subDashboard",
  //   },
  // ];
  const tokenData = sessionStorage.getItem("accessToken");
  const { id } = useParams();
  const [order, setOder] = useState([]);
  let sellerOder = async () => {
    const OderData = await axios.get(
      `http://35.154.124.131:3000/api/v1/admin/all_booked_order/seller/${id}`,
      {
        headers: {
          Authorization: `Bearer ${tokenData}`,
          "Content-Type": "application/json",
        },
      }
    );
    try {
      setOder(OderData.data.results);
      console.log(OderData.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    sellerOder();
  }, []);
  return (
    <div className="d-flex justify-content-end px-5">
      <div className="col-lg-10">
        <div className="row justify-content-between my-2">
          <h5>Total Order</h5>
          <div className="col-lg-4">
            {" "}
            <Search />
          </div>
          <div className="col-lg-4">
            <Sort />
          </div>
          <div className="col-lg-4 text-end">
            <DropDown />
          </div>
        </div>
        <div className="row">
          <div style={{ overflowX: "scroll" }}>
            <div className="col-lg-12 my-3">
              <table className="table">
                <thead>
                  <tr className="table-success">
                    <th scope="col">S.no</th>
                    <th scope="col">product Name</th>
                    <th scope="col">product Image</th>
                    <th scope="col">price</th>
                    <th scope="col">booking Status</th>
                    <th scope="col">deliveryStatus</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((orders, index) => {
                    const {
                      id,
                      productName,
                      productImage,
                      price,
                      bookingStatus,
                      deliveryStatus,
                      userId,
                      bookingId,
                      prductBookingId,
                      sellerId
                    } = orders;
                    return (
                      <tr>
                        <th scope="row" key={id}>
                          {index + 1}
                        </th>
                        <td>{productName}</td>
                        <td>
                          <img
                            src={productImage}
                            height={"50px"}
                            className="rounded"
                            width="auto"
                            alt=""
                          />
                        </td>
                        <td>{price}</td>
                        <td>
                          <button
                            className={
                              bookingStatus
                                ? "btn btn-success btn-sm"
                                : "btn btn-sm btn-danger"
                            }
                          >
                            {bookingStatus ? "True" : "False"}
                          </button>
                        </td>
                        <td>
                          <button
                            className={
                              deliveryStatus == "pending"
                                ? "btn btn-warning btn-sm"
                                : "btn btn-sm btn-success"
                            }
                          >
                            {deliveryStatus == "pending"
                              ? "pending"
                              : "complete"}
                          </button>
                        </td>

                        <td className="">
                          <Link to={`/singleOrder/${prductBookingId}?bookingId${bookingId}?sellId${sellerId}`}>
                            <i className="bi bi-eye-fill fs-5 text-success mx-2"></i>{" "}
                          </Link>
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

export default RecentOrder;
