import React from 'react'
import { useParams,useNavigate } from 'react-router-dom';


function UpdateCategory() {
    const { id } = useParams();
    const history = useNavigate()

    const tokenData = sessionStorage.getItem("accessToken");
    const [AddCategory, setAddCategory] = useState({
      name: "",
    });
    const onchangeCat = (e) => {
      setAddCategory({ AddCategory, [e.target.name]: e.target.value });
    };
  
    const onsubmitData = async (e) => {
      e.preventDefault();
      try {
        await axios.put(
          "http://35.154.124.131:3000/api/v1/admin/add_category",
          AddCategory,
          {
            headers: {
              Authorization: `Bearer ${tokenData}`,
            },
          }
        );
        setAddCategory({ name: "" });
        window.location.reload(false);
      } catch (error) {
        console.log(error);
      }
    };
    return (
      <div className="d-flex justify-content-end px-5">
        <div className="col-lg-10">
          <div className="row">
            <form action="" onSubmit={onsubmitData}>
              <div className="col-lg-5">
                <div className="">
                  <label htmlFor="">Category Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Category Name"
                    value={AddCategory.name}
                    name="name"
                    onChange={onchangeCat}
                  />
                </div>
              </div>
              <div className="col-lg-3 my-3">
                <button className="btn-style">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

export default UpdateCategory