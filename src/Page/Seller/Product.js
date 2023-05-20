import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Sort from "./Sort";
import DropDown from "./DropDown";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  const tokenData = sessionStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenData}`,
    "Content-Type": "application/json",
  };
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  let sellerProduct = async () => {
    const productData = await axios.get(
      `http://35.154.124.131:3000/api/v1/admin/seller/${id}/product?limit=5&page=0`,
      {
        headers,
      }
    );
    try {
      setProduct(productData.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  // patch api for hide and show project
  const [sellerID,] = useState([]);
  const [productId,] = useState([]);
  const [ProductVerification, setProductVerification] = useState({
    sellerId: sellerID,
    productId: productId,
    status: false,
    reason: "",
  });
  const { status, reason } = ProductVerification;
  const HandleChange = (e) => {
    setProductVerification({
      ...ProductVerification,
      [e.target.name]: e.target.value,
    });
  };
  const product_verification = async () => {
    try {
      await axios.patch(
        "http://35.154.124.131:3000/api/v1/admin/verify_product/",
        ProductVerification,
        { headers }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    sellerProduct();
  }, []);
  return (
    <>
      <div className="d-flex justify-content-end px-5">
        <div className="col-lg-10">
          <div className="row justify-content-between my-2">
            <h5>Total Product</h5>
            <div className="col-lg-4">
              {" "}
              <Search />
            </div>
            <div className="col-lg-4">
              <Sort />
            </div>
            <div className="col-lg-4 text-end">
              <DropDown sellerId={id} />
            </div>
          </div>
          <div className="row">
            <div style={{ overflowX: "scroll" }}>
              <div className="col-lg-12 my-3">
                <table className="table">
                  <thead>
                    <tr className="table-success">
                      <th scope="col">S.no</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Price</th>
                      <th scope="col">Offer Price</th>
                      <th scope="col">Moq</th>
                      <th scope="col">upload Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.map((Products, index) => {
                      const {
                        id,
                        sellerId,
                        productName,
                        price,
                        offerPrice,
                        moq,
                        uploadDate,
                        status,
                        productId,
                      } = Products;
                      return (
                        <tr>
                          <th scope="row" key={id}>
                            {index + 1}
                          </th>
                          <td>{productName}</td>
                          <td>{price}</td>
                          <td>{offerPrice}</td>
                          <td>{moq}</td>
                          <td>{uploadDate}</td>
                          <td>
                            <button
                              className={
                                status
                                  ? "btn btn-sm btn-success"
                                  : "btn btn-sm btn-danger"
                              }
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              onClick={() =>
                                setProductVerification({
                                  sellerId: sellerId,
                                  productId: productId,
                                  status: !status,
                                })
                              }
                            >
                              {status ? "Hide" : "UnHide"}
                            </button>
                          </td>
                          <td className="">
                            <Link to={`/singleProduct/${productId}?sellId=${sellerId}`}>
                              <i className="bi bi-eye-fill fs-5 text-success mx-2"></i>{" "}
                            </Link>
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
      {/* Modal */}
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
                  onChange={HandleChange}
                  name="reason"
                  value={reason}
                />
              </div>
              <div className="mt-3">
                <label htmlFor="">Status</label>
                <select
                  className="form-control"
                  onChange={HandleChange}
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
                onClick={product_verification}
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

export default Product;
