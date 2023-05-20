import axios from "axios";
import { React, useState } from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";

function Logout() {
  let history = useNavigate();

  const logout = {
    position: "fixed",
    top: "0px",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    zIndex: 99,
  };
  const [LoginData, SetLoginData] = useState({
    number: "",
    password: "",
    type: "admin"
  });
  const { number, password } = LoginData;
  const onchange = (e) => {
    SetLoginData({ ...LoginData, [e.target.name]: e.target.value });
  };

  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://35.154.124.131:3000/api/auth/login",
        LoginData
      );
      const data = await res.data;
      sessionStorage.setItem("accessToken", data.results.accessToken);
      alert(data.message);
      history("/");
      window.location.reload(false);

      SetLoginData({
        number: "",
        password: "",
        type: "",
      });
    } catch (error) {
      alert("invalid credentials");
    }
  };

  return (
    <>
      <div className="container fluid" style={logout}>
        <div className="row">
          {/* <div className="col-lg-4"> */}
          <form className="shadow py-3" onSubmit={onsubmit}>
            <h2 className="text-center color rounded">Login</h2>
            <h4>Welcome to Zakhira Admin</h4>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword" className="form-label">
                Phone Number
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputNumber"
                name="number"
                value={number}
                onChange={onchange}
              />
              <div id="PhoneNumber" className="form-text">
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
                name="password"
                value={password}
                onChange={onchange}
              />
            </div>
            <button type="submit" className="btn-style">
              Submit
            </button>
          </form>

        </div>
      </div>
    </>
  );
}

export default Logout;
