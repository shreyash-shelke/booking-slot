import React from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function UserSideBar(props) {
  const location = useLocation();

  const sidebarLinks = [
    { to: "/user/booking", icon: "fas fa-bookmark", text: "My Bookings" },
    {
      to: "/user/edit-profile",
      icon: "fas fa-user-edit",
      text: "Edit Profile",
    },
  ];

  const checkActive = (link) => {
    return link.to === location.pathname;
  };

  return (
    <div>
      <div className="blog-sidebar text-center">
        <div className="sidebar-widget">
          <h4>Welcome {props.uData.userName}!</h4>
          <div className="user-img">
            <img src="/assets/img/commentor-1.jpg" alt="" />
          </div>
          <div className="user-name mt-3">
            <span>{props.uData.fullName}</span>
          </div>
          <div className="user-mobile">
            <span>+91 {props.uData.userMob}</span>
          </div>
          <div className="user-email">
            <span>{props.uData.userEmail}</span>
          </div>
          <hr />
          <ul className="ps-0">
            {sidebarLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.to}
                  activeClassName="active"
                  isActive={checkActive(link)}
                >
                  <i className={`${link.icon} me-3`} />
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
