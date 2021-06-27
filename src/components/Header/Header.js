import React from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { title: "home", link: "/" },
  { title: "work", link: "/work" },
  { title: "projects", link: "/projects" },
  { title: "art", link: "/art" },
  { title: "contact", link: "/contact" },
];

export default function Header() {
  return (
    <ul className="header">
      {LINKS.map(({ title, link }) => (
        <li className="header__li" key={title}>
          <NavLink
            className="header__link"
            activeClassName="header__link--active"
            exact={title === "home"}
            to={link}
          >
            {title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
