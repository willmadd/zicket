import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, to, bgCol }) => {
    {
        return (
            <div
                className={`p-1 inline-grid border-blue-2 border border-solid rounded-full min-w-button  min-h-button`}
            >
                <div className="rounded-full bg-blue-2 opacity-10">
                    {to ? (
                        <Link to={to}>{label}</Link>
                    ) : (
                        <button>{label}</button>
                    )}
                </div>
            </div>
        );
    }
};

export default Button;
