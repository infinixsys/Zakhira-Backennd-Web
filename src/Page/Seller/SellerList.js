import React from 'react'
import { Link } from 'react-router-dom';

function SellerList() {
    const Products = [];
  return (
    <div className="d-flex justify-content-end px-5">
      <div className="col-lg-10">
        <div className="row">
          <div style={{ overflowX: "scroll" }}>
            <div className="col-lg-12 my-3">
              <h5>UserList</h5>
              <table className="table">
                <thead>
                  <tr className="table-success">
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* {Products.map((Products, index) => {
                    const { id, name, number, email, OrderDetails } = Products;
                    return (
                      <tr>
                        <th scope="row" key={id}>
                          {1}
                        </th>
                        <td>{"amit"}</td>
                        <td>{"Infinixsys"}</td>
                        <td><img src="" alt="user Image"/></td>
                        <td>{"8700282172"}</td>
                        <td className="">
                          <Link to={`/productDetails`}>
                            <i className="bi bi-eye-fill fs-5 text-success mx-2"></i>{" "}
                          </Link>
                          <i className="bi bi-archive-fill fs-5 text-danger"></i>
                        </td>
                      </tr>
                    );
                  })} */}
                    <tr>
                        <th scope="row">
                          {1}
                        </th>
                        <td>{"amit"}</td>
                        <td>{"Infinixsys"}</td>
                        <td><img src="" alt="user Image"/></td>
                        <td>{"8700282172"}</td>
                        <td className="">
                          <Link to={`/sellerProfile`}>
                            <i className="bi bi-eye-fill fs-5 text-success mx-2"></i>{" "}
                          </Link>
                          <i className="bi bi-archive-fill fs-5 text-danger"></i>
                        </td>
                      </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerList