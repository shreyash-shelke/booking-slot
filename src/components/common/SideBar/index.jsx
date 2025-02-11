import React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SideBars(props) {
  const data = props.data;
  const location = useLocation();

  return (
    <>
      <div className="admin-sidebar">
        <div className="">
          <div className="sidebar-widget px-0 py-3">
            {data.map((item, i) => (
              <div className={`blog-post mb-1 ${location.pathname === item.link ? 'active' : ''}`} key={i}>
                <NavLink to={item.link}>
                  <div className="">
                    <h5 className="my-0"> <i className={`fa ${item.icon} text-dark me-3`} /> {item.title}</h5>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBars;
