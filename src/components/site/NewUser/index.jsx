import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../../../services/ApiServices";
import Loader from "../../../services/Loader";
import { useForm } from "react-hook-form";

export default function NewUser() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Validate mobile number
      if (!/^\d{10}$/.test(data.contact_number)) {
        setErrorMessage("Please enter a valid 10-digit mobile number.");
        return;
      }

      setIsLoading(true);
      setErrorMessage("");
      setSuccessMessage("");

      // Save contact number to localStorage
      localStorage.setItem("contact_number", JSON.stringify(data));

      // Send OTP
      const response = await sendOTP(data);
      console.log("🚀 ~ OTP response:", response);

      if (response.status === 200) {
        setSuccessMessage("OTP sent successfully!");
        setTimeout(() => {
          navigate("/verify-user");
        }, 2000); // Redirect after 2 seconds
      } else {
        setErrorMessage("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      <div className="play-and-membership mt-3">
        <div className="container-fluid g-0">
          <div className="facilities-wrapper">
            <div className="facility-right two new-user-form">
              <div className="membership-form two">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="title white two mt-5">
                      <h2>You Are Just One Step Away!</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-md-12">
                          <input
                            type="text"
                            className="mb-0"
                            placeholder="Enter Your Mobile Number"
                            {...register("contact_number", {
                              required: "Mobile number is required.",
                              pattern: {
                                value: /^\d{10}$/,
                                message: "Please enter a valid 10-digit mobile number.",
                              },
                            })}
                          />
                          {errors.contact_number && (
                            <span className="text-danger">
                              {errors.contact_number.message}
                            </span>
                          )}
                        </div>
                        <div className="col-12">
                          <div className="button--wrap button--wrap-two mt-3">
                            <button
                              className="eg-btn btn--primary golf-btn mx-auto"
                              type="submit"
                              style={{ zIndex: "auto" }}
                            >
                              Send OTP
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>

                    {/* Display success/error messages */}
                    {successMessage && (
                      <div className="alert alert-success mt-3">
                        {successMessage}
                      </div>
                    )}
                    {errorMessage && (
                      <div className="alert alert-danger mt-3">
                        {errorMessage}
                      </div>
                    )}
                  </div>
                  <div className="col-lg-5">
                    <img
                      src="assets/img/new-user-form.png"
                      className="img-fluid"
                      alt="New User"
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