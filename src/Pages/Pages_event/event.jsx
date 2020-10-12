import React, { useState, useRef } from "react";
import Styles from "./event.module.css";
import Header from "../../Components/header/header";
import Form from "../../Components/component.form/form";
import Section from "../../Components/component.section/section";
import axios from "axios";
const Event = ({ history }) => {
  const { container, main } = Styles;
  const mainCover = useRef();
  const [data, setData] = useState([]);
  const { API_URL } = process.env;

  const addEvent = (e) => {
    e.preventDefault();
    mainCover.current.style.display = "flex";
    mainCover.current.children[0].children[0].style.display = "grid";
    mainCover.current.children[1].children[0].style.display = "none";
  };

  const ViewEvent = async (e) => {
    e.preventDefault();
    mainCover.current.style.display = "flex";
    mainCover.current.children[1].children[0].style.display = "flex";
    mainCover.current.children[0].children[0].style.display = "none";
    try {
      await axios
        .get(`${API_URL}/admin_post/event_update/`)
        .then((res) => setData(res.data));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className={container}>
      <Header viewEvent={ViewEvent} addEvent={addEvent} />
      <main className={main} ref={mainCover}>
        <Form />
        <Section EventData={data} history={history} />
      </main>
    </div>
  );
};

export default Event;
