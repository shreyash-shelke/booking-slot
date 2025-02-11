import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../common/BreadCrumb";
import { Link, useParams } from "react-router-dom";
import { getSingleCourt } from "../../../services/ApiServices";
import Loader from "../../../services/Loader";
import { IMAGE_BASE_URL } from "../../../constants/DataConstants";

export default function TurfDetails() {
  let { id } = useParams();
  useEffect(() => {
    loadSingleCourt();
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [court, setCourt] = useState([]);

  const loadSingleCourt = async () => {
    try {
      setIsLoading(true);
      const response = await getSingleCourt(id);
      setCourt(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const bookNow = () => {
    localStorage.setItem("courtId", id);
    console.log("booked");
  };

  const formattedTime = (time) => {
    if (time) {
      const [hours, minutes] = time.split(":");
      const timeObj = new Date();
      timeObj.setHours(hours);
      timeObj.setMinutes(minutes);
      const ampm = timeObj.getHours() >= 12 ? "PM" : "AM";
      let hours12 = timeObj.getHours() % 12;
      hours12 = hours12 ? hours12 : 12; // convert 0 to 12
      return `${hours12}:${minutes} ${ampm}`;
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      <BreadCrumb name="Turf Details" />
      <div className="latest-blog sec-mar">
        {court && (
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="blog-details">
                  <div className="thumbnail-preview">
                    <img src={court.image_path && IMAGE_BASE_URL + court.image_path.substring(7)} alt="" />
                  </div>

                  <div className="sidebar-widget mt-5">
                    <h4>Amenities</h4>
                    <div className="row">
                      <div className="col-4">
                        <i className="bi bi-check2-circle me-2"></i>{" "}
                        <span>First Aid</span>
                      </div>
                      <div className="col-4">
                        <i className="bi bi-check2-circle me-2"></i>{" "}
                        <span>Change Room</span>
                      </div>
                      <div className="col-4">
                        <i className="bi bi-check2-circle me-2"></i>{" "}
                        <span>Drinking Water</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-5">About Venue</h3>
                  <p>{court.description}</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="blog-sidebar">
                  <div className="button--wrap button--wrap-two mt-0">
                    <Link
                      onClick={bookNow}
                      to="/booking-form"
                      className="text-light eg-btn btn--primary golf-btn mx-auto"
                      style={{ zIndex: "auto" }}
                    >
                      {" "}
                      Book Now
                    </Link>
                  </div>
                  <div className="sidebar-widget mt-4">
                    <h4>Timings</h4>
                    <p>
                      {/* {formattedTime("13:30:45")} - {formattedTime("08:30:45")} */}
                      {formattedTime(court?.open_time)} -{" "}
                      {formattedTime(court?.close_time)}
                    </p>
                  </div>
                  <div className="sidebar-widget">
                    <h4>Location</h4>
                    <p>
                      No. 27, Museum Rd, Shanthala Nagar, Ashok Nagar,
                      Bengaluru, Karnataka
                    </p>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4131860316265!2d73.8019663739554!3d18.55540176811179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc1d596f0bb%3A0xe3530548a597ca1!2sATJOIN%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1690266054472!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="p-1 bg-white"
                    ></iframe>
                  </div>

                  <div className="sidebar-widget">
                    <div className="social-follow">
                      <h4>Follow On</h4>
                      <ul className="social-share">
                        <li>
                          <a href="https://www.facebook.com/">
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.twitter.com/">
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.instagram.com/">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/">
                            <i className="fab fa-linkedin"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="widget-banner">
                    <img src="assets/img/widget-banner.jpg" alt="" />
                    <div className="banner-inner">
                      <h2>Any Question Call Now.</h2>
                      <a href="tel:11231231234">+1-123-123-1234</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
