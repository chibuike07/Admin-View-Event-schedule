import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faTelegramPlane,
} from "@fortawesome/free-brands-svg-icons";
import CustomLink from "../component_link/Link";
import Styles from "./footer.module.css";
const Footer = ({ footer: footerRef }) => {
  const {
    footer,
    social,
    icon,
    userIcon,
    text,
    media,
    chat_wrapper,
    chatNav,
    product,
    title,
    resource,
  } = Styles;
  return (
    <footer className={footer} ref={footerRef}>
      <figure className={social}>
        <div className={icon}>
          <FontAwesomeIcon
            icon={faUsers}
            className={userIcon}
            color="#fff"
            size="2x"
          />
          <figcaption>
            <h4 className={text}>group chat</h4>
          </figcaption>
        </div>
        <div className={media}>
          <FontAwesomeIcon icon={faFacebook} color="#fff" size="2x" />
          <FontAwesomeIcon icon={faTwitter} color="#fff" size="2x" />
          <FontAwesomeIcon icon={faLinkedin} color="#fff" size="2x" />
          <FontAwesomeIcon icon={faTelegramPlane} color="#fff" size="2x" />
        </div>
      </figure>

      <div className={chat_wrapper}>
        <div className={title} role="heading">
          <h4>chat</h4>
        </div>
        <nav className={chatNav}>
          <CustomLink text={"home"} url={"/landing_page"} />
          <CustomLink text={"contact"} url={"/landing_page"} />
          <CustomLink text={"chat"} url={"/landing_page"} />
        </nav>
      </div>

      <div className={product} role="listitem">
        <div className={title} role="heading">
          <h4>product</h4>
        </div>

        <ul>
          <li>create{" & "}build </li>
          <li>manage and track</li>
          <li>publish{" & "}engage</li>
          <li>communication schemes</li>
        </ul>
      </div>

      <div className={resource} role="listitem">
        <div className={title} role="heading">
          <h4>resource</h4>
        </div>

        <ul>
          <li>press</li>
          <li>help center</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
