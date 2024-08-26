import React from "react";
import { Link, Outlet } from "react-router-dom";
import { toast } from "react-toastify";


export default function Sidebar() {
    

    function logoutt(){
        toast.warning("logout successfully")
        localStorage.removeItem("user");
        localStorage.removeItem("pass");
        
        
    }


    return (
        <><br /><br />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2">
                        <ul className="list-unstyled">
                           <li className="border-bottom" ><Link to={"/dashboard"}><button className="btn shadow-none "><i className="fa-solid fa-house fa-lg me-3 "></i>Dashboard</button></Link> </li>
                           <li className="border-bottom">  <Link to={"/employee"}><button className="btn shadow-none"><i className="fa-solid fa-users fa-lg me-3"></i>Employee</button></Link></li>
                           <li className="border-bottom"> <Link to={"/addemployee"}><button className="btn shadow-none "><i className="fa-solid fa-square-plus fa-lg me-3"></i>Add Employee</button></Link> </li>
                           <li className="border-bottom"> <Link to={"/"}><button className="btn shadow-none " onClick={() => logoutt()}> <i className="fa-solid fa-right-from-bracket fa-lg me-3"></i>Logout</button></Link> </li>  
                        </ul>
                    </div>
                    <div className="col-lg-10" >
                                <Outlet/>    
                    </div>
                </div>
            </div>
        </>
    )
}