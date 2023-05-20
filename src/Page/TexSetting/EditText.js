import {React,useState,useEffect} from 'react'
import axios from 'axios';
import { useParams,useNavigate } from 'react-router-dom';

function EditText() {
    const tokenData = sessionStorage.getItem('accessToken');
    const { id } = useParams();
    const history = useNavigate()

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
        
    };
    const onSubmitTax = async (e) => {
        e.preventDefault();
        const headers = {
            Authorization:
                `Bearer ${tokenData}`,
        };
        try {
            const res = await axios.put(`http://35.154.124.131:3000/api/v1/admin/tax/${id}`, Tax, { headers })
            const data = res.data;
            alert(data.message)
            console.log(res)
            if (data.message === "SUCCESS") {
                SetTax({
                    name: "",
                    taxName: "",
                    taxPercentage: "",
                    status: "",
                    is_default: "",
                });
            }
            history("/taxSetting")
        } catch (error) {
            alert("Some Thing Went wrong")
        }
    }
    const loadTax = async () => {
        try {
            const response = await axios.get(`http://35.154.124.131:3000/api/v1/admin/tax/${id}`, {
                headers: {
                    Authorization: `Bearer ${tokenData}`,
                    'Content-Type': 'application/json'
                },
            });

            const dataValue = await response.data.results;
            SetTax(dataValue)
            console.log(dataValue)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        loadTax();
    }, []);
    return (
        <div className="d-flex justify-content-end px-5">
            <div className="col-lg-10">
                <h5 className="text-center">Edit Tax</h5>
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
                                <option value="Default">Make This Default</option>
                                <option value="false">Default</option>
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

export default EditText