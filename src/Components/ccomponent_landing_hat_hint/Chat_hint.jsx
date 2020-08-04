import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../../Assests/oie_transparent.png";
import CustomImage from "../component_image/Image";
import Styles from "./chat_hint.module.css";
const ChatHint = ({ chatHitTransition, cartoonImage }) => {
  const {
    chat_hint,
    heading,
    chat_view,
    preview,
    wrapOne,
    illus_icon,
    illus_cont,
    divOne,
    secdiv,
    thirdDiv,
    wrapTwo,
    wrapThree,
    illustration,
    third_step,
    aside,
    human_display,
    cartoon,
  } = Styles;
  return (
    <section className={chat_hint}>
      <div className={heading}>
        <h2>
          <b style={{ color: "rgb(0, 102, 102)" }}>join the chat room</b> <br />{" "}
          for more of our activities <br /> share knowledge together
        </h2>
      </div>

      <div className={chat_view}>
        <figure className={preview}>
          <div>
            <div className={wrapOne}>
              <div className={illus_icon}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="2x"
                  color="rgb(0,128,128)"
                />
              </div>
              <div className={illus_cont}>
                <div className={divOne}></div>
                <div className={secdiv}></div>
              </div>
              <div className={thirdDiv}>
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>

          <div className={illustration}>
            <div className={wrapTwo} ref={chatHitTransition}>
              <div className={illus_icon}>
                <FontAwesomeIcon icon={faUserCircle} size="2x" color="#fff" />
              </div>
              <div className={illus_cont}>
                <div className={divOne}></div>
                <div className={secdiv}></div>
              </div>
              <div className={thirdDiv}>
                <FontAwesomeIcon icon={faEllipsisV} color="#fff" />
              </div>
            </div>
          </div>

          <div className={third_step}>
            <div className={wrapThree}>
              <div className={illus_icon}>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  size="2x"
                  color="rgb(200,108,124)"
                />
              </div>
              <div className={illus_cont}>
                <div className={divOne}></div>
                <div className={secdiv}></div>
              </div>
              <div className={thirdDiv}>
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
          </div>
        </figure>
        <aside className={aside}>
          <figure className={human_display} ref={cartoonImage}>
            <CustomImage
              src={Image}
              alt={"cartoon image"}
              className={cartoon}
            />
          </figure>
        </aside>
      </div>
    </section>
  );
};

export default ChatHint;
