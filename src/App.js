import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import TopBar from "./Components/Topbar";
import Dashboard from "./Page/Home/Dashboard";
import Setting from "./Page/Setting/Setting";
import SubDashBoard from "./Page/Home/SubDashBoard";
import SingleList from './Page/Seller/OrderList'
import RegisterUsers from "./Page/Seller/RegisterUsers";
import Unregister from "./Page/Seller/Unregister";
import PendingSeller from "./Page/Seller/PendingSeller";
import Logout from "./Page/Logout/Logout";
import SellerProfile from "./Page/Seller/SellerProfile";
import ShortsVideo from "./Page/Video/ShortsVideo";
import Product from "./Page/Seller/Product";
import Category from "./Page/Category/Category";
import SellerList from "./Page/Seller/SellerList";
import TaxSetting from "./Page/TexSetting/TaxSetting";
import EditText from "./Page/TexSetting/EditText";
import AddTaxSetting from "./Page/TexSetting/AddTaxSetting";
import PrivateRoute from "./PrivateRoute";
import SubCategory from "./Page/Category/SubCategory";
import SingleProduct from "./Page/Seller/SingleProduct";
import SingleOrder from "./Page/Seller/SingleOrder";
import Profile from "./Components/Sidebar/Profile";

function App() {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <TopBar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<PrivateRoute Component={Dashboard} />}></Route>
            <Route path="/Dashboard" element={<PrivateRoute Component={Dashboard} />}></Route>
            <Route path="/profile" element={<PrivateRoute Component={Profile} />}></Route>
            <Route path="/subDashboard" element={<PrivateRoute Component={SubDashBoard} />}></Route>
            <Route path="/setting" element={<PrivateRoute  Component={Setting}/>}></Route>
            <Route path="/order/:id" element={<PrivateRoute Component={SingleList} />}></Route>
            <Route path="/register" element={<PrivateRoute Component={RegisterUsers} />}></Route>
            <Route path="/unregister" element={<PrivateRoute Component={Unregister} />}></Route>
            <Route path="/pendingSeller" element={<PrivateRoute Component={PendingSeller} />}></Route>
            <Route path="/sellerProfile/:id" element={<PrivateRoute Component={SellerProfile} />}></Route>
            <Route path="/ShortsVideo/:id" element={<PrivateRoute Component={ShortsVideo} />}></Route>
            <Route path="/product/:id" element={<PrivateRoute Component={Product}  />}></Route>
            <Route path="/singleProduct/:id" element={<PrivateRoute Component={SingleProduct}  />}></Route>
            <Route path="/SingleOrder/:id" element={<PrivateRoute Component={SingleOrder}  />}></Route>
            <Route path="/category" element={<PrivateRoute Component={Category}  />}></Route>
            <Route path="/sellerList" element={<PrivateRoute Component={SellerList}/>}></Route>
            <Route path="/taxSetting" element={<PrivateRoute  Component={TaxSetting} />}></Route>
            <Route path="/editText/:id" element={<PrivateRoute Component={EditText} />}></Route>
            <Route path="/addTaxSetting" element={<PrivateRoute Component={AddTaxSetting}   />}></Route>
            <Route path="/SubCategory/:id" element={<SubCategory />}></Route>

            <Route path="/logout" element={<Logout />}></Route>
          </Routes>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
