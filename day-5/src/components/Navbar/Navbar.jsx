import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

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
    link: "/products",
  },
  {
    title: "Login",
    link: "/login",
  },
  {
    title: "Cart",
    link: "/cart",
  }
];

const Navbar = () => {

  const {theme, toggleTheme} = useTheme()
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
        <button onClick={()=> toggleTheme()}>{theme === "light" ? "Dark mode" : "Light Mode"}</button>
      </div>

    </div>
  );
};

export default Navbar;
