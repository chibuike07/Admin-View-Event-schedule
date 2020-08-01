import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserAlt,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../../Components/component_button/Button";
import CustomNavLink from "../../Components/component_navlinks/NavLink";
import CustomImage from "../../Components/component_image/Image";
import Image from "../../Assests/manageEvent.jpeg";
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
    heading,
    section,
    section_wrapper,
    section_icon,
    icon_text,
    hint,
    button,
    highlight,
    btn,
    main,
    main_session,
    previous,
    top_event,
    event_highlight,
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
      <main className={main}>
        <section className={main_session}>
          <fieldset className={previous}>
            <legend>previous event</legend>
            <CustomImage src={Image} alt={"circle image"} />
            <p>this holds the event last event that was held on the platform</p>
          </fieldset>

          <fieldset className={top_event}>
            <legend>top event</legend>
            <CustomImage src={Image} alt={"top event image"} />
            <p>this holds the event last event that was held on the platform</p>
          </fieldset>

          <fieldset className={event_highlight}>
            <legend>events highlight</legend>
            <CustomImage src={Image} alt={"event highlight"} />
            <p>this holds the event last event that was held on the platform</p>
          </fieldset>
        </section>
      </main>
    </div>
  );
};
// https://cdn.dribbble.com/users/2146089/screenshots/7030591/media/382396b93b15b30adc250dc220832000.mp4
export default Landing_page;
