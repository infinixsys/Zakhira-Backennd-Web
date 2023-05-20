import axios from "axios";
import React, { useEffect, useState } from "react";
import ProfileLottie from "../../animation/Work_Hard.json";
import Lottie from "lottie-react";

function Profile() {
  const tokenData = sessionStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenData}`,
    "Content-Type": "application/json",
  };
  const [profile, setProfile] = useState([]);
  let AdminProfile = async () => {
    const profileData = await axios.get(
      `http://35.154.124.131:3000/api/v1/admin/profile`,
      {
        headers,
      }
    );
    try {
      setProfile(profileData.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AdminProfile();
  }, []);

  //
  const [editProfile, setEditProfile] = useState({
    firstName: "",
    lastName: "",
    number: "",
    image: "",
  });
//   const { firstName, lastName, number, image } = editProfile;

  const inputChangeHandler = (e) => {
    setEditProfile({
      ...editProfile,
      [e.target.name]: e.target.value,
    });
  };
  const editProfileData = async (e) => {
    e.preventDefault();
    try {
      const apis = await axios.post(
        "http://35.154.124.131:3000/api/v1/admin/profile/",
        editProfile,
        { headers }
      );
      console.log(apis.res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-end px-5">
        <div className="col-lg-10">
          <div className="row justify-content-center my-2">
            <h4>My Profile</h4>
            <div className="col-lg-4">
              <div>
                <Lottie animationData={ProfileLottie} loop={false} />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="p-3 shadow-sm rounded">
                <img
                  src=""
                  className="rounded-circle p-3"
                  width={"60px"}
                  height={"60px"}
                  alt={profile.image}
                />
                <p>
                  <b>Name</b> : {profile.firstName + " " + profile.lastName}
                </p>
                <p>
                  <b>Number</b> : {profile.number}
                </p>
                <div className="my-2">
                  <button
                    className="btn-style"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() =>
                      setEditProfile({
                        firstName: profile.firstName,
                        lastName: profile.lastName,
                        image: profile.image,
                        number: profile.number,
                      })
                    }
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* popup */}
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
              <div className="my-4">
                <label htmlFor="" className="d-block">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={editProfile.firstName}
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="my-4">
                <label htmlFor="" className="d-block">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={editProfile.lastName}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="my-4">
                <label htmlFor="" className="d-block">
                  Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  name="number"
                  value={editProfile.number}
                  onChange={inputChangeHandler}
                />
              </div>

              <div className="my-4">
                <label htmlFor="" className="d-block">
                  Upload Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  value={editProfile.image}
                  onChange={inputChangeHandler}
                />
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
                onClick={editProfileData}
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

export default Profile;
