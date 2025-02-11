import React from 'react'
import { Link } from 'react-router-dom';
import { MOBILE_ONE, MOBILE_TWO, EMAIL_ADDRESS, TURF_ADDRESS, WHATSAPP_LINK, INSTAGRAM_LINK, TWITTER_LINK, FACEBOOK_LINK } from '../../../constants/DataConstants';

export default function Footer() {
  return (
    <>
      <footer className='pt-4'>
        <div className="container">
          <div className="footer-top">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xl-8">
                <div className="footer-logo mb-2">
                  {/* <h2>BnB - BAT N BALL TURF</h2> */}
                  <a href="index.html"><img src="/assets/img/logo-light.jpg" alt='BnBTurf' className='rounded-3' /></a>
                  <p>Experience cricketing bliss with our exceptional turf services, featuring pristine pitches, modern amenities, and expert support htmlFor an unmatched game!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-middle py-2">
            <div className="row gy-5">
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget two">
                  <div className="social-media">
                    <h4>Find Here:</h4>
                    <ul className="social-icons">
                      <li><a href={WHATSAPP_LINK}><i className="fab fa-whatsapp"></i></a></li>
                      <li><a href={INSTAGRAM_LINK}><i className="fab fa-instagram"></i></a></li>
                      <li><a href={TWITTER_LINK}><i className="fab fa-twitter"></i></a></li>
                      <li><a href={FACEBOOK_LINK}><i className="fab fa-facebook-f"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="footer-widget two">
                  <h4>Services</h4>
                  <ul className="footer-menu">
                    <li><a href="facility.html">Snooker Table</a></li>
                    <li><a href="facility.html">Table Tennis</a></li>
                    <li><a href="facility.html">CCTV Surveillance</a></li>
                    <li><a href="facility.html">Drinking Water</a></li>
                    <li><a href="about.html">Changing Room</a></li>
                    <li><a href="membership.html">Waiting Area</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="footer-widget two">
                  <h4>Hours of Open</h4>
                  <ul className="office-time">
                    <li>Sunday – Saturday :</li>
                    <li>6:00 AM – 10:00 PM</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-5">
                <div className="footer-widget two">
                  <h4>Contacts</h4>
                  <div className="number">
                    <div className="num-icon">
                      <i><img src="/assets/img/icons/phone.svg" alt='BnBTurf' /></i>
                    </div>
                    <div className="phone">
                      <a href="tel:05661111985">{MOBILE_ONE}</a>
                      <a href="tel:06571111576">{MOBILE_TWO}</a>
                    </div>
                  </div>
                  <div className="office-mail">
                    <div className="mail-icon">
                      <i className="far fa-envelope"></i>
                    </div>
                    <div className="email">
                      <a href="tell:info@example.com"><span className="__cf_email__"
                        data-cfemail="f69f989099b6938e979b869a93d895999b">{EMAIL_ADDRESS}</span></a>
                      {/* <a href="tell:info@support.com"><span className="__cf_email__"
                        data-cfemail="452c2b232a05363035352a37316b262a28">[email&#160;protected]</span></a> */}
                    </div>
                  </div>
                  <div className="address">
  <div className="address-icon">
    <a href="https://www.google.com/maps?q=TURF_ADDRESS" target="_blank" rel="noopener noreferrer">
      <i className="fas fa-map-marker-alt"></i>
    </a>
  </div>
  <p>{TURF_ADDRESS}</p>
</div>

                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
  <div className="row align-items-center">
    <div className="col-12 col-md-4 col-lg-4 col-xl-5">
      <div className="copy-txt two">
      <span>
  Copyright @2025 <b>BnB - BAT N BALL TURF</b> | <b> Design By </b >
  <a 
    href="https://atjoin.in/" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={{ color: "orange", textDecoration: "underline" }}
  >
    ATJOIN PVT. LTD.
  </a>
</span>

      </div>
            </div>
              <div className="col-12 col-md-8 col-lg-8 col-xl-7">
                <ul className="footer-bottom-menu two">
                  <li><Link to={'/'}>Privacy Policy</Link></li>
                  <li><Link to={'/'}>Terms of Use</Link></li>
                  <li><Link to={'/'}>Support Policy</Link></li>
                  <li><Link to={'/'}>Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
