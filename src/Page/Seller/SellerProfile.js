import React, { useState } from "react";
import video from "../../video/Cup.mp4";
import Juggle from "../../video/Juggle.mp4";
import Van from "../../video/Van.mp4";
import Water from "../../video/Water.mp4";
import Stone from "../../video/Stones.mp4";
import { Link } from "react-router-dom";

function SellerProfile() {
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
  const [ProductD, SetProductD] = useState("");
  const [shorts, Setshorts] = useState("d-none");

  const productTab = () => {
    SetProductD(" ");
    Setshorts("d-none");
  };
  const videoTab = ()=>{
    SetProductD("d-none");
    Setshorts("");
  }
  return (
    <div className="d-flex justify-content-end">
      <div className="col-lg-10 px-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 rounded alert alert-secondary py-3">
            <h5 className="">Seller Profile</h5>
            <div className="content-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFa9uNHiSy_9IPJmnFNEiM0pQCeIUG4SyMw&usqp=CAU"
                className="rounded-circle"
                height={"80px"}
                width={"80px"}
                alt=""
              />
            </div>
            <table class="table">
              <tbody>
                <tr>
                  <th scope="col">Name</th>
                  <td>Amit kumar</td>
                </tr>
                <tr>
                  <th scope="col">Email</th>
                  <td>ak7280021@gmail.com</td>
                </tr>
                <tr>
                  <th scope="col">Number</th>
                  <td>8700282172</td>
                </tr>
                <tr>
                  <th scope="col">Company Name</th>
                  <td>Larry</td>
                </tr>
                <tr>
                  <th scope="col">GST Number</th>
                  <td>5385738</td>
                </tr>
                <tr>
                  <th scope="col">Address</th>
                  <td>Mark</td>
                </tr>
                <tr>
                  <th scope="col">Experience</th>
                  <td>yes</td>
                </tr>
                <tr>
                  <th scope="col">Seller Followers</th>
                  <td>1.5M</td>
                </tr>
                <tr>
                  <th scope="col">Seller Following</th>
                  <td>1.5M</td>
                </tr>
                <tr>
                  <th scope="col">Seller Post</th>
                  <td>23</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div className={`col-lg-8 productDetails`}>
            <div className="mx-2 bg-light rounded p-2">
              <div className="d-flex my-2">
                <button className={`btn btn-primary btn-sm`} onClick={productTab}>
                  Seller Product
                </button> 
                <button className={`btn btn-danger btn-sm mx-3`} onClick={videoTab}>
                  Seller Video
                </button>
              </div>
              <div className={`row ${ProductD}`}>
                <div className="col-lg-3">
                  <div className="bg-white shadow-sm rounded p-2">
                    <img
                      src="https://media.croma.com/image/upload/v1664009586/Croma%20Assets/Communication/Mobiles/Images/243465_13_qzagnh.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="text-center">
                      <h5>i phone</h5>
                      <text>128 GB</text>
                      <div>price : 1000 Rs./-</div>
                      <i
                        className="bi bi-archive-fill text-danger"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="bg-white shadow-sm rounded p-2">
                    <img
                      src="https://media.croma.com/image/upload/v1664009586/Croma%20Assets/Communication/Mobiles/Images/243465_13_qzagnh.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="text-center">
                      <h5>i phone</h5>
                      <text>128 GB</text>
                      <div>price : 1000 Rs./-</div>
                      <i
                        className="bi bi-archive-fill text-danger"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="bg-white shadow-sm rounded p-2">
                    <img
                      src="https://media.croma.com/image/upload/v1664009586/Croma%20Assets/Communication/Mobiles/Images/243465_13_qzagnh.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="text-center">
                      <h5>i phone</h5>
                      <text>128 GB</text>
                      <div>price : 1000 Rs./-</div>
                      <i
                        className="bi bi-archive-fill text-danger"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="bg-white shadow-sm rounded p-2">
                    <img
                      src="https://media.croma.com/image/upload/v1664009586/Croma%20Assets/Communication/Mobiles/Images/243465_13_qzagnh.png"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="text-center">
                      <h5>i phone</h5>
                      <text>128 GB</text>
                      <div>price : 1000 Rs./-</div>
                      <i
                        className="bi bi-archive-fill text-danger"
                        style={{ cursor: "pointer" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <table className={`table ${ProductD}`}>
                <thead>
                  <tr className="table-success">
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product ID</th>
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
                        <td>{"earphone"}</td>
                        <td>{email}</td>
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
            <div className={`row ${shorts}`}>
              <div className="col-lg-3 my-2">
                <div className="p-2 shadow-sm rounded">
                  <video
                    src={video}
                    className="img-fluid rounded"
                    controls
                  ></video>
                  <div>video Name</div>
                  <div>company name </div>
                  <div>Product Name </div>
                  <div className="text-center">
                    <i
                      className="bi bi-archive-fill text-danger fs-4"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 my-2">
                <div className="p-2 shadow-sm rounded">
                  <video
                    src={Juggle}
                    className="img-fluid rounded"
                    controls
                  ></video>
                  <div>video Name</div>
                  <div>company name </div>
                  <div>Product Name </div>
                  <div className="text-center">
                    <i
                      className="bi bi-archive-fill text-danger fs-4"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 my-2">
                <div className="p-2 shadow-sm rounded">
                  <video
                    src={Van}
                    className="img-fluid rounded"
                    controls
                  ></video>
                  <div>video Name</div>
                  <div>company name </div>
                  <div>Product Name </div>
                  <div className="text-center">
                    <i
                      className="bi bi-archive-fill text-danger fs-4"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 my-2">
                <div className="p-2 shadow-sm rounded">
                  <video
                    src={Water}
                    className="img-fluid rounded"
                    controls
                  ></video>
                  <div>video Name</div>
                  <div>company name </div>
                  <div>Product Name </div>
                  <div className="text-center">
                    <i
                      className="bi bi-archive-fill text-danger fs-4"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 my-2">
                <div className="p-2 shadow-sm rounded">
                  <video
                    src={Stone}
                    className="img-fluid rounded"
                    controls
                  ></video>
                  <div>video Name</div>
                  <div>company name </div>
                  <div>Product Name </div>
                  <div className="text-center">
                    <i
                      className="bi bi-archive-fill text-danger fs-4"
                      style={{ cursor: "pointer" }}
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SellerProfile;
