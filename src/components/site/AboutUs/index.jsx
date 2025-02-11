import React from 'react'
import { BreadCrumb } from '../../common/BreadCrumb';

export default function AboutUs() {
  return (
    <>
      <BreadCrumb name='About Us' />
      <div className="about-area sec-mar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="about-left">
                <div className="title">
                  <span style={{ 'zIndex': 'auto' }}>About Us</span>
                  <h2>What We are Offer About Our Golf Club.</h2>
                </div>
                <div className="special-message">
                  <div className="lqt">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <p>
                    Beyond boundaries and borders, cricket unites diverse cultures under the banner of a sport loved by all
                  </p>
                  <div className="rqt">
                    <i className="fas fa-quote-right"></i>
                  </div>

                </div>
                <p>
                  Welcome to our premier cricket turf, where the love htmlFor the game meets unparalleled excellence. With a passion htmlFor cricket ingrained in our very soul, we have crafted a sporting haven htmlFor enthusiasts of all ages and skill levels. Our state-of-the-art facilities, meticulously maintained pitches, and scenic surroundings create the perfect ambiance htmlFor thrilling matches and memorable moments. Whether you're a seasoned cricketer looking to hone your skills or a group of friends seeking friendly competition, our dedicated staff is here to ensure an exceptional experience. Join us in celebrating the spirit of cricket and relish the joy of playing on our extraordinary turf.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-6">
              <div className="about-right">
                <div className="right-top">
                  <img src="/assets/img/about-1.png" alt='About Us' />
                  <div className="shape">
                    <img src="/assets/img/shape.png" alt='About Us' />
                  </div>
                </div>
                <div className="right-video-play">
                  <img src="/assets/img/about-2.png" alt='About Us' />
                  {/* <div className="right-play-inner">
                    <a
                      className="popup-video"
                      href="https://www.youtube.com/watch?v=0O2aH4XLbto"
                    ><i className="fas fa-play"></i
                    ></a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="club-history sec-mar-bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="title text-center">
                <span style={{ 'zIndex': 'auto' }}>Club History</span>
                <h2>How to Lead Our Golf Club</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="history-timeline">
                <div className="single-history">
                  <span>2018</span>
                  <div className="hisoty-inner">
                    <div className="circl-wave"></div>
                    <h4>Create A Club</h4>
                    <p>
                      Sed vestibulum ex lectus, ac sollicitudin erat fringillane
                      at. Donec sollicitudin,oi mi nec posuere scelerisque ani
                      sapien massa maximus ipsum, varius vehicula lib.
                    </p>
                  </div>
                </div>
                <div className="single-history">
                  <span>2019</span>
                  <div className="hisoty-inner">
                    <div className="circl-wave"></div>
                    <h4>Open Academy</h4>
                    <p>
                      Sed vestibulum ex lectus, ac sollicitudin erat fringillane
                      at. Donec sollicitudin,oi mi nec posuere scelerisque ani
                      sapien massa maximus ipsum, varius vehicula lib.
                    </p>
                  </div>
                </div>
                <div className="single-history">
                  <span>2020</span>
                  <div className="hisoty-inner">
                    <div className="circl-wave"></div>
                    <h4>Professional member</h4>
                    <p>
                      Sed vestibulum ex lectus, ac sollicitudin erat fringillane
                      at. Donec sollicitudin,oi mi nec posuere scelerisque ani
                      sapien massa maximus ipsum, varius vehicula lib.
                    </p>
                  </div>
                </div>
                <div className="single-history">
                  <span>2021</span>
                  <div className="hisoty-inner">
                    <div className="circl-wave"></div>
                    <h4>Top Of The Country</h4>
                    <p>
                      Sed vestibulum ex lectus, ac sollicitudin erat fringillane
                      at. Donec sollicitudin,oi mi nec posuere scelerisque ani
                      sapien massa maximus ipsum, varius vehicula lib.
                    </p>
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
