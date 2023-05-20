import { React, useState, useEffect } from "react";
import axios from "axios";
import DropDown from "../Seller/DropDown";
import { useParams } from "react-router-dom";
const tokenData = sessionStorage.getItem("accessToken");

function ShortsVideo({ sellerId }) {
  const { id } = useParams();

  const [shorts, setShorts] = useState([]);
  let sellerShort = async () => {
    const ShortData = await axios.get(
      `http://35.154.124.131:3000/api/v1/admin/seller_sorts/${id}/?limit=5&page=0`,
      {
        headers: {
          Authorization: `Bearer ${tokenData}`,
          "Content-Type": "application/json",
        },
      }
    );
    try {
      setShorts(ShortData.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  // const [status, setStatus] = useState(true);

  const [NewState,SetNewState] = useState();
  const [NewShotId,setNewShotId] = useState();
  const [Status, SetStatus] = useState({
    sellerId: NewState,
    shortId:NewShotId,
    status:false,
    reason: "",
  });
  const {status, reason } = Status;

  const OnStatusChange = (e) => {
    SetStatus({ ...Status, [e.target.name]: e.target.value });
  };

  const StatusData = async () => {
    const headers = {
      Authorization: `Bearer ${tokenData}`,
    };
    let StatusApi = await axios.patch(
      `http://35.154.124.131:3000/api/v1/admin/block_short/`,
      Status,
      {
        headers,
      }
    );
    console.log(StatusApi.data);
    SetStatus({
      status: "",
      reason: "",
    });
  };
  useEffect(() => {
    sellerShort();
    StatusData();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-end px-5">
        <div className="col-lg-10">
          <div className="d-flex justify-content-between">
            <h5>Product Video</h5>
            <DropDown sellerId={id} />
          </div>
          <div className="row">
            {shorts.map((data, index) => {
              const {
                shortId,
                tittle,
                short,
                sellerId,
                likes,
                comments,
                status,
              } = data;
              console.log(id)
              return (
                <div className="col-lg-2 my-2" key={sellerId}>
                  <div className="p-2 shadow-sm rounded">
                    <video
                      src={short}
                      className="img-fluid rounded"
                      controls
                    ></video>
                    <div>{tittle}</div>
                    {/* <div>date : {uploadOn} </div> */}
                    <div>
                      <i className="bi bi-hand-thumbs-up-fill color"></i> :{" "}
                      {likes}{" "}
                    </div>
                    <div>
                      <i className="bi bi-chat-fill text-secondary"></i> :{" "}
                      {comments}{" "}
                    </div>
                    <div className="text-center">
                      {/* <i
                        className="bi bi-archive-fill text-danger fs-4"
                        style={{ cursor: "pointer" }}
                      ></i> */}
                      <button
                        className={
                          status
                            ? "btn btn-sm btn-success"
                            : "btn btn-sm btn-danger"
                            
                        }
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                        onClick={()=>SetStatus({sellerId:sellerId,id:shortId,status:!status})}
                        >
                        {status ? "Active" : "Inactive"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}
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

export default ShortsVideo;
