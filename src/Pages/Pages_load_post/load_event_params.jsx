import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Styles from "./load_event_params.module.css";

const Load_event_params = ({ match }) => {
  const { REACT_APP_HOST } = process.env;
  const [EventData, setData] = useState(null);
  const [isVisible, setVisible] = useState(false);
  const { section, div_wrapper, div_img, fileInput, inp, div_text } = Styles;
  const fileInp = useRef();

  const handleImageClick = () => {
    setVisible((prev) => prev.isVisible !== isVisible);
  };
  const updateImage = async ({ target }) => {
    const { id: paramS_id } = match.params;
    console.log("target.value", target.files[0]);
    const formData = new FormData();
    formData.append("admin_upload", target.files[0]);
    try {
      await axios.put(
        `${REACT_APP_HOST}/admin_post/event_update/${paramS_id}`,
        formData
      );
    } catch (error) {
      console.error(error);
    }
    // setImage({ [target.name]: target.value });
  };
  const clickEvent = async ({ target }) => {
    const { id: accessKey } = target;
    const { id: paramS_id } = match.params;
    let adjustment = window.prompt("adjust your changes", target.innerText);
    if (adjustment) {
      let confirm = window.confirm("Go ahead to update");
      if (confirm === true) {
        try {
          await axios.put(
            `${REACT_APP_HOST}/admin_post/event_update/${paramS_id}`,
            { accessKey, adjustment }
          );
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  useEffect(() => {
    const fetchTargetedEvent = async () => {
      const { id } = match.params;
      try {
        await axios
          .get(`${REACT_APP_HOST}/admin_post/event_update/${id}`)
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
          <img
            src={EventData.image}
            alt="Event_Image"
            onClick={handleImageClick}
          />
          <div className={fileInput}>
            {isVisible && (
              <input
                type="file"
                className={inp}
                id="image"
                name="admin_upload"
                accept="image/*"
                onChange={updateImage}
                ref={fileInp}
              />
            )}
          </div>
        </div>
        <div className={div_text}>
          <h2 onClick={clickEvent} id="title">
            {EventData.title}
          </h2>
          <div style={{ backgroundColor: "red" }}>
            <em id="date" onClick={clickEvent}>
              {new Date(EventData.date).toDateString()}
            </em>
            {"\n"}
            <em onClick={clickEvent} id="time">
              {EventData.time}
            </em>
          </div>
          <p onClick={clickEvent} id="description">
            {EventData.description}
          </p>
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
