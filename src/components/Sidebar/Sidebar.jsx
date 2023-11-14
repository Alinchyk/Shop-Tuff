import React from "react";
import { NavLink } from "react-router-dom";

import s from './Sidebar.module.css'

const Sidebar = () => {
    return (<div className={s.sidebar}>
        <div className={s.title}>CATEGORIES</div>
        <nav>
            <ul className={s.menu}>
                <li>
                    <NavLink to={`/categories`}>
                        LINK
                    </NavLink>
                </li>
            </ul>
        </nav>

     <div className={s.footer}>
        <a href="/help" target="_blank" className={s.link}>
          Help
        </a>
        <a
          href="/terms"
          target="_blank"
          className={s.link}
          style={{ textDecoration: "underline" }}
        >
          Terms & Conditions
        </a>
      </div>
    </div>)
}

export default Sidebar;