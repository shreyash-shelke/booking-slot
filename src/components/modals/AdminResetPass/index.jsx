import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { updateAdminPass } from '../../../services/ApiServices';
import { adminPasswordUpdateSuccess, toastTimeStamp } from '../../../constants/ResponseConstants';
import ToastPopup from '../ToastPopup';

function AdminResetPass(props) {

  const { register, handleSubmit, formState: { errors } } = useForm();

  // Toast State Start
  const [showToast, setShowToast] = useState(false);
  const [tMessage, setTMessage] = useState();
  const [tVariant, setTVariant] = useState();
  // Toast State End

  const onSubmit = async (data) => {
    // const { current_password, new_password, confirm_password } = data;
    // const formData = new FormData();
    // formData.append('current_password', current_password);
    // formData.append('new_password', new_password);
    // formData.append('confirm_password', confirm_password);

    // Toast Start
    setShowToast(true);
    try {
      const response = await updateAdminPass(1, data);
      setTMessage(response.message);
      setTVariant(response.message === adminPasswordUpdateSuccess ? 'success' : 'danger');
    } catch (error) {
      setTMessage(error);
      setTVariant('danger');
    }
    setTimeout(() => setShowToast(false), toastTimeStamp);
    // Toast End
  };

  return (
    <>
      {showToast && <ToastPopup isShow={showToast} variant={tVariant} message={tMessage} />}
      <Modal show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Update Court</Modal.Title></Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="col-lg-12 mb-3">
                <label className="form-label">Current Password</label>
                <input type="text" className="form-control" placeholder="Current Password" {...register('current_password', { required: true })} />
                {errors.current_password && <span className='text-danger fw-bold'>Current password is required</span>}
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">New Password</label>
                <input type="text" className="form-control" placeholder="New Password" {...register('new_password', { required: true })} />
                {errors.new_password && <span className='text-danger fw-bold'>New password is required</span>}
              </div>
              <div className="col-lg-12 mb-3">
                <label className="form-label">Confirm Password</label>
                <input type="password" className="form-control" placeholder="Confirm New Password" {...register('confirm_password', { required: true })} />
                {errors.confirm_password && <span className='text-danger fw-bold'>Confirm password is required</span>}
              </div>
            </div>

            <Modal.Footer>
              <div className="button--wrap">
                <button type="submit" className="eg-btn btn--primary golf-btn mx-auto p-2 px-3">Save <i className="bi bi-arrow-right"></i></button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default AdminResetPass