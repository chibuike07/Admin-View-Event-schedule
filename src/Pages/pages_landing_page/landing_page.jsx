import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import CustomNavLink from "../../Components/component_navlinks/NavLink";
import Styles from "./landing_page.module.css";
const Landing_page = () => {
  const {
    container,
    header,
    toparea,
    left_wrapper,
    icon,
    navbar,
    text,
  } = Styles;
  return (
    <div className={container}>
      <header className={header}>
        <div className={toparea}>
          <div className={left_wrapper}>
            <div className={icon}>
              <FontAwesomeIcon icon={faUsers} size="2x" color="#fff" />
            </div>
            <div className={text}>
              <p>group chat</p>
            </div>
          </div>
          <nav className={navbar}>
            <CustomNavLink
              text={"home"}
              url={"/"}
              color={"#fff"}
              textDecoration={"none"}
              textTransform={"uppercase"}
            />
            <CustomNavLink
              text={"contact"}
              url={"/"}
              color={"#fff"}
              textDecoration={"none"}
              textTransform={"uppercase"}
            />
            <CustomNavLink
              text={"chat"}
              url={"/"}
              color={"#fff"}
              textDecoration={"none"}
              textTransform={"uppercase"}
            />
          </nav>
        </div>
      </header>
    </div>
  );
};
// https://cdn.dribbble.com/users/2146089/screenshots/7030591/media/382396b93b15b30adc250dc220832000.mp4
export default Landing_page;
