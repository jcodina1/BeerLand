import React from "react";
import style from './SuperAdmin.module.css'
import Sidebar from "./SideBar/Sidebar";
import DashBoard from "./DashBoard/DashBoard";

const SuperAdmin = () => {
    return (
        <div className={style.superAdmin}>
            <Sidebar/>
            <DashBoard/>
        </div>
    );
};

export default SuperAdmin;