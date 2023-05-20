import { React, useState, useEffect } from "react";
import { useParams,useLocation } from "react-router-dom";
import axios from "axios";
import queryString from "query-string";

function SingleOrder() {
  const Location  = useLocation();
  let URLQuery = queryString.parse(Location.search);
  console.log(URLQuery);
  const tokenData = sessionStorage.getItem("accessToken");
  const { id } = useParams();
  const [singlePro, setSinglePro] = useState([]);
  let SingleOrderData = async () => {
    const SingleData = await axios.get(
      `http://35.154.124.131:3000/api/v1/orderDetail/seller/${URLQuery.sellerId}order/${URLQuery.bookingId}/product/${URLQuery.prductBookingId}`,
      {
        headers: {
          Authorization: `Bearer ${tokenData}`,
          "Content-Type": "application/json",
        },
      }
    );
    try {
      setSinglePro(SingleData.data.results);
      console.log(singlePro.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    SingleOrderData();
  }, []);
  return (
    <div className="d-flex justify-content-end px-5">
      <div className="col-lg-10">
        <h4>SingleOrder</h4>
        {singlePro.map((data, index) => {
          const {
            firstName,
            lastName,
            address,
            city,
            state,
            zipCode,
            phoneNumber,
            alternateNumber,
            orderDate,
            quantity,
            price,
            productImage,
            tax
          } = data;
        //   let objectDate = new Date(createdDate);
        //   let day = objectDate.toISOString().split('T')[0];
        //     console.log(day)

                   return(
            <div className="row" key={index}>
            <div className="col-lg-4 content-center">
              <img src={productImage} className="img-fluid rounded" alt="img" />
            </div>
            <div className="col-lg-8">
              <div className="d-flex justify-content-between">
              <h2>{firstName}</h2>
              {/* <h5 className="color">{day}</h5> */}
              </div>
              {/* <p>stockQuantity : {stockQuantity}</p>
              <p>isTaxIncluded : {isTaxIncluded}</p> */}
              {/* <h3>Offer Price : {offerPrice}<i className="bi bi-currency-rupee"></i></h3> */}
              <h4>Price : {price}<i className="bi bi-currency-rupee"></i></h4>
              <h5>Tax : {tax}<i className="bi bi-currency-rupee"></i></h5>

              <div>
                <div className="fw-bold">Short Description</div>
                <div>{address}</div>
              </div>
              <div>
                <div className="fw-bold">long Description</div>
                <div>{phoneNumber}</div>
              </div>
              {/* <h6>Category name : {categoryId}</h6>
              <h6>CategorySub name : {subCategoryId}</h6> */}
              <h6> productType : {city}</h6>
              <h6>Moq : {state}</h6>
              <h6>StockCount : {quantity}</h6>
              {/* <p>
                verified: {!is_verified_by_admin ? <i className="bi bi-check-circle text-success"></i> :<i className="bi bi-x-circle text-danger"></i> }
              </p>
              <p>Reason : {reason}</p> */}
            </div>
          </div>
         )
        })}
      
      </div>
    </div>
  );
}

export default SingleOrder;
