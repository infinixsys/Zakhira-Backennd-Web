import React from "react";
import video from '../../video/Cup.mp4';
import Juggle from '../../video/Juggle.mp4';
import Van from '../../video/Van.mp4';
import Water from '../../video/Water.mp4';
import Stone from '../../video/Stones.mp4';


function ShortsVideo() {
  return (
    <>
      <div className="d-flex justify-content-end px-5">
        <div className="col-lg-10">
            <h5>Product Video</h5>
          <div className="row">
            <div className="col-lg-2 my-2">
              <div className="p-2 shadow-sm rounded">
                <video src={video} className ="img-fluid rounded" controls></video>
                <div>video Name</div>
                <div>company name </div>
                <div>Product Name </div>
                <div className="text-center">
                <i
                  className="bi bi-archive-fill text-danger fs-4"
                  style={{ cursor: "pointer" }}
                ></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-2">
              <div className="p-2 shadow-sm rounded">
                <video src={Juggle} className ="img-fluid rounded" controls></video>
                <div>video Name</div>
                <div>company name </div>
                <div>Product Name </div>
                <div className="text-center">
                <i
                  className="bi bi-archive-fill text-danger fs-4"
                  style={{ cursor: "pointer" }}
                ></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-2">
              <div className="p-2 shadow-sm rounded">
                <video src={Van} className ="img-fluid rounded" controls></video>
                <div>video Name</div>
                <div>company name </div>
                <div>Product Name </div>
                <div className="text-center">
                <i
                  className="bi bi-archive-fill text-danger fs-4"
                  style={{ cursor: "pointer" }}
                ></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-2">
              <div className="p-2 shadow-sm rounded">
                <video src={Water} className ="img-fluid rounded" controls></video>
                <div>video Name</div>
                <div>company name </div>
                <div>Product Name </div>
                <div className="text-center">
                <i
                  className="bi bi-archive-fill text-danger fs-4"
                  style={{ cursor: "pointer" }}
                ></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 my-2">
              <div className="p-2 shadow-sm rounded">
                <video src={Stone} className ="img-fluid rounded" controls></video>
                <div>video Name</div>
                <div>company name </div>
                <div>Product Name </div>
                <div className="text-center">
                <i
                  className="bi bi-archive-fill text-danger fs-4"
                  style={{ cursor: "pointer" }}
                ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShortsVideo;
