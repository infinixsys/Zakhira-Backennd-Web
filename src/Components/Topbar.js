import {React,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function TopBar() {
  const ClearData = ()=>{
    sessionStorage.clear('accessToken')
  }
  const tokenData = sessionStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenData}`,
    "Content-Type": "application/json",
  };
  const [profile, setProfile] = useState([]);
  let AdminProfile = async () => {
    const profileData = await axios.get(
      `http://35.154.124.131:3000/api/v1/admin/profile`,
      {
        headers,
      }
    );
    try {
      setProfile(profileData.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    AdminProfile();
  }, []);
  return (
    <>
        <div className="d-flex justify-content-end px-5 py-3  col-xl-12 bg-white header">
        <div className="dropdown">
        <a href="#" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
          <strong>{profile.firstName + " " +  profile.lastName}</strong>
        </a>
        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
          <li><Link className="dropdown-item" to={"/logout"} onClick={ClearData}>Sign out</Link></li>
          {/* <li><Link className="dropdown-item" to={"/profile"}>Profile</Link></li> */}
        </ul>
      </div>
        </div>
    </>
  )
}

export default TopBar