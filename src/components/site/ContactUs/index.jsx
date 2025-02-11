import React, { useState } from 'react';
import { BreadCrumb } from '../../common/BreadCrumb';
import { EMAIL_ADDRESS, MOBILE_ONE, MOBILE_TWO, TURF_ADDRESS } from '../../../constants/DataConstants';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <>
      <div>
        <BreadCrumb name='Contact Us' />
        <div className="contact-area sec-mar">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-5 col-xl-5">
                <div className="office-information">
                  <h2>Talk To With Our Best Consultant.</h2>
                  <div className="single-information">
                    <div className="bg-shape">
                      <img src="/assets/img/info-shape.png" alt='BnBTurf' />
                    </div>
                    <div className="icon">
                      <i><img src="/assets/img/icons/location.png" alt='BnBTurf' /></i>
                    </div>
                    <div className="info-cnt">
                      <h6>Location</h6>
                      <p>{TURF_ADDRESS}</p>
                    </div>
                  </div>
                  <div className="single-information">
                    <div className="bg-shape">
                      <img src="/assets/img/info-shape.png" alt='BnBTurf' />
                    </div>
                    <div className="icon">
                      <i><img src="/assets/img/icons/mobile.png" alt='BnBTurf' /></i>
                    </div>
                    <div className="info-cnt">
                      <h6>Phone</h6>
                      <a href={`tel:${MOBILE_ONE}`}>{MOBILE_ONE}</a>
                      <a href={`tel:${MOBILE_TWO}`}>{MOBILE_TWO}</a>
                    </div>
                  </div>
                  <div className="single-information">
                    <div className="bg-shape">
                      <img src="/assets/img/info-shape.png" alt='BnBTurf' />
                    </div>
                    <div className="icon">
                      <i><img src="/assets/img/icons/envelope.png" alt='BnBTurf' /></i>
                    </div>
                    <div className="info-cnt">
                      <h6>Email</h6>
                      <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-xl-7">
                <div className="contact-form">
                  <h3>Write A Message</h3>
                  <form onSubmit={handleSubmit}>
                    <input type="text" name="name" placeholder="Your Full Name" value={formData.name} onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                    <input type="text" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
                    <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                    <textarea name="message" cols="30" rows="10" placeholder="Write Message" value={formData.message} onChange={handleChange} required></textarea>
                    <div className="button--wrap">
                      <button type="submit" className="eg-btn btn--primary golf-btn mx-auto">
                        Submit Now <i className="bi bi-arrow-right"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="google-map">
          <div className="container-fluid g-0">
            <div className="map">
              <div className="row g-0">
                <div className="col">
                  <iframe title='Map'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d455500.20527088636!2d75.19959032023928!3d26.884594416311536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1691682694684!5m2!1sen!2sin"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
