import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Category() {
  //  Get All Category
  const tokenData = sessionStorage.getItem("accessToken");

  const headers = {
    Authorization: `Bearer ${tokenData}`,
    "Content-Type": "application/json",
  };
  const [Category, SetCategory] = useState([]);
  const AllCategory = async () => {
    try {
      let AllCategoryData = await axios.get(
        "http://35.154.124.131:3000/api/v1/admin/category",
        {
          headers
        }
      );
      SetCategory(AllCategoryData.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    AllCategory();
  }, []);

  const [AddCategory, setAddCategory] = useState({
    name: "",
  });
  const onchangeCat = (e) => {
    setAddCategory({ AddCategory, [e.target.name]: e.target.value });
  };
  const onsubmitData = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://35.154.124.131:3000/api/v1/admin/add_category",
        AddCategory,
        {
          headers
        }
      );
      setAddCategory({ name: "" });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };
  // edit category
  const [EditCategory, setEditCategory] = useState({
    catId: "",
    name: "",
  });
  const { name } = EditCategory;
  const HandleChange = (e) => {
    setEditCategory({ catId: EditCategory.catId, name: e.target.value });
  };
  const Edit_Category = async () => {
    try {
      const apis = await axios.put(
        "http://35.154.124.131:3000/api/v1/admin/edit_category/",
        EditCategory,
        { headers }
      );
      console.log(apis.res)
    } catch (error) {
      console.log(error);
    }
  };

  const [NewState, SetNewState] = useState();
  const [Status, SetStatus] = useState({
    catId: NewState,
    status: false,
    reason: "",
  });
  const { status, reason } = Status;

  const OnStatusChange = (e) => {
    SetStatus({ ...Status, [e.target.name]: e.target.value });
  };

  const StatusData = async () => {
    const headers = {
      Authorization: `Bearer ${tokenData}`,
    };
    let StatusApi = await axios.patch(
      `http://35.154.124.131:3000/api/v1/admin/block_category/`,
      Status,
      {
        headers,
      }
    );

    SetStatus({
      status: "",
      reason: "",
    });
  };
  return (
    <>
      <div className="d-flex justify-content-end px-5">
        <div className="col-lg-10">
          <div className="row">
            <form action="" onSubmit={onsubmitData}>
              <div className="col-lg-5">
                <div className="">
                  <label htmlFor="">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Name"
                    value={AddCategory.name}
                    name="name"
                    onChange={onchangeCat}
                  />
                </div>
              </div>
              <div className="col-lg-3 my-3">
                <button className="btn-style">Add Category</button>
              </div>
            </form>
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
                      <th scope="col">Sub Category</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Category.map((data, index) => {
                      const { name, id, status } = data
                      return (
                        <tr key={id}>
                          <th scope="row">{index + 1}</th>
                          <td>{name}</td>
                          <td className="">
                            <Link to={`/SubCategory/${id}`}>
                              <i className="bi bi-eye fs-5 text-success mx-2"></i>{" "}
                            </Link>
                          </td>
                          <td>
                            <button
                              className={
                                status
                                  ? "btn btn-sm btn-success"
                                  : "btn btn-sm btn-danger"
                              }
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                              onClick={() => SetStatus({ catId: id, status: !status })}
                            >
                              {status ? "active" : "Inactive"}

                            </button>
                          </td>

                          <td className="">
                            {/* <Link to={`/sellerProfile`}> */}
                            <i className="bi bi-pencil-square fs-5 text-warning mx-2" style={{ cursor: "pointer" }} data-bs-toggle="modal"
                              data-bs-target="#exampleModal" onClick={() => setEditCategory({ catId: id })} ></i>{" "}
                            {/* </Link> */}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <div className="mt-3">
                <label htmlFor="">Edit Category</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter New Name"
                  onChange={HandleChange}
                  name="name"
                  value={name}
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
                onClick={Edit_Category}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div
        class="modal fade"
        id="exampleModal1"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel1">
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
              <div className="mt-3">
                <label htmlFor="">Reason</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Reason"
                  onChange={OnStatusChange}
                  name="reason"
                  value={reason}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="">Status</label>
                <select
                  className="form-control"
                  onChange={OnStatusChange}
                  name="status"
                  value={status}
                >
                  <option value={true}>True</option>
                  <option value={false}>false</option>
                </select>
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
                onClick={StatusData}
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

export default Category;
