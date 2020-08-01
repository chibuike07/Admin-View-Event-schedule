import React from "react";
import CustomImage from "../../Components/component_image/Image";
import CustomNavLink from "../../Components/component_navlinks/NavLink";
const anding_page = () => {
  return (
    <div>
      <header className="header">
        <div className="left_wrapper">
          <div className="image">
            <CustomImage src={} alt={"Logo"} />
          </div>
          <div className="text">
            <p>group chat</p>
          </div>
        </div>
        <nav className="navbar">
          <CustomNavLink text={"home"} />
          <CustomNavLink text={"contact"} />
          <CustomNavLink text={"chat"} />
        </nav>
      </header>
    </div>
  );
};
// https://cdn.dribbble.com/users/2146089/screenshots/7030591/media/382396b93b15b30adc250dc220832000.mp4
export default anding_page;
