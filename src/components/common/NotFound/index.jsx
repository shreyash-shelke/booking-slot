import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="error-area sec-mar">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="error-content">
              <img src="/assets/img/error.png" alt='BnBTurf' />
              <h1>There’s nothing here</h1>
              <p>The page you are looking htmlFor may have been renamed or does nost exist in this server you will be
                redirected to Home shortly.</p>
              <div className="button--wrap">
                <Link className="eg-btn btn--primary golf-btn mx-auto" to='/'>Back To Home <i
                  className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound