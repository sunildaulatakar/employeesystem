import axios from "axios";
import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";


export default function AddEmployee() {

    let navigate = useNavigate();
    let { id } = useParams(undefined)

    const [empData, setempData] = useState({

        empName: "",
        empDepartment: "",
        empCity: "",
        empMobile: "",
        empSalery: "",
        empDate: ""

    })


    function addempdata(e) {
        setempData({ ...empData, [e.target.id]: e.target.value })
    }
    function validateMobile(mobile) {
        const mobileno = /^[0-9]{10}$/;
        return mobileno.test(mobile);
    }

    function addDataSubmit() {
        if (
            !empData.empName ||
            !empData.empDepartment ||
            !empData.empCity ||
            !empData.empMobile ||
            !empData.empSalery ||
            !empData.empDate
        ) {
            toast.error("all fields are required!!");
            return;
        }

        if (!validateMobile(empData.empMobile)) {
            toast.error("invalid mobile number!Must be 10 digits.");
            return;
        }
        if (id == undefined) {
            axios.post("https://667c0c6c3c30891b865b144c.mockapi.io/Employee", empData)
                .then((response) => {
                    console.log(response.data);
                })

            setempData({
                empName: "",
                empDepartment: "",
                empCity: "",
                empMobile: "",
                empSalery: "",
                empDate: ""

            })
            toast.success("record added")
            navigate("/employee")
        }
        else {

            axios.put("https://667c0c6c3c30891b865b144c.mockapi.io/Employee/" + id, empData)
                .then((response) => {
                    console.log(response.data);
                })

            setempData({
                empName: "",
                empDepartment: "",
                empCity: "",
                empMobile: "",
                empSalery: "",
                empDate: ""


            })
            toast.success("record updated")
            navigate("/employee")

        }

    }

    useEffect(() => {
        if (id) {
            axios.get("https://667c0c6c3c30891b865b144c.mockapi.io/Employee/" + id)
                .then((res) => {

                    setempData({
                        empName: res.data.empName,
                        empDepartment: res.data.empDepartment,
                        empCity: res.data.empCity,
                        empMobile: res.data.empMobile,
                        empSalery: res.data.empSalery,
                        empDate: res.data.empDate

                    })
                })
        }
    }, [])


    return (

        <div>
            <h2 className="text-center login-title">ADD Employee</h2>

            <div class="row ">
                <div class="col-lg-8 col-md-8 col-sm-8 form-floating">
                    <input type="text" placeholder="Enter Middle Name" class="form-control shadow" onChange={addempdata} id="empName" value={empData.empName} autocomplete="off" />
                    <label class="form-label mx-3"><b>Full Name</b></label>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 form-floating mb-3">
                    <select
                        className="form-select shadow"
                        onChange={addempdata}
                        value={empData.empDepartment}
                        id="empDepartment"
                        placeholder="Enter Last Name"
                    >
                        <option value=""></option>
                        <option value="IT Support">IT Support</option>
                        <option value="Software Development">Software Development</option>
                        <option value="Frontend Developer">Frontend Developer</option>
                        <option value="Network Administration">Network Administration</option>
                        <option value="Java Developer">Java Developer</option>
                    </select>
                    <label className="form-label mx-3"><b>Department</b></label>
                </div>
            </div><br />
            <div className="row">
                <div class="col-lg-4 col-md-4 col-sm-4  form-floating">
                    <input type="text" placeholder="Enter Last Name" class="form-control shadow" onChange={addempdata} id="empCity" value={empData.empCity} autocomplete="off" />
                    <label className="form-label mx-3"><b>City</b></label>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4  form-floating">
                    <input type="text" placeholder="Enter Last Name" class="form-control shadow" onChange={addempdata} id="empMobile" value={empData.empMobile} autocomplete="off" />
                    <label className="form-label mx-3"><b>Mobile No.</b></label>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 form-floating">
                    <input type="text" placeholder="Enter Last Name" class="form-control shadow" onChange={addempdata} id="empSalery" value={empData.empSalery} autocomplete="off" />
                    <label className="form-label mx-3"><b>Salery</b></label>
                </div>
            </div> <br />
            <div className="col-lg-4 form-floating mb-3">
                <input
                    type="date"
                    className="form-control shadow"
                    onChange={addempdata}
                    id="empDate"
                    value={empData.empDate} autocomplete="off"
                />
                <label className="form-label mx-1"><b>Joining Date</b></label>
            </div> <br/>
            <button class="btn btn-success shadow mt-4" onClick={addDataSubmit}>Submit</button>
        </div>
    )
}