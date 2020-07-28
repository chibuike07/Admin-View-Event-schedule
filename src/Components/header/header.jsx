import React from "react";
import Styles from "./header.module.css";
import { Link } from "react-router-dom";
const header = () => {
  const {
    header,
    aside,
    clip_path,
    strong,
    params,
    img_wrapper,
    img,
    nav,
    add_post,
    view_post,
  } = Styles;

  const addEvent = () => {};
  return (
    <div>
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
          <Link to="" className={add_post}>
            add post
          </Link>
          <Link to="" className={view_post}>
            view post
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default header;
