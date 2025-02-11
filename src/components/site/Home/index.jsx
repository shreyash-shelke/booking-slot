import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import { FACEBOOK_LINK, INSTAGRAM_LINK, TWITTER_LINK, WHATSAPP_LINK } from '../../../constants/DataConstants';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the Laravel API
      // const response = await axios.post('http://127.0.0.1:8000/api\admin\membership', formData);
      const response = await axios.post('http://127.0.0.1:8000/api/admin/membership', formData);


      // Display success message
      alert(response.data.message);

      // Reset the form after successful submission
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
      });
      console.log(response);
        } catch (error) {
          console.error('Error submitting form:', error);
          alert(error.response?.data?.message || 'Failed to submit form. Please try again.');
      }
      
  };

  return (
    <>
      <div>
        {/* Hero Area */}
        <div className="hero-area two" style={{ zIndex: 'auto' }}>
          <div className="social-links mt-3">
            <div className="follow-us">
              <span>FOLLOW US</span>
              <ul className="follow-social">
                <li><a href={WHATSAPP_LINK}><i className="fab fa-whatsapp"></i></a></li>
                <li><a href={INSTAGRAM_LINK}><i className="fab fa-instagram"></i></a></li>
                <li><a href={TWITTER_LINK}><i className="fab fa-twitter"></i></a></li>
                <li><a href={FACEBOOK_LINK}><i className="fab fa-facebook-f"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="hero-wrapper">
            <div className="container">
              <div className="hero-content">
                <h2 className="hero-content-title">Welcome To Our <br /> <span className="letters">BnB TURF.</span></h2>
                <ul className="tags">
                  <li><Link to='/'>Tournament</Link></li>
                  <li><Link to='/'>Course</Link></li>
                  <li><Link to='/'>Training</Link></li>
                  <li><Link to='/'>Playground</Link></li>
                </ul>
                <p>Unleash your cricketing passion on our pristine turf. Experience the perfect pitch for unparalleled sporting thrills and unforgettable moments!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why We Are Section */}
        <div className="why-we-are">
          <div className="container z-n1">
            <div className="member-facilities two" style={{ zIndex: 'auto' }}>
              <div className="row justify-content-around">
                <div className="col-auto">
                  <div className="member-facility">
                    <div className="icon">
                      <img src="/assets/img/icons/facilityOrange-icon-1.svg" alt='BnBTurf' />
                    </div>
                    <a href="facility.html">Snooker Table</a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="member-facility">
                    <div className="icon">
                      <img src="/assets/img/icons/facilityOrange-icon-2.svg" alt='BnBTurf' />
                    </div>
                    <a href="facility.html">Table Tennis</a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="member-facility">
                    <div className="icon">
                      <img src="/assets/img/icons/facilityOrange-icon-3.svg" alt='BnBTurf' />
                    </div>
                    <a href="facility.html">Locker Room</a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="member-facility">
                    <div className="icon">
                      <img src="/assets/img/icons/facilityOrange-icon-4.svg" alt='BnBTurf' />
                    </div>
                    <a href="facility.html">CCTV Surveillance</a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="member-facility">
                    <div className="icon">
                      <img src="/assets/img/icons/facilityOrange-icon-5.svg" alt='BnBTurf' />
                    </div>
                    <a href="facility.html">Waiting Area</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 col-xl-6 or1">
                <div className="why-left">
                  <div className="title two">
                    <span>Why We Are</span>
                    <h2>We are here to bring the cricket near to you.</h2>
                  </div>
                  <div className="why-boxes">
                    <div className="why-box">
                      <div className="icon">
                        <img src="/assets/img/icons/why-icon-1.svg" alt='BnBTurf' />
                      </div>
                      <b>Analyze</b>
                    </div>
                    <div className="why-box">
                      <div className="icon">
                        <img src="/assets/img/icons/why-icon-2.svg" alt='BnBTurf' />
                      </div>
                      <b>Learn</b>
                    </div>
                    <div className="why-box">
                      <div className="icon">
                        <img src="/assets/img/icons/why-icon-3.svg" alt='BnBTurf' />
                      </div>
                      <b>Compete</b>
                    </div>
                  </div>
                  <p>Welcome to our amazing cricket turf, where cricket dreams come true! Surrounded by beautiful scenery, our well-kept turf offers a fantastic sports experience. Whether you're a pro or just love cricket, our top-notch pitches ensure fair play. We have modern facilities and great equipment for individual practice, team training, and exciting matches. Our friendly staff is here to help you have a fun time on the turf. Come join us for an awesome cricketing experience and enjoy playing on a perfect pitch that's all about passion for the game.</p>
                  <ul className="field-points">
                    <li><i className="bi bi-check2-circle"></i> Pristine Pitch Conditions.</li>
                    <li><i className="bi bi-check2-circle"></i> State-of-the-Art Facilities.</li>
                    <li><i className="bi bi-check2-circle"></i> Scenic Surroundings.</li>
                    <li><i className="bi bi-check2-circle"></i> Professional-Grade Equipment.</li>
                    <li><i className="bi bi-check2-circle"></i> Expert Staff Support.</li>
                    <li><i className="bi bi-check2-circle"></i> Unparalleled Sporting Experience.</li>
                  </ul>
                  <div className="button--wrap button--wrap-two">
                    <a className="eg-btn btn--primary golf-btn mx-auto" href="about.html">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-xl-6 or2">
                <div className="why-right">
                  <div className="learn-img">
                    <img src="/assets/img/why-right.jpg" alt='BnBTurf' />
                  </div>
                  <div className="why-right-boxes">
                    <div className="why-right-box">
                      <div className="icon">
                        <img src="/assets/img/icons/why-icon-1.svg" alt='BnBTurf' />
                      </div>
                      <b>Analyze</b>
                    </div>
                    <div className="why-right-box">
                      <b>Learn</b>
                      <div className="icon">
                        <img src="/assets/img/icons/why-icon-2.svg" alt='BnBTurf' />
                      </div>
                    </div>
                    <div className="why-right-box">
                      <div className="icon">
                        <img src="/assets/img/icons/why-icon-3.svg" alt='BnBTurf' />
                      </div>
                      <b>Compete</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About Area */}
        <div className="about-area two sec-mar">
          <div className="container">
            <div className="row gx-4">
              <div className="col-xl-6">
                <div className="about-left two">
                  <img src="/assets/img/cricket-turf-booking.jpg" alt='BnBTurf' />
                </div>
              </div>
              <div className="col-xl-6">
                <div className="about-right two">
                  <div className="title two">
                    <span>About Us</span>
                    <h2>The Perfect Pitch: Get to Know Our Turf</h2>
                  </div>
                  <p>Welcome to our premier cricket turf, where the love for the game meets unparalleled excellence. With a passion for cricket ingrained in our very soul, we have crafted a sporting haven for enthusiasts of all ages and skill levels. Our state-of-the-art facilities, meticulously maintained pitches, and scenic surroundings create the perfect ambiance for thrilling matches and memorable moments. Whether you're a seasoned cricketer looking to hone your skills or a group of friends seeking friendly competition, our dedicated staff is here to ensure an exceptional experience. Join us in celebrating the spirit of cricket and relish the joy of playing on our extraordinary turf.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Play and Membership Section */}
        <div className="play-and-membership">
          <div className="container-fluid g-0">
            <div className="facilities-wrapper">
              <div className="facility-left two">
                <div className="facility-img two">
                  <img src="/assets/img/play-and-membership.jpg" alt='BnBTurf' />
                </div>
                <div className="feature two">
                  <div className="row g-4">
                    <div className="title white two">
                      <span>Features</span>
                      <h2>Cricketing Paradise: Our Premier Ground!</h2>
                    </div>
                    <div className="col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i><img src="/assets/img/icons/feature-icon-white-1.png" alt='BnBTurf' /></i>
                        </div>
                        <span className="counter"></span> <b>Snooker Table</b>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i><img src="/assets/img/icons/feature-icon-white-2.png" alt='BnBTurf' /></i>
                        </div>
                        <span className="counter"></span> <b>Table Tennis</b>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i><img src="/assets/img/icons/feature-icon-white-3.png" alt='BnBTurf' /></i>
                        </div>
                        <span className="counter"></span> <b>Waiting Area</b>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="single-feature">
                        <div className="icon">
                          <i><img src="/assets/img/icons/feature-icon-white-4.png" alt='BnBTurf' /></i>
                        </div>
                        <span className="counter"></span> <b>Vehicle Parking</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="facility-right two">
                <div className="membership-form two">
                  <div className="title two white">
                    <span>Membership</span>
                    <h2>Come and be a member of our turf.</h2>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter Your Name..."
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter Your Phone..."
                          value={formData.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter Your Email..."
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="col-12">
                        <textarea
                          name="message"
                          cols="30"
                          rows="10"
                          placeholder="Type Message..."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                        <div className="button--wrap button--wrap-two">
                          <button className="eg-btn btn--primary golf-btn mx-auto" type="submit">Join Membership</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Layout Section */}
        <div className="course-layout sec-mar-top">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 or2">
                <div className="course-wrapper">
                  <div className="title two">
                    <span>Cricket Turf Layout</span>
                    <h2>Play Our Turf Feel Free</h2>
                  </div>
                  <p>Our cricket ground boasts a meticulously designed layout to ensure an exceptional sporting experience. Spanning across lush greenery, the field is vast, allowing for various formats of the game. The centrally positioned pitch is crafted with precision, meeting professional standards for bounce and turn. <br />
                    Surrounding the pitch is a well-maintained outfield, offering smooth running and excellent fielding opportunities. Strategically placed sight screens ensure optimal visibility for batsmen, and the boundary ropes mark the perimeter for thrilling sixes and fours. <br />
                    For the spectators, comfortable seating areas are arranged along with shaded spots to enjoy the matches. Additionally, our ground features modern amenities, including changing rooms, practice nets, and a pavilion to cater to players' needs. <br />
                    Whether you're an aspiring cricketer, a seasoned player, or a passionate fan, our thoughtfully laid-out cricket ground promises to enhance your love for the game and create unforgettable moments.</p>
                </div>
              </div>
              <div className="col-xl-6 or1">
                <div className="golf-field">
                  <img src="/assets/img/field.png" alt='BnBTurf' />
                  <span>Cricket Turf</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="testimonial sec-mar-top mb-5">
        <div className="container">
          <div className="row">
            <div className="title two text-center">
              <span>Client Say</span>
              <h2>Our Members Thinking About Us</h2>
            </div>
          </div>
          <div className="reviewer-slider">
            <div className="swiper reviewer" style={{ zIndex: 'auto' }}>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="reviewer-slide">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div className="reviewer-img">
                          <img src="/assets/img/reviewer-1.jpg" alt='BnBTurf' />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="reviewer-content">
                          <p>As a professional cricketer, I value top-notch facilities, and this turf delivered exactly that. The ground layout was superb, providing ample space for practice and match play. The outfield was smooth and fast, ideal for sharp fielding. The expertly maintained equipment added to the overall excellence. Truly an outstanding turf for serious players!</p>
                          <h4>Savannah Nguyen</h4>
                          <span>Executive CEO</span>
                          <div className="stars">
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="swiper-slide">
                  <div className="reviewer-slide">
                    <div className="row align-items-center">
                      <div className="col-md-4">
                        <div className="reviewer-img">
                          <img src="/assets/img/why-right.jpg" alt='BnBTurf' />
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="reviewer-content">
                          <p>I've played cricket at various venues, but this turf exceeded all my expectations. The pitch was impeccable, offering consistent bounce and grip. The surroundings were serene, creating a delightful playing atmosphere. The staff was friendly and accommodating, making our experience even better. Highly recommended for all cricket enthusiasts!</p>
                          <h4>Savannah Nguyen</h4>
                          <span>Executive CEO</span>
                          <div className="stars">
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                            <Link to={'/'}><i className="fas fa-star"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
