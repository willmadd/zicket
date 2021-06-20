import React from "react";
import { navitems } from "./Nav.config";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <ul className="flex justify-between">
            {navitems.map((item) => (
                <li className="list-none p-0 text-white mx-2">
                    <Link to={item.href}>
                        <p className="text-white">{item.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Nav;
