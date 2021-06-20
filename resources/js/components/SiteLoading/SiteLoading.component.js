import React from "react";
import logo from "./img/logo";

const SiteLoading = () => {
    const loadingStyles = {
        width: "100vw",
        height: "100vh",
        zIndex: "1000",
        position: "absolute",
        backgroundColor: "#2A4789",
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    };
    return (
        <div style={loadingStyles}>
            <img src={logo} alt="zicket" height='25' width='133'/>
        </div>
    );
};

export default SiteLoading;
