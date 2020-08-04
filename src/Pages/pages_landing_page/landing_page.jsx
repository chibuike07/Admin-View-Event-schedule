import React, { useEffect, useRef } from "react";
import Styles from "./landing_page.module.css";
import HeaderView from "../../Components/component_landing_header/header";
import SectionView from "../../Components/component_landing_section/section";
import ShowCase from "../../Components/component_landing_showcase/ShowCase";
import ChatHint from "../../Components/ccomponent_landing_hat_hint/Chat_hint";
const Landing_page = () => {
  const { container, main } = Styles;
  const prevEvent = useRef();
  const topEvent = useRef();
  const eventHight = useRef();
  const showCaseTransition = useRef();
  const chatHitTransition = useRef();
  const cartoonImage = useRef();
  useEffect(() => {
    const onScroll = (e) => {
      if (
        e.target.documentElement.scrollTop >= 300 &&
        e.target.documentElement.scrollTop <= 350
      ) {
        prevEvent.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
        topEvent.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
        eventHight.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
      }
    };

    const showCaseScroll = (e) => {
      if (
        e.target.documentElement.scrollTop >= 700 &&
        e.target.documentElement.scrollTop <= 750
      ) {
        showCaseTransition.current.style.transform = "translate(0%, 0%)";
      }
    };

    const chatHint = (e) => {
      if (
        e.target.documentElement.scrollTop >= 900 &&
        e.target.documentElement.scrollTop <= 950
      ) {
        chatHitTransition.current.style.transform = "translate(30%)";
        cartoonImage.current.children[0].children[0].style.transform =
          "translate(-100%)";
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("scroll", showCaseScroll);
    window.addEventListener("scroll", chatHint);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", showCaseScroll);
      window.removeEventListener("scroll", chatHint);
    };
  }, []);
  return (
    <div className={container}>
      <HeaderView />
      <main className={main}>
        <SectionView
          prevEvent={prevEvent}
          topEvent={topEvent}
          eventHight={eventHight}
        />
        <ShowCase showCaseTransition={showCaseTransition} />
        <ChatHint
          chatHitTransition={chatHitTransition}
          cartoonImage={cartoonImage}
        />
      </main>
    </div>
  );
};
export default Landing_page;
