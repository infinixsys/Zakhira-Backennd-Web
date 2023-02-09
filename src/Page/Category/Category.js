import React from "react";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="d-flex justify-content-end px-5">
      <div className="col-lg-10">
        <div className="row">
          <div className="col-lg-6">
            <div className="">
              <label htmlFor="">Category Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Category Name"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="">
              <label htmlFor="">Category Icons</label>
              <input type="file" className="form-control" />
            </div>
          </div>
          <div className="col-lg-3 my-3">
            <button className="btn-style">Update</button>
          </div>
        </div>
        <hr />
        <div className="row">
          <div style={{ overflowX: "scroll" }}>
            <div className="col-lg-12">
              <h5>Product Category</h5>
              <table className="table">
                <thead>
                  <tr className="table-success">
                    <th scope="col">S.no</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">View</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{"Category Name"}</td>
                    <td>{"Product Name"}</td>
                    <td className="">
                      <Link to={`/sellerProfile`}>
                        <i className="bi bi-eye-fill fs-5 text-success mx-2"></i>{" "}
                      </Link>
                    </td>
                    <td>
                      {" "}
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
  );
}

export default Category;
