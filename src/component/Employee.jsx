import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function Employee() {
    const [showempData, setshowempData] = useState([]);
    const [search, setSearch] = useState("");
    const [error, setError] = useState("");
    const [Spinner, SetSpinner] = useState(true);

    function showDataTable() {
        axios.get("https://667c0c6c3c30891b865b144c.mockapi.io/Employee")
            .then((response) => {
                SetSpinner(false);
                setshowempData(response.data);
            });
    }

    useEffect(() => {
        
        showDataTable();
    }, []);

    function dataDelete(id) {
        axios.delete("https://667c0c6c3c30891b865b144c.mockapi.io/Employee/" + id)
            .then((res) => {
                showDataTable();
                toast.warning("record deleted")
            });
    }

    const handleSearch = () => {
        if (search !== "") {
            const Data = showempData.filter(employee => employee.id === search);
            if (Data.length > 0) {
                setshowempData(Data);
                setError("");
            } else {
                setError("employee ID not found");
                setTimeout(() => {
                    setError("");
                }, 2000);
            }
            setSearch("");
        } else {
            showDataTable();
        }
    };

    return (
        <>
            <h2 className="text-center login-title">Employee</h2>
            <div className="row ">
                <div className="col-lg-4">
                    <div className="search-bar">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Search by Employee ID"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="col-lg-4">
                    <button className="btn btn-primary" onClick={handleSearch}>Search</button>
                </div>
            </div>
            <p style={{ color: "red" }}>{error}</p>
            {
                 Spinner
                 ?
                 <div className="d-flex justify-content-center">
                   <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                     <span className="visually-hidden">Loading...</span>
                   </div>
                 </div >
                 :
                 <table className="table table-striped shadow mt-4">
                 <thead>
                     <tr>
                         <th>Emp ID</th>
                         <th>Employee Name</th>
                         <th>Department</th>
                         <th>City</th>
                         <th>Mobile</th>
                         <th>Salary</th>
                         <th>Joining Date</th>
                         <th>Action</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         showempData.map((employee, i) => (
                             <tr key={employee.id}>
                                 <td>{employee.id}</td>
                                 <td>{employee.empName}</td>
                                 <td>{employee.empDepartment}</td>
                                 <td>{employee.empCity}</td>
                                 <td>{employee.empMobile}</td>
                                 <td>{employee.empSalery}</td>
                                 <td>{employee.empDate}</td>
                                 <td>
                                     <Link to={"/addemployee/" + employee.id}>
                                         <button style={{ border: "none" }}><i className="fa-solid fa-pen-to-square" style={{ color: "blue" }}></i></button>&nbsp;&nbsp;
                                     </Link>
                                     <button onClick={() => dataDelete(employee.id)} style={{ border: "none" }}><i className="fa-solid fa-trash" style={{ color: "red" }}></i></button>
                                 </td>
                             </tr>
                         ))
                     }
                 </tbody>
             </table>

            }
          
        </>
    );
}
