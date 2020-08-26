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
  const [formData, setFormData] = useState();
  const [data, setData] = useState({
    title: "",
    description: "",
    file: "",
  });

  const { REACT_APP_HOST } = process.env;
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
    setFormData(formdata);
    setData({ ...data, file: target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setData({ ...data, title: "", description: "", file: "" });
    try {
      await axios.post(`${REACT_APP_HOST}/admin_post/events`, formData);
    } catch (err) {
      console.error(err.response);
    }
  };
  return (
    <div className={form_wrapper}>
      <form onSubmit={handleSubmit} className={form} ref={forms} id="form">
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
