import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Button = ({ label, to, bgCol }) => {
    {
        return (
            <div
                className={`p-1 inline-grid ${
                    bgCol ? `border-${bgCol}` : "border-blue-2"
                } border border-solid rounded-full min-w-button  min-h-button m-2`}
            >
                <div
                    className={`flex  items-center justify-center text-white rounded-full ${
                        bgCol ? `bg-${bgCol}` : "bg-blue-2"
                    } opacity-90 px-4`}
                >
                    {to ? (
                        <Link
                            to={to}
                            className="h-6 relative flex justify-center items-center"
                        >
                            {label}
                        </Link>
                    ) : (
                        <button>{label}</button>
                    )}
                </div>
            </div>
        );
    }
};

export default Button;

Button.propTypes = {
    label: PropTypes.string,
    to: PropTypes.string,
    bgCol: PropTypes.string,
};
