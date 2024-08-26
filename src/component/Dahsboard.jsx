// import React from "react";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {

    const [showempData, setshowempData] = useState([])
    const [totalSalary, setTotalSalary] = useState(0);
    const [Spinner, SetSpinner] = useState(true);
    

    function showDataTable() {
        axios.get("https://667c0c6c3c30891b865b144c.mockapi.io/Employee")
            .then((response) => {
                SetSpinner(false);
                setshowempData(response.data)
                TotalSalary(response.data);
            })
    }
    function TotalSalary(data) {
        const total = data.reduce((sum, employee) => sum + parseFloat(employee.empSalery || 0),0);
        setTotalSalary(total);
    }
    useEffect(() => {
        showDataTable();
    },[])
    return (
        
       <>
        {
                Spinner
                ?
                <div className="d-flex justify-content-center">
                  <div className="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div >
                :
                <div class="mt">
                <div class="row">
                <div class="col-xl-5 col-sm-6 col-12 ">
                    <div class="card shadow ">
                        <div class="card-content ">
                            <div class="card-body ">
                                <div class="row">
                                    <div class="col-8">
                                    <h5 class="card-title widget-card-title mb-3 fw-bold">TOTAL EMPLOYEE</h5>
                                        <h2 class="card-subtitle text-body-secondary m-0 fw-bold">{showempData.length}</h2>
                                    </div>
                                    <div class="col-4 ">
                                        <div class="d-flex justify-content-end">
                                            <div class="lh-1 text-white bg-dark rounded-circle p-3 d-flex align-items-center justify-content-center">
                                                <i class="fa-solid fa-table-columns "></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-flex align-items-center mt-3">
                                            <span class="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
                                                <i class="bi bi-arrow-right-short bsb-rotate-45"></i>
                                            </span>
                                            <div> 
                                                <p class="fs-7 mb-0 text-primary fw-bold">since last week</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-5 col-sm-6 col-12">
                    <div class="card shadow " >
                        <div class="card-content">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-8">
                                        <h5 class="card-title widget-card-title mb-3 fw-bold">TOTAL SALERY</h5>
                                        <h2 class="card-subtitle text-body-secondary m-0 fw-bold">{totalSalary}&nbsp;₹</h2>
                                    </div>
                                    <div class="col-4">
                                        <div class="d-flex justify-content-end">
                                            <div class="lh-1 text-white bg-dark rounded-circle p-3 d-flex align-items-center justify-content-center">
                                                <i class="fa-solid fa-table-columns"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="d-flex align-items-center mt-3">
                                            <span class="lh-1 me-3 bg-danger-subtle text-danger rounded-circle p-1 d-flex align-items-center justify-content-center">
                                                <i class="bi bi-arrow-right-short bsb-rotate-45"></i>
                                            </span>
                                            <div>
                                                <p class="fs-7 mb-0 text-primary fw-bold ">since last week</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      
            </div>
            </div>
            }
       </>
           
            
        

    )
}