import React from "react";
import "./Logout.css";

function Logout() {
  const logout = {
    position: "fixed",
    top: "0px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    zIndex: 99,
  };
  return (
    <>
      <div className="container fluid" style={logout}>
        <div className="row">
          {/* <div className="col-lg-4"> */}
            <form className="shadow py-3">
            <h3 className="text-center color rounded">Login</h3>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" className="btn-style">
                Submit
              </button>
            </form>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Logout;
