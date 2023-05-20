import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function SubCategory() {
  const { id } = useParams();
  const tokenData = sessionStorage.getItem("accessToken");
  // Get All SubCategory
  const [SubCategory, SetSubCategory] = useState([]);
  const AllSubCategory = async () => {
    try {
      let AllSubCategoryData = await axios.get(
        `http://35.154.124.131:3000/api/v1/admin/subcategory/${id}`,
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );
      SetSubCategory(AllSubCategoryData.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    AllSubCategory();
  }, []);

  // add sub Category
  const [AddCategory, setAddCategory] = useState({
    catId: id,
    name: "",
  });
  const onchangeCat = (e) => {
    setAddCategory({ catId: id, name: e.target.value });
  };
  const onsubmitData = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://35.154.124.131:3000/api/v1/admin/add_subcategory/`,
        AddCategory,
        {
          headers: {
            Authorization: `Bearer ${tokenData}`,
          },
        }
      );
      console.log(res.res)
      setAddCategory({ name: "", catId: id, });
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }
  };

  //Edit SubCategory
  const [EditSubCategory, setEditSubCategory] = useState({
    name: "",
    catId: id,
    subId: '',
  });
  const subHandleChange = async (e) => {
    setEditSubCategory({ subId: EditSubCategory.subId, catId: SubCategory.id, name: e.target.value });
  }
  // call api in submit Data
  const SubCatSubmit = async () => {
    try {
      await axios.put('http://35.154.124.131:3000/api/v1/admin/edit_subcategory/', EditSubCategory, {
        headers: {
          Authorization: `Bearer ${tokenData}`,
        },
      });
      // console.log()
    } catch (error) {

    }
  }
  // active inactive
  const [NewState, SetNewState] = useState();
  const [subId,] = useState();
  const [Status, SetStatus] = useState({
    catId: NewState,
    subId: subId,
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
                  <label htmlFor="">SubCategory Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Sub Category Name"
                    value={AddCategory.name}
                    name="name"
                    onChange={onchangeCat}
                  />
                </div>
              </div>

              <div className="col-lg-3 my-3">
                <button className="btn-style">Update</button>
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
                      <th scope="col">SubCategory Name</th>
                      <th scope="col">Category Name</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      SubCategory.map((data, index) => {
                        const { name, id, status, } = data
                        return (
                          <tr key={id}>
                            <th scope="row">{index + 1}</th>
                            <td>{name}</td>
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
                              <i className="bi bi-pencil-square fs-5 text-warning mx-2" data-bs-toggle="modal"
                                data-bs-target="#exampleModal" onClick={() => setEditSubCategory({ subId: id })}></i>{" "}
                            </td>
                          </tr>
                        );
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* edit */}
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
                  onChange={subHandleChange}
                  name="name"
                  value={EditSubCategory.name}
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
                onClick={SubCatSubmit}
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

export default SubCategory