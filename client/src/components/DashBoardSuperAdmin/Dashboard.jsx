import React from "react";
import style from './Dashboard.module.css'
import Sidebar from "./SideBar/Sidebar";

const Dashboard = () => {
    return (
        <div className={style.dashboard}>
            <Sidebar/>
        </div>
    );
};

export default Dashboard;