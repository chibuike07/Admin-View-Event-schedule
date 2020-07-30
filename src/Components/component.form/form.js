import React, { useState, useRef } from "react";
import Styles from "./form.module.css";
import axios from "axios";
const Form = () => {
  const {
    form_wrapper,
    form,
    title,
    description,
    label,
    file,
    button,
  } = Styles;
  const forms = useRef();
  const [state, setState] = useState();
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const { REACT_APP_HOST } = process.env;
  // console.log("Host", process.env);
  const handleInputChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleFileChange = ({ target }) => {
    const formdata = new FormData();
    formdata.append("file", target.files[0]);
    formdata.append("title", data.title);
    formdata.append("description", data.description);
    setState(formdata);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`http://${REACT_APP_HOST}/admin_post/events`, state);
  };
  return (
    <div className={form_wrapper}>
      <form onSubmit={handleSubmit} className={form} ref={forms}>
        <input
          type="text"
          className={title}
          required={true}
          name="title"
          value={data.title}
          onChange={handleInputChange}
        />
        <textarea
          name="description"
          id="description"
          className={description}
          required={true}
          value={data.description}
          onChange={handleInputChange}
        ></textarea>
        <label htmlFor="file" className={label}>
          Uplaad Image
        </label>
        <input
          type="file"
          className={file}
          id="file"
          name="file"
          accept="image/*"
          required={true}
          value={data.file}
          onChange={handleFileChange}
        />
        <input type="submit" className={button} />
      </form>
    </div>
  );
};

export default Form;
