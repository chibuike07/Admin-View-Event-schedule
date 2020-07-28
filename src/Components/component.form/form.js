import React from "react";
import Styles from "./form.module.css";
const form = () => {
  const { form, title, description, label, file, button } = Styles;
  return (
    <div>
      <form action="" className={form}>
        <input type="text" className={title} required={true} />
        <textarea
          name="description"
          id="description"
          cols="50"
          rows="10"
          className={description}
          required={true}
        ></textarea>
        <label htmlFor="file" className={label}>
          Uplaad Image
        </label>
        <input
          type="file"
          className={file}
          id="file"
          accept="image/*"
          required={true}
        />
        <input type="submit" className={button} />
      </form>
    </div>
  );
};

export default form;
