import { React, useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

function TaxSetting() {
    const tokenData = sessionStorage.getItem('accessToken');
    const [TaxData, setTax] = useState([])
    const [StatusColor, setStatusColor] = useState()
    
    const TaxApi = async () => {
        try {
            let apiData = await axios.get('http://35.154.124.131:3000/api/v1/admin/tax', {
                headers: {
                    Authorization:
                        `Bearer ${tokenData}`,
                    'Content-Type': 'application/json'
                },
            })
            const data = apiData.data.results;
            console.log(data)
            setTax(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        TaxApi();
    }, [])

    const DeleteTax = async (id) => {
        const headers = {
          Authorization:
            `Bearer ${tokenData}`,
        };
        try {
          const res = await axios.delete(`http://35.154.124.131:3000/api/v1/admin/tax/${id}`, { headers })
          const data = res.data;
          console.log(res)
          alert(data.message)
          window.location.reload(false);
        } catch (error) {
          alert("Some Thing Went wrong")
        }
    
      };
    return (
        <div className="d-flex justify-content-end px-5">
            <div className="col-lg-10">
                <h5>Tax Setting</h5>
                <Link to="/addTaxSetting"><button className='btn btn-success'>Add Tax</button></Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Tax Name</th>
                            <th scope="col">Tax Amount (percentage)</th>
                            <th scope="col">Status</th>
                            <th scope="col">Default</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TaxData.map((data, index) => {
                            const { id, name, is_default, status, taxName, taxPercentage } = data;
                            
                            return (
                                <tr key={id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{name}</td>
                                    <td>{taxName}</td>
                                    <td>{taxPercentage}</td>
                                    <td><button className={status ? "btn btn-sm btn-success" : "btn btn-sm btn-danger"}>{status ? "active": "inactive"}</button><br />
                                        {/* <Link to="/">Change Status</Link> */}
                                    </td>
                                    <td>
                                        <Link to={`/editText/${id}`}>Make This Default</Link>
                                    </td>
                                    <td style={{ cursor: "pointer" }}>
                                       <Link to={`/editText/${id}`}><i className='bi bi-pencil-square mx-1 text-warning'></i></Link> 
                                        <i className='bi bi-archive mx-1 text-danger'onClick={()=>DeleteTax(id)}></i>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TaxSetting