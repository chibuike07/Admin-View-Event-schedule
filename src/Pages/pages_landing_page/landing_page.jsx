import React, { useState, useEffect, useRef } from "react";
import Styles from "./landing_page.module.css";
import HeaderView from "../../Components/component_landing_header/header";
import SectionView from "../../Components/component_landing_section/section";
import ShowCase from "../../Components/component_landing_showcase/ShowCase";
const Landing_page = () => {
  const { container, main } = Styles;
  const prevEvent = useRef();
  const topEvent = useRef();
  const eventHight = useRef();
  const showCaseTransition = useRef();
  useEffect(() => {
    const onScroll = (e) => {
      if (
        e.target.documentElement.scrollTop >= 300 &&
        e.target.documentElement.scrollTop <= 320
      ) {
        prevEvent.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
        topEvent.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
        eventHight.current.children[1].children[0].style.transform =
          "translate(0%, 0%)";
      }
    };

    window.addEventListener("scroll", onScroll);
    const showCaseScroll = (e) => {
      if (
        e.target.documentElement.scrollTop >= 700 &&
        e.target.documentElement.scrollTop <= 720
      ) {
        showCaseTransition.current.style.transform = "translate(0%, 0%)";
      }
    };

    window.addEventListener("scroll", showCaseScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
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
      </main>
    </div>
  );
};
export default Landing_page;
