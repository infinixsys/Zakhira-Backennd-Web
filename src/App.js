import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/Topbar";
import Dashboard from "./Page/Home/Dashboard";
import Setting from "./Page/Setting/Setting";
import SubDashBoard from "./Page/Home/SubDashBoard";
import SingleList from './Page/Order/OrderList'
import RegisterUsers from "./Page/Seller/RegisterUsers";
import Unregister from "./Page/Seller/Unregister";
import PendingSeller from "./Page/Seller/PendingSeller";
import Logout from "./Page/Logout/Logout";
import SellerProfile from "./Page/Seller/SellerProfile";
import ShortsVideo from "./Page/Video/ShortsVideo";
import Product from "./Page/Product.js/Product";
import Category from "./Page/Category/Category";
import SellerList from "./Page/Seller/SellerList";


function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <TopBar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/subDashboard" element={<SubDashBoard />}></Route>
            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/order" element={<SingleList />}></Route>
            <Route path="/register" element={<RegisterUsers />}></Route>
            <Route path="/unregister" element={<Unregister />}></Route>
            <Route path="/pendingSeller" element={<PendingSeller />}></Route>
            <Route path="/sellerProfile" element={<SellerProfile />}></Route>
            <Route path="/ShortsVideo" element={<ShortsVideo />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/category" element={<Category />}></Route>
            <Route path="/sellerList" element={<SellerList />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
