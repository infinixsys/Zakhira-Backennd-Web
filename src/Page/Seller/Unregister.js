import { colors } from '@mui/material';
import { display, fontSize, margin, padding } from '@mui/system';
import React,{useEffect} from 'react'
import { Link ,useLocation} from 'react-router-dom';

function Unregister() {
    let location = useLocation();
  useEffect(() => {}, [location]);
  const registerBtn = {   
      padding :"5px 15px 5px 15px",
      backgroundColor:"white",
      display :"inline-block",
      borderRadius :"5px",
      cursor :"pointer",
      marginRight :"10px",
      fontSize:"16px",
  }
  
  const RUsers = [
    {
      id: 3,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 4,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 5,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 6,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 7,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 8,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 9,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
    {
      id: 10,
      name: "sushil",
      number: 8700282100,
      email: "sushil@gmail.com",
      OrderDetails: "subDashboard",
    },
  ];
  return (
    <div className='d-flex justify-content-end px-5'>
      <div className="col-lg-10">
        <div className="row">
          <div style={{ overflowX: "scroll" }}>
            <div className="col-lg-12">
             <Link to="/register"><h5 style={registerBtn} className="shadow-sm">Register Seller</h5></Link>
             <Link to="/unregister" className={`${ location.pathname === "/unregister" ? "color" : "" }`}><h5 style={registerBtn} className="shadow-sm">Unregister Seller</h5></Link>
              <table className="table">
                <thead>
                  <tr className="table-success">
                    <th scope="col">S.no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Email</th>
                    <th scope="col">Users Details</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {RUsers.map((RUsers, index) => {
                    const { id, name, number, email, OrderDetails } = RUsers;
                    return (
                      <tr>
                        <th scope="row" key={id}>
                          {index + 1}
                        </th>
                        <td>{name}</td>
                        <td>{number}</td>
                        <td>{email}</td>
                        <td>
                        <div className="dropdown">
                            <button className="btn Button-style dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                              View User
                            </button>
                            <ul className="dropdown-menu">
                              <li><Link className="dropdown-item" to={"/sellerProfile"}>Profile</Link></li>
                              <li><Link className="dropdown-item" to={"/product"}>Product</Link></li>
                              <li><Link className="dropdown-item" to={"/order"}>Order</Link></li>
                              <li><Link className="dropdown-item" to={"/sellerList"}>UserList</Link></li>
                              <li><Link className="dropdown-item" to={"/ShortsVideo"}>Short</Link></li>

                            </ul>
                          </div>
                        </td>
                        <td className="">
                          <i className="bi bi-archive-fill fs-5 text-danger"></i>
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
  )
}

export default Unregister