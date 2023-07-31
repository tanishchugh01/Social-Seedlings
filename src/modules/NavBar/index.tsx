// components/NavBar.tsx

import React, { useEffect, useState } from "react";
import style from "@styles/NavBar.module.css";
import Link from "next/link";

const NavBar: React.FC = () => {
  // const [isDark, setIsDark] = React.useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav>
    <header className={style.nav323root}>
      <div className={style.nav325logo}>
        <Link href="/">
          Sweet<span>Seedlings</span>
        </Link>
      </div>
      {/* <label className={style.nav894menuIcon} > */}
      {/* <div className=""> */}

      <input
        type="checkbox"
        id="menu-toggle"
        className={style.nav326checkbox}
      />
      <i className={`bi bi-list ${style.nav326icon}`}></i>
      {/* </div> */}
      {/* </label> */}
      {/* <label className={style['menu-icon']}>&#9776;</label> */}
      <ul className={style.nav327menu}>
        {/* <li>
          <a href="#">Home</a>
        </li> */}
        <li>
          <a href="mailto:tanishchugh01@gmail.com" target="_blank">
            Contact Me &nbsp;
            <i className="bi bi-envelope"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/tanishchugh01/Social-Seedlings" target="_blank">
            Github &nbsp;
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a>
            {darkMode ? (
              <i
                className={`bi bi-brightness-high ${style.nav328icon}`}
                onClick={toggleDarkMode}></i>
            ) : (
              <i
                className={`bi bi-moon ${style.nav328icon}`}
                onClick={toggleDarkMode}></i>
            )}
          </a>
        </li>
      </ul>
    </header>
    </nav>
  );
};

export default NavBar;
