import React from 'react'

function SignUp() {
  return (

    <div className="play-and-membership">
      <div className="container-fluid g-0">
        <div className="facilities-wrapper">
          <div className="facility-left two">
            <div className="facility-img two">
              <img src="/assets/img/play-and-membership.jpg" alt='BnBTurf' style={{ height: 512 }} />
            </div>
            <div className="feature two">
              <div className="row g-4">
                <div className="col-md-12">
                  <div className="single-feature py-5">
                    <i className="fa fa-lock fa-5x mb-4 text-light"></i>
                    <h2 className='text-light'>Sign Up</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="facility-right two">
            <div className="membership-form two">
              <div className="title white two mt-5">
                <h2>Sign Up Now!</h2>
              </div>
              <form action="#" method="post">
                <div className="row">
                  <div className='col-lg-6 form-group'>
                    <label className='text-light'>First Name</label>
                    <input type='text' placeholder='John' />
                  </div>
                  <div className='col-lg-6 form-group'>
                    <label className='text-light'>Last Name</label>
                    <input type='text' placeholder='Doe' />
                  </div>
                  <div className="col-12">
                    <div className='form-group'>
                      <label className='text-light'>Contact Number</label>
                      <input type='tel' placeholder='+91 000 000 0000' />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="button--wrap button--wrap-two mt-0">
                      <button className="eg-btn btn--primary golf-btn mx-auto" type="submit"><a href="confirm-booking.html" className="text-light">Sign In</a></button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp