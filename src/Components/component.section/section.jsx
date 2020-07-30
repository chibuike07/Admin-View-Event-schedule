import React from "react";
import Styles from "./section.module.css";
const Section = ({ EventData, history }) => {
  const { section, div_wrapper, div_img, div_text } = Styles;
  const wrapperClick = (id) => {
    history.push(`/load_event/${id}`);
  };

  const data =
    EventData &&
    EventData.map((value) => {
      return value ? (
        <div
          className={div_wrapper}
          onClick={() => wrapperClick(value._id)}
          key={value._id}
        >
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
