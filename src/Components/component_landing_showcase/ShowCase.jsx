import React from "react";
import Styles from "./show_case.module.css";
import CustomImage from "../../Components/component_image/Image";
import CustomLink from "../../Components/component_link/Link";
import PhoneImage from "../../Assests/oie_jpg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSpinner,
  faCircle,
  faPlay,
  faAppleAlt,
} from "@fortawesome/free-solid-svg-icons";
const ShowCase = ({ showCaseTransition }) => {
  const {
    showcase,
    showcase_image,
    store_wrapper,
    play_store,
    play_wrapper,
    faplays,
    faapples,
    apple_store,
    phone_image,
    showcase_aside,
    symbols,
  } = Styles;
  return (
    <section className={showcase} ref={showCaseTransition}>
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
          we keep the world connect with organization events. You may also want
          to save task and event...
          <br /> All in one platform!!!
        </p>
        <div className={store_wrapper}>
          <CustomLink
            text={
              <span className={play_wrapper}>
                <figure>
                  <FontAwesomeIcon
                    icon={faPlay}
                    pull="right"
                    className={faplays}
                  />
                </figure>
                <figcaption>
                  <span> google play</span>
                </figcaption>
              </span>
            }
            name={"play store"}
            className={play_store}
            url={"/landing_page"}
          />
          <CustomLink
            text={
              <span className={play_wrapper}>
                <figure>
                  <FontAwesomeIcon
                    icon={faAppleAlt}
                    pull="right"
                    className={faapples}
                  />
                </figure>
                <figcaption>
                  <span> google play</span>
                </figcaption>
              </span>
            }
            name={"apple store"}
            className={apple_store}
            url={"/landing_page"}
          />
        </div>
      </aside>
      <figure className={symbols}>
        <FontAwesomeIcon
          icon={faSpinner}
          size="3x"
          color="#fff"
          style={{ position: "relative", left: "9%", marginTop: "5%" }}
          spin
        />
        <FontAwesomeIcon
          icon={faCircle}
          size="7x"
          style={{
            clipPath: "polygon(0% 0%, 75% 0%, 25% 50%, 75% 100%, 0% 100%)",
            paddingRight: "3%",
            transform: "rotate(180deg)",
            position: "relative",
            right: "2%",
          }}
          color="#004c4c"
        />
      </figure>
    </section>
  );
};

export default ShowCase;
