import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubDashBoard from "./SubDashBoard";
import axios from "axios";

function Dashboard() {
  const tokenData = sessionStorage.getItem("accessToken");
   const [apis,setApis] = useState([]);
   const homeApi = async() => {
      try {
        const api = await axios.get('http://35.154.124.131:3000/api/v1/admin/home',{ headers : {
          Authorization: `Bearer ${tokenData}`,
          "Content-Type": "application/json",
        }});
        setApis(api.data.results);
        console.log(api.data.results)
      } catch (error) {
        console.log(error);
      }
   }
   useEffect(()=>{
    homeApi();
   },[])
  let box = [
    // {
    //   id: 1,
    //   backgroundColor: "#AACB73",
    //   icon: "wallet",
    //   heading: "Total Revenue",
    //   number: "1200Rs.",
    //   col: 3,
    // },
    {
      id: 2,
      backgroundColor: "#0694a2",
      icon: "people",
      heading: "Total Seller",
      number: apis.totalSeller,
      col: 3,
    },
    {
      id: 3,
      backgroundColor: "#A4BC92",
      icon: "people",
      heading: "Total Register Seller",
      number: apis.totalRegisteredSeller,
      col: 3,
    },
    {
      id: 4,
      backgroundColor: "#FF6969",
      icon: "people",
      heading: "Total UnRegister Seller",
      number: apis.totalUnRegisteredSeller,
      col: 3,
    },
    
    {
      id: 5,
      backgroundColor: "#86A3B8",
      icon: "bag",
      heading: "Total Listed  Product",
      number: apis.totallistedProduct,
      col: 3,
    },
    {
      id: 6,
      backgroundColor: "#E74646",
      icon: "bag",
      heading: "Total UnListed  Product",
      number: apis.totalUnlistedProduct,
      col: 3,
    },

    {
      id: 7,
      backgroundColor: "#ffa500",
      icon: "cart",
      heading: "Total Order",
      number: apis.totalOrders,
      col: 3,
    },
    {
      id: 7,
      backgroundColor: "#FFC93C",
      icon: "cart",
      heading: "Total Pending Order",
      number: apis.totalPendingOrder,
      col: 3,
    },
    {
      id: 7,
      backgroundColor: "#03C988",
      icon: "cart",
      heading: "Total Delivered Order",
      number: apis.totalDeliveredOrder,
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
      {/* <SubDashBoard /> */}
    </>
  );
}

export default Dashboard;
