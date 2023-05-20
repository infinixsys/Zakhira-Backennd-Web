import React from 'react'
import { Link } from 'react-router-dom'

function DropDown({sellerId}) {
  return (
    <div className="dropdown">
    <button className="btn Button-style dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
      View User
    </button>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" to={`/sellerProfile/${sellerId}`}>Profile</Link></li>
      <li><Link className="dropdown-item" to={`/product/${sellerId}`}>Product</Link></li>
      <li><Link className="dropdown-item" to={`/order/${sellerId}`}>Order</Link></li>
      <li><Link className="dropdown-item" to={"/sellerList"}>UserList</Link></li>
      <li><Link className="dropdown-item" to={`/ShortsVideo/${sellerId}`}>Short Video</Link></li>

    </ul>
  </div>
  )
}

export default DropDown