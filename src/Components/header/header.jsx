import React from "react";
import Styles from "./header.module.css";
import { Link } from "react-router-dom";
const header = ({ viewEvent, addEvent }) => {
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

  return (
    <div>
      <header className={header}>
        <aside className={aside}>
          <strong className={strong}>event management apps</strong>
          <div className={clip_path}></div>
          <p className={params}>
            let work towards a global connection with every one
          </p>
          <div className={img_wrapper}>
            <img src="" alt="" className={img} />
          </div>
        </aside>
        <nav className={nav}>
          <Link to="" onClick={addEvent} className={add_post}>
            add post
          </Link>
          <Link to="" onClick={viewEvent} className={view_post}>
            view post
          </Link>
        </nav>
      </header>
    </div>
  );
};

export default header;
