import React from 'react'

export default function BookingDetails(props) {
  const bookingDetails = {
    amount: '1000',
    mode: 'UPI',
    tid: '93DJ2231ADD35672D',
    other: 'other'
  }
  return (
    <div>
      <div className="single-information">
        <div className="row w-100">
          <div className="col-lg-8">
            <div className="info-cnt b-info mb-lg-0 mb-2">
              <h6>{props.turfName}</h6>
              <p>{props.bookingDate} | Slot: {props.timeSlot}</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="button--wrap button--wrap-two mt-1">
              <button className="eg-btn btn--primary golf-btn mx-auto" type='button' data-bs-toggle="modal" data-bs-target="#exampleModal">View More</button>

            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Booking Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0">
              <div className="single-information">
                <div className="row w-100">
                  <div className="col-6">
                    <h6>Payment Made:</h6>
                    <p>₹ {bookingDetails.amount}/-</p>
                    <h6>Payment Mode:</h6>
                    <p>{bookingDetails.mode}</p>
                  </div>
                  <div className="col-6">
                    <h6>Transaction ID:</h6>
                    <p>{bookingDetails.tid}</p>
                    <h6>Other:</h6>
                    <p>{bookingDetails.other}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
