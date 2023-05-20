import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DropDown from "./DropDown";
import axios from "axios";

function SellerProfile({sellerId}) {
  const tokenData = sessionStorage.getItem('accessToken');
  const { id } = useParams();
  const [sellerProfile, setSellerProfile] = useState([])
  let SellerProfileData = async () => {
    const SellerData = await axios.get(`http://35.154.124.131:3000/api/v1/admin/seller/${id}`,{
      headers: {
        Authorization:
            `Bearer ${tokenData}`,
        'Content-Type': 'application/json'
    },
    });
    try {
      setSellerProfile(SellerData.data.results)
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    SellerProfileData()
  }, [])

  return (
    <div className="d-flex justify-content-end">
      <div className="col-lg-10 px-3">
        <div className="row justify-content-center">
          <div className="col-lg-12 rounded alert alert-secondary py-3">
            <div className="d-flex justify-content-between">
              <h5 className="">Seller Profile</h5>
              <DropDown sellerId={id}/>

            </div>
            <div className="content-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFa9uNHiSy_9IPJmnFNEiM0pQCeIUG4SyMw&usqp=CAU"
                className="rounded-circle"
                height={"80px"}
                width={"80px"}
                alt=""
              />
            </div>
            <table className="table">
              {/* {sellerProfile.map((data, index) => {
                const { firstName,email, lastName, address, city, state, zipCode, phoneNumber, alternateNumber, id, sellerId,follower,following,sellerProduct,sellerrListedProduct,sellerrUnListedProduct,sellerShort,sellerListedShort,sellerUnlistedShort} = data
                return ( */}
                  <tbody>
                    <tr>
                      <th scope="col">Name</th>
                      <td>{sellerProfile.firstName}</td>
                    </tr>
                    <tr>
                      <th scope="col">Email</th>
                      <td>{sellerProfile.email}</td>
                    </tr>
                    <tr>
                      <th scope="col">Number</th>
                      <td>{sellerProfile.number}</td>
                    </tr>
                    <tr>
                      <th scope="col">Seller Product</th>
                      <td>{sellerProfile.sellerProduct}</td>
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
                      <td>{sellerProfile.follower}</td>
                    </tr>
                    <tr>
                      <th scope="col">Seller Following</th>
                      <td>{sellerProfile.following}</td>
                    </tr>
                    <tr>
                      <th scope="col">Seller short</th>
                      <td>{sellerProfile.sellerShort}</td>
                    </tr>
                  </tbody>
                {/* )
              })} */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerProfile;
