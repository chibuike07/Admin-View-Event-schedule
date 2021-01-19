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
  const [fileValue, setFileValue] = useState("");
  const [data, setData] = useState({
    title: "",
    description: "",
    file: "",
  });

  // const { REACT_APP_ENDPOINT } = process.env;

  const handleInputChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const handleFileChange = ({ target }) => {
    setData({ ...data, file: target.files[0] });
    setFileValue(target.value);
    // setFormData(formdata);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", data.file);
    // formData.append("title", data.title);
    // formData.append("description", data.description);

    console.log("data.file", data.file);
    await axios
      .post("http://localhost:7000/api/v1/admin_post/events", formData)
      .then((res) => {
        console.log("res.data", res.data);
        setData({ ...data, title: "", description: "", file: "" });
      })
      .catch((err) => {
        if (err.response === undefined) {
          return;
        }
        console.error(err.response);
      });
  };

  return (
    <div className={form_wrapper}>
      <form
        onSubmit={handleSubmit}
        className={form}
        ref={forms}
        id="form"
        encType="multipart/form-data"
      >
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
          // accept="image/*"
          required={true}
          value={fileValue}
          onChange={handleFileChange}
        />
        <input type="submit" className={button} />
      </form>
    </div>
  );
};

export default Form;
