import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP, createAccount } from "../../../services/ApiServices";
import Loader from "../../../services/Loader";
import { useForm } from "react-hook-form";
import { invalidContactOrOTP, toastTimeStamp } from "../../../constants/ResponseConstants";
import ToastPopup from '../../modals/ToastPopup';

export default function VerifyUser() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(30);
  const [showToast, setShowToast] = useState(false);
  const [tMessage, setTMessage] = useState("");
  const [tVariant, setTVariant] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Timer logic for OTP expiration
  useEffect(() => {
    window.scrollTo(0, 0);
    setMinutes(0);
    setSeconds(30);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, seconds]);

  // Handle OTP verification
  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const savedData = JSON.parse(localStorage.getItem("contact_number"));
      const values = { contact_number: savedData.contact_number, inputOTP: data.otp };

      const response = await createAccount(values);

      if (response.message === invalidContactOrOTP) {
        // Show error toast
        setShowToast(true);
        setTMessage(`<b>${invalidContactOrOTP}</b>.`);
        setTVariant("danger");
        setTimeout(() => setShowToast(false), toastTimeStamp);
      } else {
        // Save user ID and navigate to booking summary
        localStorage.setItem("loggedInUser", response.data[0].id);
        navigate("/booking-summary");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setShowToast(true);
      setTMessage("An error occurred. Please try again.");
      setTVariant("danger");
      setTimeout(() => setShowToast(false), toastTimeStamp);
    } finally {
      setIsLoading(false);
    }
  };

  // Handle OTP resend
  const resendOtp = async () => {
    try {
      const data = JSON.parse(localStorage.getItem("contact_number"));
      setIsLoading(true);
      await sendOTP(data);
      setMinutes(0);
      setSeconds(30);

      // Show success toast
      setShowToast(true);
      setTMessage("OTP resent successfully!");
      setTVariant("success");
      setTimeout(() => setShowToast(false), toastTimeStamp);
    } catch (error) {
      console.error("Error resending OTP:", error);
      setShowToast(true);
      setTMessage("Failed to resend OTP. Please try again.");
      setTVariant("danger");
      setTimeout(() => setShowToast(false), toastTimeStamp);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      {showToast && <ToastPopup isShow={showToast} variant={tVariant} message={tMessage} />}

      <div className="play-and-membership mt-3">
        <div className="container-fluid g-0">
          <div className="facilities-wrapper">
            <div className="facility-right two new-user-form">
              <div className="membership-form two">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="title white two mt-5">
                      <h2>Verify OTP</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="mb-0"
                            placeholder="Enter OTP"
                            {...register("otp", { required: "OTP is required." })}
                          />
                          {errors.otp && (
                            <span className="text-danger">{errors.otp.message}</span>
                          )}
                        </div>

                        <div className="col-md-12 mt-3 text-white">
                          {seconds > 0 || minutes > 0 ? (
                            <span>
                              Time Remaining:{" "}
                              {minutes < 10 ? `0${minutes}` : minutes}:
                              {seconds < 10 ? `0${seconds}` : seconds}
                            </span>
                          ) : (
                            <span className="d-flex">
                              Didn't receive code?{" "}
                              <p
                                role="button"
                                className="mb-0 fw-bold text-light ms-2"
                                onClick={resendOtp}
                              >
                                Resend OTP
                              </p>
                            </span>
                          )}
                        </div>

                        <div className="col-12">
                          <div className="button--wrap button--wrap-two mt-3 me-3">
                            <button
                              className="eg-btn btn--primary golf-btn mx-auto"
                              type="submit"
                              style={{ zIndex: "auto" }}
                            >
                              Verify OTP
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="col-lg-5">
                    <img
                      src="assets/img/new-user-form.png"
                      className="img-fluid"
                      alt="Verify OTP"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}