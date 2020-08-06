import React from "react";
import CustomImage from "../component_image/Image";
import CustomButton from "../component_button/Button";
import Image from "../../Assests/cartoon3.jpeg";
import Styles from "./Accomodation.module.css";
const Accomodation = ({ cartoonOne, AccomodationText }) => {
  const {
    wrapper,
    figure,
    first,
    second,
    third,
    four,
    five,
    aside,
    emphasis,
    param,
    button_wrapper,
    button,
  } = Styles;
  return (
    <div className={wrapper}>
      <figure className={figure} ref={cartoonOne}>
        <CustomImage src={Image} alt={"faceone"} className={first} />
        <CustomImage src={Image} alt={"faceone"} className={second} />
        <CustomImage src={Image} alt={"faceone"} className={third} />
        <CustomImage src={Image} alt={"faceone"} className={four} />
        <CustomImage src={Image} alt={"faceone"} className={five} />
      </figure>
      <aside className={aside} ref={AccomodationText}>
        <h2>
          <em className={emphasis}>it was, is, and , always will be free</em>
        </h2>
        <p className={param}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          laudantium officia ipsam nemo, recusandae neque temporibus fuga
          veritatis modi repudiandae enim saepe fugit ratione eius aspernatur?
          Numquam, at. Sit, eum!
        </p>
        <div className={button_wrapper}>
          <CustomButton
            text={"join chat"}
            className={button}
            backgroundColor={"rgb(0, 102, 102)"}
          />
        </div>
      </aside>
    </div>
  );
};

export default Accomodation;
