import React from "react";
import Styles from "./event.module.css";
import Header from "../../Components/header/header";
import Form from "../../Components/component.form/form";
import Section from "../../Components/component.section/section";
const event = () => {
  const { container, main, headings } = Styles;
  return (
    <div className={container}>
      <Header />
      <main className={main}>
        <Form />
        <h2 className={headings}>event</h2>
        <Section />
      </main>
    </div>
  );
};

export default event;
