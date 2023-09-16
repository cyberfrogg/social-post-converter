import React from "react";
import { Outlet } from "react-router-dom";
import classes from "./layout.module.css";

const Layout = () => {
    return (
        <>
            <div className={classes.container}>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;