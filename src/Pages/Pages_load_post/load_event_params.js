import React, { useState, useEffect } from "react";
import axios from "axios";
import Styles from "./load_event_params.module.css";

const Load_event_params = ({ match }) => {
  const { REACT_APP_HOST } = process.env;
  const [EventData, setData] = useState(null);
  const { section, div_wrapper, div_img, div_text } = Styles;
  useEffect(() => {
    const fetchTargetedEvent = async () => {
      const { id } = match.params;
      try {
        await axios
          .get(`http://${REACT_APP_HOST}/admin_post/event_update/${id}`)
          .then((res) => setData(res.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchTargetedEvent();
  }, [match, REACT_APP_HOST]);
  const data =
    EventData && EventData._id ? (
      <div className={div_wrapper} key={EventData._id}>
        <div className={div_img}>
          <img src={EventData.image} alt="Event_Image" />
        </div>
        <div className={div_text}>
          <h2>{EventData.title}</h2>
          <em>
            {EventData.date} {EventData.time}
          </em>
          <p>{EventData.description}</p>
        </div>
      </div>
    ) : (
      <p>no event yet</p>
    );
  return (
    <div>
      <section className={section}>{data}</section>
    </div>
  );
};

export default Load_event_params;
