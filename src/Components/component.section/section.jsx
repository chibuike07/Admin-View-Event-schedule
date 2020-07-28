import React from "react";
import Styles from "./section.module.css";
const section = () => {
  const { section, div_wrapper, div_img, div_text } = Styles;
  return (
    <div>
      <section className={section}>
        <div className={div_wrapper}></div>
        <div className={div_img}></div>
        <div className={div_text}></div>
      </section>
    </div>
  );
};

export default section;
