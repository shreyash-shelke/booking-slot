import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSlots } from "../../../services/ApiServices";

export default function ManageHours(props) {

  const [allSlots, setAllSlots] = useState([]);

  useEffect(() => {
    getAllSlots();
  }, [])

  // Get All Slots Start
  const getAllSlots = () => {
    try {
      const response = getSlots();
      setAllSlots(response);
    } catch (error) {
      console.log(error);
    }
  }
  // Get All Slots End

  return (
    <>
      <div className="manage-slots">
        <div className="row">
          <div className="col-lg-9">
            <h4>Manage Slots</h4>
          </div>
          <div className="col-lg-3">
            {/* Add New Slot Button */}
            <div className="button--wrap button--wrap-two mt-0">
              <button
                type="submit"
                className="eg-btn btn--primary golf-btn mx-auto py-2 px-3"
                data-bs-toggle="modal"
                data-bs-target="#timeSlotModal"
              >
                <i className="fas fa-plus ms-0 me-2"></i> Add New
              </button>
            </div>
          </div>
        </div>
        {/* Time Slot Table */}
        <div className="table-responsive">
          <table className="table table-success table-striped mt-4">
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope="col">Court</th>
                <th scope="col">Opening Time</th>
                <th scope="col">Closing Time</th>
                <th scope="col">Rate Per Hour</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {allSlots.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.court_name}</td>
                  <td>{item.SlotName}</td>
                  <td>{item.opnTime}</td>
                  <td>{item.clsTime}</td>
                  <td>₹ {item.rate}/-</td>
                  <td>
                    <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal"
                      data-bs-target="#timeSlotModal">
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button type="button" className="btn btn-danger"><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
              ))}


            </tbody>
          </table>
        </div>

        {/* Modal Code */}
        <div
          className="modal fade"
          id="timeSlotModal"
          tabIndex="-1"
          aria-labelledby="timeSlotModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="timeSlotModalLabel">
                  Time Slot Details
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0">
                <div className="single-information">
                  <form action="" className="w-100">
                    <div className="mb-3">
                      <select className="form-select" aria-label="Select Court">
                        <option selected>Select Court</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="rate" className="form-label">
                        Rate Per Hour
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="rate"
                        placeholder="Add Amount"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="openTime" className="form-label">
                        Add Opening Time
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="openTime"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="closeTime" className="form-label">
                        Add Closing Time
                      </label>
                      <input
                        type="time"
                        className="form-control"
                        id="closeTime"
                        placeholder=""
                      />
                    </div>

                    <div className="button--wrap button--wrap-two">
                      <button
                        className="eg-btn btn--primary golf-btn mx-auto"
                        type="submit"
                      >
                        <a>

                          <Link className="text-light" to="">
                            Save
                          </Link>
                        </a>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
