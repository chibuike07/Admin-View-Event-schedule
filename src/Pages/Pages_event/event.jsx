import React from "react";
import Styles from "./event.module.css";
const event = () => {
  const {
    container,
    header,
    aside,
    clip_path,
    strong,
    params,
    img_wrapper,
    nav,
    add_post,
    view_post,
    main,
    form,
    title,
    description,
    label,
    file,
    button,
    img,
  } = Styles;
  return (
    <div className={container}>
      <header className={header}>
        <aside className={aside}>
          <div className={clip_path}></div>
          <strong className={strong}>event management apps</strong>
          <p className={params}>
            let work towards a global connection with every one
          </p>
          <div className={img_wrapper}>
            <img src="" alt="" className={img} />
          </div>
        </aside>
        <nav className={nav}>
          <a href="" className={add_post}></a>
          <a href="" className={view_post}></a>
        </nav>
      </header>

      <main className={main}>
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
      </main>
    </div>
  );
};

export default event;
