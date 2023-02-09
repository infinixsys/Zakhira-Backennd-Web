import React, { useState } from "react";
import "./Setting.css";
import Lottie from "lottie-react";
import Profile from "../../animation/Work_Hard.json";
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
function Setting() {
  const [editProfile, setProfile] = useState({
    name: "Amit",
    fullName: "Kumar",
    number: "8700282172",
    image: "",
  });
  const { name, fullName, number, image } = editProfile;

  const inputChangeHandler = (e) => {
    setProfile({ ...editProfile, [e.target.name]: e.target.value });
  };
  const editProfileData = (e) => {
    e.preventDefault();
    console.log(editProfile);
    setProfile({
      name: "",
      fullName: "",
      number: "",
      image: "",
    });
  };
  return (
    <>
      <div className="d-flex justify-content-end px-5">
        <div className="row">
          <h5>Edit Profile</h5>
          <div className="col-lg-12 bg-white rounded">
            <form action="" onSubmit={editProfileData}>
              <div className="row justify-content-center py-3 px-3 ">
                <div className="col-lg-5">
                    <div>
                    <Lottie animationData={Profile} loop={false} />
                    </div>
                </div>
                <div className="col-lg-6">
                <h4>Update Your Profile</h4>
                  <div className="my-4">
                    <label htmlFor="" className="d-block">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={name}
                      onChange={inputChangeHandler}
                    />
                  </div>

                  <div className="my-4">
                    <label htmlFor="" className="d-block">
                      Full Name
                    </label>
                    <input type="text" className="form-control" name="fullName"
                      value={fullName}
                      onChange={inputChangeHandler}/>
                  </div>
                  <div className="my-4">
                    <label htmlFor="" className="d-block">
                      Number
                    </label>
                    <input type="number" className="form-control" 
                    name="number"
                    value={number}
                    onChange={inputChangeHandler}/>
                  </div>

                  <div className="my-4">
                    <label htmlFor="" className="d-block">
                      Upload Image
                    </label>
                    <input type="file" className="form-control" 
                    name="image"
                    value={image}
                    onChange={inputChangeHandler}/>
                  </div>
                  <div className="my-4">
                    <button className="btn-style">Update</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
