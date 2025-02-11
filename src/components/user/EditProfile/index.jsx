import React from 'react'

export default function EditProfile() {
  return (
    <div>
      <div className="office-information">
        <div className="contact-form edit-profile">
          <div className="user-img text-center mb-4">
            <img src="/assets/img/commentor-1.jpg" alt="" />
            <p><i className="fas fa-pencil-alt"></i></p>
          </div>
          <form action="#" method="post">
            <div className="row">
              <div className="col-lg-6">
                <input type="text" name="name" placeholder="Your First Name" />
              </div>
              <div className="col-lg-6">
                <input type="text" name="name" placeholder="Your Last Name" />
              </div>
              <div className="col-lg-6">
                <input type="text" name="phone" placeholder="+91 9876543210" disabled />
              </div>
              <div className="col-lg-6">
                <input type="email" name="email" placeholder="useremail@gmail.com" disabled />
              </div>

            </div>
            <div className="button--wrap">
              <button type="submit" className="eg-btn btn--primary golf-btn mx-auto">Save <i
                className="bi bi-arrow-right"></i></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
