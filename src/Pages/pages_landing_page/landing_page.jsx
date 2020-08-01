import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import CustomNavLink from "../../Components/component_navlinks/NavLink";
import Styles from "./landing_page.module.css";
const Landing_page = () => {
  const { container, header, left_wrapper, icon, navbar, text } = Styles;
  return (
    <div className={container}>
      <header className={header}>
        <div className={left_wrapper}>
          <div className={icon}>
            <FontAwesomeIcon icon={faUsers} />
          </div>
          <div className={text}>
            <p>group chat</p>
          </div>
        </div>
        <nav className={navbar}>
          <CustomNavLink text={"home"} url={"/"} color={"blue"} />
          <CustomNavLink text={"contact"} url={"/"} color={"blue"} />
          <CustomNavLink text={"chat"} url={"/"} color={"blue"} />
        </nav>
      </header>
    </div>
  );
};
// https://cdn.dribbble.com/users/2146089/screenshots/7030591/media/382396b93b15b30adc250dc220832000.mp4
export default Landing_page;
