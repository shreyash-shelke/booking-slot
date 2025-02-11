import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { getAdmin, updateAdmin } from '../../../services/ApiServices';
import AdminResetPass from '../../modals/AdminResetPass'
import { adminProfileUpdateSuccess, toastTimeStamp } from '../../../constants/ResponseConstants';
import ToastPopup from '../../modals/ToastPopup';

export default function ManageProfile() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Toast State Start
  const [showToast, setShowToast] = useState(false);
  const [tMessage, setTMessage] = useState();
  const [tVariant, setTVariant] = useState();
  // Toast State End

  useEffect(() => {
    getAdminData();
  }, [])

  // Modal Members & Functions Start
  const [show, setShow] = useState(false);
  const [mFor, setMFor] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (m) => {
    setShow(true);
    setMFor(m);
  }
  // Modal Members & Functions End

  const getAdminData = async () => {
    const response = await getAdmin().catch(console.error);
    const formData = {
      'first_name': response.data[0].first_name,
      'last_name': response.data[0].last_name,
      'org_name': response.data[0].org_name,
      'contact_number': response.data[0].contact_number,
      'email_id': response.data[0].email_id,
      'address_line': response.data[0].address_line,
      'city': response.data[0].city,
      'district': response.data[0].district,
      'state': response.data[0].state,
      'pin_code': response.data[0].pin_code
    };
    formData && reset(formData);
  }

  const onSubmit = async (data) => {
    // const formData = new FormData();
    // formData.append('first_name', data.first_name);
    // formData.append('last_name', data.last_name);
    // formData.append('org_name', data.org_name);
    // formData.append('contact_number', data.contact_number);
    // formData.append('email_id', data.email_id);
    // formData.append('address_line', data.address_line);
    // formData.append('city', data.city);
    // formData.append('district', data.district);
    // formData.append('state', data.state);
    // formData.append('pin_code', data.pin_code);

    // Toast Start
    setShowToast(true);
    try {
      const response = await updateAdmin(1, data);
      setTMessage(response.message);
      setTVariant(response.message === adminProfileUpdateSuccess ? 'success' : 'danger');
    } catch (error) {
      setTMessage(error.message());
      setTVariant('danger');
    }
    setTimeout(() => setShowToast(false), toastTimeStamp);
    // Toast End
    getAdminData()
  }

  return (
    <div>
      {showToast && <ToastPopup isShow={showToast} variant={tVariant} message={tMessage} />}
      <div className="office-information">
        <div className="contact-form admin-form">
          <div className="user-img text-center mb-4">
            <img src="/assets/img/logo2.png" alt="" />
            {/* <p><i className="fas fa-pencil-alt"></i></p> */}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-6 mb-3">
                <input type="text" placeholder="First Name" {...register("first_name")} />
              </div>
              <div className="col-lg-6 mb-3">
                <input type="text" placeholder="Last Name" {...register('last_name')} />
              </div>
              <div className="col-lg-12 mb-3">
                <input type="text" className='mb-0' placeholder="Organization Name" {...register('org_name', { required: true })} />
                {errors.org_name && <span className='text-danger fw-bold'>Organisation name is required</span>}
              </div>
              <div className="col-lg-6 mb-3">
                <input type="text" className='mb-0' placeholder="+91 000 000 0000" {...register('contact_number', { required: true })} />
                {errors.contact_number && <span className='text-danger fw-bold'>Contact Number is required</span>}
              </div>
              <div className="col-lg-6 mb-3">
                <input type="email" placeholder="admin@email.com" {...register('email_id')} />
              </div>
              <div className="col-lg-9 mb-3">
                <input type="text" placeholder="Your Address" {...register('address_line')} />
              </div>
              <div className="col-lg-3 mb-3">
                <input type="text" placeholder="City" {...register('city')} />
              </div>
              <div className="col-lg-4 mb-3">
                <input type="text" placeholder="District" {...register('district')} />
              </div>
              <div className="col-lg-4 mb-3">
                <input type="text" placeholder="State" {...register('state')} />
              </div>
              <div className="col-lg-4 mb-3">
                <input type="text" className='mb-0' placeholder="Pincode" {...register('pin_code', { required: true })} />
                {errors.pincode && <span className='text-danger fw-bold'>Pin Code is required</span>}
              </div>
            </div>
            <div className="button--wrap">
              <button type="submit" className="eg-btn btn--primary golf-btn mx-auto">Save
                <i className="bi bi-arrow-right"></i></button>
            </div>
          </form> <hr />
          <div className="button--wrap">
            <button className="eg-btn btn--primary golf-btn mx-auto py-2 ps-4 pe-2" onClick={() => handleShow('admin')}>
              Reset Password <i className="bi bi-arrow-right"></i></button>
          </div>
        </div>

      </div>
      {show && <AdminResetPass show={show} handleClose={handleClose} mFor={mFor} />}
    </div>
  )
}
