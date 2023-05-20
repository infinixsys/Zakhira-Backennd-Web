import {React,useState} from 'react'
import axios from 'axios';

function AddTaxSetting() {
    const tokenData = sessionStorage.getItem('accessToken');

    const [Tax, SetTax] = useState({
      name: "",
      taxName: "",
      taxPercentage: "",
      status: "",
      is_default: "",
    });
    const {
      name,
      taxName,
      taxPercentage,
      status,
      is_default,
    } = Tax;
    const onTaxChange = (e) => {
      SetTax({ ...Tax, [e.target.name]: e.target.value });
      // setFile(e.target.files[0]);
      // console.log(e.target.name)
      // console.log(e.target.value)
    };
    const onSubmitTax = async (e) => {
      e.preventDefault();
      const headers = {
        Authorization:
          `Bearer ${tokenData}`,
      };
      const url = 'http://35.154.124.131:3000/api/v1/admin/tax';
      try {
        const res = await axios.post(url, Tax, { headers })
        const data = res.data;
        console.log(res)
        alert(data.message)
        if (data.message == "SUCCESS") {
          SetTax({
            name: "",
            taxName: "",
            taxPercentage: "",
            status: "",
            is_default: "",
          });
        }
      } catch (error) {
        alert("Some Thing Went wrong")
      }
    }
    return (
      <div className="d-flex justify-content-end px-5">
        <div className="col-lg-10">
          <h5 className="text-center">Add Tax</h5>
          <form action="" onSubmit={onSubmitTax}>
            <div className="row">
              <div className="col-lg-6 my-2">
                <label className="form-label">Name</label>
                <input type="text" className="form-control"
                  name="name"
                  value={name}
                  onChange={onTaxChange}
                />
              </div>
              <div className="col-lg-6 my-2">
                <label className="form-label">Tax Name</label>
                <input type="text" className="form-control"
                  name="taxName"
                  value={taxName}
                  onChange={onTaxChange}
                />
              </div>
              <div className="col-lg-6 my-2">
                <label className="form-label">Tax Amount (In Percentage)</label>
                <input type="text" className="form-control"
                  name="taxPercentage"
                  value={taxPercentage}
                  onChange={onTaxChange} />
              </div>
              <div className="col-lg-6 my-2">
                <label className="form-label">Status</label>
                <select id="" className="form-control"
                  name="status"
                  value={status}
                  onChange={onTaxChange}
                >
                  <option value="default">Tax Status</option>
                  <option value="true">Active</option>
                  <option value="false">Disable</option>
                </select>
              </div>
              <div className="col-lg-6 my-2">
                <label className="form-label">Default</label>
                <select id="" className="form-control"
                  name="is_default"
                  value={is_default}
                  onChange={onTaxChange}>
                  <option value="true">true</option>
                  <option value="false">false</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 d-grid gap-2 my-2">
                <button className="btn-style">Upload</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }


export default AddTaxSetting