import React from 'react'
import { Link } from 'react-router-dom'

export default function BookingSuccess() {
  return (

    <div>
      <div className="facilities-wrapper container my-5 rounded-3 gap-5">
        <div className="facility-right two b-form card">
          <div className='card'>
            <div className="card-header d-flex justify-content-center">
              <img src='assets\img\icons\booking-success.png' alt='Success' className='w-25' />
            </div>
            <div className="card-body text-center">
              <div className='d-flex justify-content-center'>
                <i className='fa fa-check fs-4'></i>
                <h3 className="ms-3 text-dark">Awesome..!</h3>
              </div>
              <p className='fw-bold text-one'>Your booking has been confirmed.<br /> Check your email for detials.</p>
              <div className="btn-block mb-sm-1 mb-md-0 d-flex justify-content-center">
                <div className="membership-btn">
                  <Link to="/courts" style={{ 'zIndex': 'auto' }}><i className="fa fa-check"></i>
                    &nbsp; OK</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="facilities-wrapper container my-5 rounded-3 gap-5">
        <div className="facility-right two b-form card bg-danger">
          <div className='card'>
            <div className="card-header d-flex justify-content-center">
              <img src='assets\img\icons\booking-failed.png' alt='Success' className='w-25' />
            </div>
            <div className="card-body text-center">
              <div className='d-flex justify-content-center'>
                <i className='fa fa-close text-danger fs-4'></i>
                <h3 className="ms-3 text-dark">Booking Failed..!</h3>
              </div>
              <p className='fw-bold text-one'>Your booking has been canceled.<br /> Check your email for detials.</p>
              <div className="btn-block mb-sm-1 mb-md-0 d-flex justify-content-center">
                <div className="membership-btn">
                  <Link to="/courts" style={{ 'zIndex': 'auto' }} className='bg-danger'><i className="fa fa-close"></i>
                    &nbsp; OK</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}