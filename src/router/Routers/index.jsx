import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Site Components
import Site from "../../components/site/Site";
import SignIn from "../../components/site/SignIn";
import SignUp from "../../components/site/SignUp";
import AboutUs from "../../components/site/AboutUs";
import Home from "../../components/site/Home";
import ContactUs from "../../components/site/ContactUs";
import Courts from "../../components/site/Courts";
import Services from "../../components/site/Services";
import TurfDetails from "../../components/site/TurfDetails";
import BookingForm from "../../components/site/BookingForm";
import NewUser from "../../components/site/NewUser";
import VerifyUser from "../../components/site/VerifyUser";
import BookingStatus from "../../components/site/BookingStatus";
import BookingSummary from "../../components/site/BookingSummary";

// Common Components
import NotFound from "../../components/common/NotFound";

// Admin Components
import Admin from "../../components/admin/Admin";
import AdminHome from "../../components/admin/Home";
import ManageServices from "../../components/admin/ManageServices";
import ManageProfile from "../../components/admin/ManageProfile";
import UsersDetails from "../../components/admin/UsersDetails";
import Booking from "../../components/admin/Booking";
import ManageCourt from "../../components/admin/ManageCourt";
import ManageHours from "../../components/admin/ManageHours";
import ManageSports from "../../components/admin/ManageSports";

// User Components
import Profile from "../../components/user/Profile";
import MyBookings from "../../components/user/MyBookings";
import EditProfile from "../../components/user/EditProfile";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Site />}>
          <Route path="" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/courts" element={<Courts />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          {/* Turf Details */}
          <Route path="/turf-details/:id" element={<TurfDetails />} />
          <Route path="/booking-form" element={<BookingForm />} />
          <Route path="/new-user" element={<NewUser />} />
          <Route path="/verify-user" element={<VerifyUser />} />
          <Route path="/booking-summary" element={<BookingSummary />} />
          <Route path="/booking-status" element={<BookingStatus />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="" element={<AdminHome />} />
          <Route path="/admin/admin-dashboard" element={<AdminHome />} />
          <Route path="/admin/bookings" element={<Booking />} />
          <Route path="/admin/manage-courts" element={<ManageCourt />} />
          <Route path="/admin/manage-hours" element={<ManageHours />} />
          <Route path="/admin/manage-sports" element={<ManageSports />} />
          <Route path="/admin/manage-profile" element={<ManageProfile />} />
          <Route path="/admin/manage-services" element={<ManageServices />} />
          <Route path="/admin/user-details" element={<UsersDetails />} />
        </Route>
        {/* User Profile routers */}
        <Route path="/user" element={<Profile />}>
          <Route path="/user/booking" element={<MyBookings />} />
          <Route path="/user/edit-profile" element={<EditProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
