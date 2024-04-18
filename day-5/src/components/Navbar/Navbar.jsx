import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  { 
    title: "Products",
    link: "/products" 
},
];

const Navbar = () => {
  return (
    <div>
      <div className="flex nav-h">
        {navLinks.map((item, index) => (
          <ul key={index}>
            <li>
              <NavLink className={"text-decor"} to={item.link}>
                {item.title}
              </NavLink>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
