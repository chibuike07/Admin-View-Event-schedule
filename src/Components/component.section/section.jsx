import React from "react";
import Styles from "./section.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCross,
  faCrosshairs,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
const Section = ({ EventData, history }) => {
  const { section, div_wrapper, div_img, div_text } = Styles;
  const { REACT_APP_HOST } = process.env;
  const wrapperClick = (id) => {
    history.push(`/load_event/${id}`);
  };

  const handleRemoveEvent = async (id) => {
    try {
      await axios.delete(`${REACT_APP_HOST}/admin_post/event_update/${id}`);
    } catch (err) {
      console.error(err.response);
    }
  };
  const data =
    EventData &&
    EventData.map((value) => {
      return value ? (
        <div className={div_wrapper} key={value._id}>
          <div onClick={() => wrapperClick(value._id)}>
            <div className={div_img}>
              <img src={value.image} alt="Event_Image" />
            </div>
            <div className={div_text}>
              <h2>{value.title}</h2>
              <em>
                {value.date} {value.time}
              </em>
              <p>
                {`${value.description.split(" ")[0]} ${
                  value.description.split(" ")[1]
                } ${value.description.split(" ")[2]}`}
                ...
              </p>
            </div>
          </div>
          <button onClick={() => handleRemoveEvent(value._id)}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        </div>
      ) : (
        <p>no event yet</p>
      );
    });
  console.log("data", EventData);
  return (
    <div>
      <section className={section}>{data}</section>
    </div>
  );
};

export default Section;
