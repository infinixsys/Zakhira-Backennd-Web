import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
  let location = useLocation();
  useEffect(() => {}, [location]);
  return (
    <React.Fragment>
      <div className="col-xl-2 shadow-sm main-sidebar-div">
        <header className="mx-4 py-2">
          <h2>Zhakira</h2>
        </header>
        <body>
          <div className="sidebar">
            <p
              className={`sidebar-li${
                location.pathname === "/"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }`}
            >
              <Link to="" className={`sidebar-link`}>
                <i className="bi bi-grid mx-1 fs-5"></i> Dashboard
              </Link>
            </p>
            
            <p
              className={`sidebar-li${
                location.pathname === "/register"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }`}
            >
              <Link to="/register" className="sidebar-link">
                <i className="bi bi-people mx-1 fs-5"></i> Seller
              </Link>
            </p>
           
            <p className={`sidebar-li${ location.pathname === "/pendingSeller" ? "sidebar-link active" : "sidebar-link" }`} > <Link to="/pendingSeller" className="sidebar-link"> <i className={`bi bi-person mx-1 fs-5`}></i>Pending Seller </Link> </p>
            <p
              className={`sidebar-li${
                location.pathname === "/Product"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }`}
            >
              <Link to="/Product" className="sidebar-link">
                <i className="bi bi-bag mx-1 fs-5"></i> Product
              </Link>
            </p>
            <p
              className={`sidebar-li${
                location.pathname === "/order"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }`}
            >
              <Link to="/order" className="sidebar-link">
                <i className="bi bi-cart mx-1 fs-5"></i> Orders
              </Link>
            </p>
            <p
              className={`sidebar-li${
                location.pathname === "/category"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }`}
            >
              <Link to="/category" className="sidebar-link">
                <i className="bi bi-list-ul mx-1 fs-5"></i> Category
              </Link>
            </p>
            <p
              className={`sidebar-li${
                location.pathname === "/ShortsVideo"
                  ? "sidebar-link active"
                  : "sidebar-link"
              }`}
            >
              <Link to="/ShortsVideo" className="sidebar-link">
                <i className="bi bi-camera-video mx-1 fs-5"></i> Video
              </Link>
            </p>
            <p
              className={`sidebar-li${
                location.pathname === "/setting "
                  ? "sidebar-link active"
                  : "sidebar-link"
              }`}
            >
              <Link to="/setting" className="sidebar-link">
                <i className={`bi bi-gear mx-1 fs-5`}></i> Setting
              </Link>
            </p>
           
          </div>
          <p
              className={`sidebar-li${
                location.pathname === "/page "
                  ? "sidebar-link active"
                  : "sidebar-link"
              }`}
            >
              <Link to="" className="sidebar-link">
                <i className={`bi bi-journals mx-1 fs-5`}></i> Page
              </Link>
            </p>
        </body>
        <footer className="mx-2 mt-4">
          <Link to="/logout"><button className="btn-style"><i className="bi bi-box-arrow-right"></i> Log out</button></Link>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Sidebar;
