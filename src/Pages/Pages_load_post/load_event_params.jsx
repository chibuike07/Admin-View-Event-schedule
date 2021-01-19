import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Styles from "./load_event_params.module.css";
import {
  errorToastify,
  successToastify,
} from "../../Components/react_toastify/toastify";
const Load_event_params = ({ match, history }) => {
  const { REACT_APP_ENDPOINT } = process.env;

  const [EventData, setData] = useState(null);

  const [isVisible, setVisible] = useState(false);

  const { section, div_wrapper, div_img, fileInput, inp, div_text } = Styles;

  const fileInp = useRef();

  const handleImageClick = () => {
    setVisible((prev) => ({ isVisible: !prev.isVisible }));
  };

  const updateImage = async ({ target }) => {
    const { id: paramS_id } = match.params;

    const formData = new FormData();

    formData.append("admin_upload", target.files[0]);

    try {
      await axios
        .put(
          `http://localhost:7000/api/v1/admin_post/event_update/${paramS_id}`,
          formData
        )
        .then((res) => {
          history.push(`/load_event/${paramS_id}`);
          successToastify(res.data.message);
          handleImageClick();
        });
    } catch (error) {
      console.error(error);
    }
  };

  const clickEvent = async ({ target }) => {
    const { id: accessKey } = target;

    const { id: paramS_id } = match.params;

    let adjustment = window.prompt("adjust your changes", target.innerText);

    if (adjustment) {
      let confirm = window.confirm("Go ahead to update");

      if (confirm === true) {
        await axios
          .put(
            `http://localhost:7000/api/v1/admin_post/event_update/${paramS_id}`,
            {
              accessKey,
              adjustment,
            }
          )
          .then((res) => {
            history.push(`/load_event/${paramS_id}`);
            successToastify(res.data.message);
          })
          .catch((error) => {
            if (error.response === undefined) {
              return;
            }

            errorToastify(error.response.data.message);
          });
      }
    }
  };

  useEffect(() => {
    const fetchTargetedEvent = async () => {
      const { id } = match.params;

      try {
        await axios
          .get(`http://localhost:7000/api/v1/admin_post/event_update/${id}`)
          .then((res) => setData(res.data.data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchTargetedEvent();
  }, [match, history]);
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
