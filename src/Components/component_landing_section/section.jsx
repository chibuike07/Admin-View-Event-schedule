import React from "react";
import Image from "../../Assests/manageEvent.jpeg";
import CustomImage from "../../Components/component_image/Image";
import Styles from "./section.module.css";
const Session = ({ prevEvent, topEvent, eventHight }) => {
  const {
    main_session,
    marguee1,
    marguee2,
    marguee3,
    previous,
    top_event,
    event_highlight,
  } = Styles;
  return (
    <section className={main_session}>
      <fieldset className={previous} ref={prevEvent}>
        <legend>previous event</legend>
        <CustomImage src={Image} alt={"circle image"} className={marguee1} />
        <p>this holds the event last event that was held on the platform</p>
      </fieldset>

      <fieldset className={top_event} ref={topEvent}>
        <legend>top event</legend>
        <CustomImage src={Image} alt={"top event image"} className={marguee2} />
        <p>this holds the event last event that was held on the platform</p>
      </fieldset>

      <fieldset className={event_highlight} ref={eventHight}>
        <legend>events highlight</legend>
        <CustomImage src={Image} alt={"event highlight"} className={marguee3} />
        <p>this holds the event last event that was held on the platform</p>
      </fieldset>
    </section>
  );
};

export default Session;
