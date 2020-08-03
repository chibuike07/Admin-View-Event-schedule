import React from "react";
import Styles from "./header.module.css";
import CustomButton from "../../Components/component_button/Button";
import CustomNavLink from "../../Components/component_navlinks/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faUserAlt } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const {
    header,
    toparea,
    left_wrapper,
    icon,
    navbar,
    text,
    heading,
    section,
    section_wrapper,
    section_icon,
    icon_text,
    hint,
    button,
    highlight,
    btn,
  } = Styles;
  return (
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

      <section className={section}>
        <div className={section_wrapper}>
          <div className={heading}>
            <h4>think chat</h4>
          </div>
          <div className={hint}>
            <p>online chat which provides it's...</p>
          </div>
          <div className={highlight}>
            <div className={section_icon}>
              <FontAwesomeIcon icon={faUserAlt} color="#fff" />
            </div>
            <p className={icon_text}>
              we do make our learning intensive for the users. data sent here
              are intensively on the basis of this group.
            </p>
          </div>
          <div className={button}>
            <CustomButton
              text={"ongoing event"}
              padding={"10%"}
              className={btn}
              backgroundColor={"rgb(0, 102, 102)"}
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
