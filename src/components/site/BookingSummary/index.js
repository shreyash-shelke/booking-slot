import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getSingleCourt, getSingleSport, getSingleUsers, phonePePayment } from "../../../services/ApiServices";
import { SHA256 } from "crypto-js";
import Loader from "../../../services/Loader";

export default function BookingSummary() {

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState([]);
  const [court, setCourt] = useState([]);
  const [sport, setSport] = useState([]);

  const { baseTotalPrice, finalTotalPrice, court_id, sport_id, booking_date, start_time, end_time } = JSON.parse(localStorage.getItem('BookingDetails'));
  const id = JSON.parse(localStorage.getItem('loggedInUser'));

  useEffect(() => {
    loadData();
    (finalTotalPrice === 0 && baseTotalPrice === 0) && navigate('/booking-form');
  }, []);

  const loadData = async () => {
    setIsLoading(true);
    const userData = await getSingleUsers(id).catch(console.error);
    setUser(userData.data);
    const courtData = await getSingleCourt(court_id).catch(console.error);
    setCourt(courtData.data);
    const sportData = await getSingleSport(sport_id).catch(console.error);
    setSport(sportData.data);
    setIsLoading(false);
  };

  const onSubmit = () => {
    let data = {
      PaymentMode: "Online",
      UserId: id,
      OtherCharges: 0,
      NetTotal: finalTotalPrice * 100,
      OrderStatus: "Order Confirmed",
      Contact: user.contact_number,
      FName: user.first_name || 'Not Available',
      LName: user.last_name || 'Not Available',
      Email: user.email_id || 'bnbturf@gmail.com',
      MerchantTransactionId: Math.random().toString(36).slice(2).toUpperCase()
    };
    payNow(data);
    console.log("🚀 ~ file: index.js:47 ~ onSubmit ~ data:", data)
  };

  const payNow = async (details) => {
    setIsLoading(true);
    var saltKey = "0038a2ff-6756-4b1b-882d-6bac32987fbf";
    var data = {
      'merchantId': "URUVELAONLINE",
      'merchantTransactionId': details.MerchantTransactionId,
      'merchantUserId': details.Email,
      'amount': details.NetTotal,
      'redirectUrl': window.location.origin + "/booking-status",
      'redirectMode': "REDIRECT",
      'callbackUrl': window.location.origin + "/booking-status",
      'mobileNumber': details.Contact,
      'paymentInstrument': { type: "PAY_PAGE" }
    };

    const base64 = window.btoa(JSON.stringify(data));
    var saltIndex = 1;
    var string = base64 + "/pg/v1/pay" + saltKey;
    var sha256 = SHA256(string).toString();
    var xVerify = sha256 + "###" + saltIndex;
    localStorage.setItem("OnlineOrderDetails", JSON.stringify(details));
    localStorage.setItem("PaymentDetails", JSON.stringify(data));
    const payResponse = await phonePePayment(base64, xVerify).catch(console.error);
    window.location.href = payResponse.data.data.instrumentResponse.redirectInfo.url;
    localStorage.removeItem('BookingDetails');
    setIsLoading(false);
  };

  return (
    <div>
      {isLoading && <Loader />}
      <div className="play-and-membership">
        <div className="container-fluid g-0">
          <div className="facilities-wrapper container my-5 rounded-3 gap-5">
            <div className="facility-right two b-form card">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h3 className="mb-0">{court.court_name}</h3>
                  <h5 className="mb-0">{sport.name}</h5>
                </div>
                <div className="card-body">
                  <div className="row mb-2">
                    <div className="col-1">
                      <i className="fa fa-location-arrow"></i>
                    </div>
                    <div className="col-11">
                      <h6 className="ms-3 text-dark">Turf Address</h6>
                    </div>
                  </div>
                  <div className="row  mb-2">
                    <div className="col-1">
                      <i className="fa fa-calendar"></i>
                    </div>
                    <div className="col-11">
                      <h6 className="ms-3 text-dark">{booking_date}</h6>
                    </div>
                  </div>
                  <div className="row  mb-2">
                    <div className="col-1">
                      <i className="fa fa-money-bill"></i>
                    </div>
                    <div className="col-11">
                      <h6 className="ms-3 text-dark">₹ {finalTotalPrice}</h6>
                    </div>
                  </div>
                  <div className="row  mb-2">
                    <div className="col-1">
                      <i className="fa fa-clock"></i>
                    </div>
                    <div className="col-11">
                      <h6 className="ms-3 text-dark">{start_time} to {end_time}</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mt-5">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <span className="fw-bold text-dark">
                      Reschedule Policy :
                    </span>
                    <br />
                    Dolor eiusmod est est tempor id veniam dolore officia. Nisi
                    excepteur dolor sit ipsum quis adipisicing incididunt
                    occaecat aliquip ad. Id nostrud culpa tempor adipisicing ea
                    amet cupidatat.
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold text-dark">
                      Cancellation Policy :
                    </span>
                    <br />
                    Cillum occaecat sunt non dolor reprehenderit cupidatat.
                    Culpa qui irure aliqua sint. Ullamco mollit consectetur
                    laborum magna sit cillum consectetur mollit commodo dolor
                    ex.
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold text-dark">Club Policy :</span>
                    <br />
                    Sunt dolor cillum amet id enim ut in culpa. Ea occaecat aute
                    amet mollit sunt.
                  </li>
                  <li className="list-group-item">
                    <span className="fw-bold text-dark">
                      Terms of service :
                    </span>
                    <br />
                    By continuing, you agree to our{" "}
                    <a href="/" className="fw-bold">
                      terms of service.
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="facility-right two b-form text-light card">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h3 className="mb-0">Price Details</h3>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                      <span className="text-dark">Court Price :</span>
                      <div className="fw-bold h5">₹ {finalTotalPrice}</div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between">
                        <span className="text-dark">Convenience Fee :</span>
                        <div className="fw-bold h5">₹ 00.00</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-dark">Total Amount :</span>
                        <div className="fw-bold h5">₹ {finalTotalPrice}</div>
                      </div>
                    </li>
                    <li className="list-group-item">
                      <div className="d-flex justify-content-between h3">
                        <div>₹ {finalTotalPrice}</div>
                        <div>₹ 00.00</div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="text-dark">Advance Payable</span>
                        <div className="text-dark">To be paid at the venue</div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="card-footer py-3">
                  <div className="btn-block mb-sm-1 mb-md-0 d-flex justify-content-center">
                    <div className="membership-btn">
                      <Link onClick={() => onSubmit()} style={{ zIndex: "auto" }}>
                        <i className="fa fa-money-check"></i>
                        &nbsp; Proceed ₹ {finalTotalPrice}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <img
                  src="/assets/img/logo-light.jpeg"
                  alt="Logo"
                  className="mt-5 rounded-5 w-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
