import React from 'react'
import Header from '../../common/Header';
import SideBars from '../../common/SideBar';
import { Outlet } from 'react-router-dom';


function Admin() {

  const adminSideBar = [
    { link: 'admin-dashboard', icon: 'fa-th-large', title: "Dashboard" },
    { link: 'bookings', icon: 'fa-calendar-check', title: "Bookings" },
    { link: 'manage-courts', icon: 'fa-vector-square', title: "Manage Courts" },
    // { link: 'manage-hours', icon: 'fa-clock', title: "Manage Slots" },
    { link: 'manage-sports', icon: 'fa-volleyball', title: "Manage Sports" },
    { link: 'manage-services', icon: 'fa-tags', title: "Manage Services" },
    { link: 'user-details', icon: 'fa-user-tag', title: "User Details" },
    { link: 'manage-profile', icon: 'fa-user-tie', title: "Profile" },
  ]

  return (
    <>
      <Header />
      <div className="admin-home">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <SideBars data={adminSideBar} />
            </div>
            <div className="col-lg-9">
              <Outlet />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Admin