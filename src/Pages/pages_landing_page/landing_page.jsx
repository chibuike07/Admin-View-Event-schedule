import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faUserAlt,
  faSpinner,
  faPlayCircle,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import CustomButton from "../../Components/component_button/Button";
import CustomNavLink from "../../Components/component_navlinks/NavLink";
import CustomImage from "../../Components/component_image/Image";
import CustomInput from "../../Components/component_input/Input";
import Image from "../../Assests/manageEvent.jpeg";
import PhoneImage from "../../Assests/oie_jpg.png";
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
    marguee1,
    marguee2,
    marguee3,
    previous,
    top_event,
    event_highlight,
    showcase,
    showcase_image,
    play_store,
    apple_store,
    phone_image,
    showcase_aside,
    symbols,
  } = Styles;
  const prevEvent = useRef();
  const topEvent = useRef();
  const eventHight = useRef();
  const [state, setState] = useState("none");
  useEffect(() => {
    const onScroll = (e) => {
      if (e.target.documentElement.scrollTop > 500) {
        prevEvent.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
        topEvent.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
        eventHight.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
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
          <fieldset className={previous} ref={prevEvent}>
            <legend>previous event</legend>
            <CustomImage
              src={Image}
              alt={"circle image"}
              className={marguee1}
            />
            <p>this holds the event last event that was held on the platform</p>
          </fieldset>

          <fieldset className={top_event} ref={topEvent}>
            <legend>top event</legend>
            <CustomImage
              src={Image}
              alt={"top event image"}
              className={marguee2}
            />
            <p>this holds the event last event that was held on the platform</p>
          </fieldset>

          <fieldset className={event_highlight} ref={eventHight}>
            <legend>events highlight</legend>
            <CustomImage
              src={Image}
              alt={"event highlight"}
              className={marguee3}
            />
            <p>this holds the event last event that was held on the platform</p>
          </fieldset>
        </section>
        <section className={showcase}>
          <figure className={showcase_image}>
            <CustomImage
              src={PhoneImage}
              alt={"phone image"}
              className={phone_image}
            />
          </figure>
          <aside className={showcase_aside}>
            <h3>
              schedule chats, schedule personal event/task and chat with your
              organization easily
            </h3>

            <p>
              we keep the world connect with organization events. You may also
              want to save task and event...
              <br /> All in one platform!!!
            </p>

            <CustomInput
              type={"button"}
              value={"play store"}
              name={"play store"}
              className={play_store}
            />
            <CustomInput
              type={"button"}
              value={"apple store"}
              name={"apple store"}
              className={apple_store}
            />
          </aside>
          <figure className={symbols}>
            <FontAwesomeIcon icon={faSpinner} size="3x" spin color="#fff" />
            <FontAwesomeIcon
              icon={faCircle}
              size="7x"
              style={{ clipPath: "circle(50.6% at 90% 50%)" }}
              spin
            />
          </figure>
        </section>
      </main>
    </div>
  );
};
// https://cdn.dribbble.com/users/2146089/screenshots/7030591/media/382396b93b15b30adc250dc220832000.mp4
export default Landing_page;
