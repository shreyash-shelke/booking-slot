import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { createCourt, updateCourt } from '../../../services/ApiServices';
import { courtAddedSuccess, courtUpdatedSuccess, toastTimeStamp } from '../../../constants/ResponseConstants';
import ToastPopup from '../ToastPopup';

function ManageCourts(props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  // Toast State Start
  const [showToast, setShowToast] = useState(false);
  const [tMessage, setTMessage] = useState();
  const [tVariant, setTVariant] = useState();
  // Toast State End

  useEffect(() => {
    if (props.mFor !== 'Add') {
      reset(props.mFor);
    }
  }, [])

  const onSubmit = async (data) => {
    const { open_time, close_time, court_name, description, image_path, is_active, rate_per_hour } = data;
    const formData = new FormData();
    formData.append('open_time', open_time);
    formData.append('close_time', close_time);
    formData.append('court_name', court_name);
    formData.append('description', description);
    if (typeof (image_path) !== 'string') {
      formData.append("image_path", image_path[0], image_path[0].name);
    }
    formData.append('is_active', is_active ? 1 : 0);
    formData.append('rate_per_hour', rate_per_hour);
    if (props.mFor !== 'Add') {
      formData.append('_method', 'PUT');
    }

    setShowToast(true);
    try {
      const response = await ((props.mFor === 'Add') ? createCourt(formData) : updateCourt(formData, props.mFor.id));
      // Toast Start
      setTMessage(response.message);
      setTVariant(response.message === courtUpdatedSuccess || response.message === courtAddedSuccess ? 'success' : 'danger');
      // Toast End
    } catch (error) {
      console.log("🚀 ~ file: index.jsx:48 ~ onSubmit ~ error:", error)
      setTMessage(error.response.data.court_name);
      setTVariant('danger');
    }
    setTimeout(() => setShowToast(false), toastTimeStamp);
  };

  return (
    <>
      {showToast && <ToastPopup isShow={showToast} variant={tVariant} message={tMessage} />}
      <Modal show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>{props.mFor === 'Add' ? 'Add' : 'Edit'} Court</Modal.Title></Modal.Header>
        <Modal.Body>
          <form className="w-100" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Court Name</label>
              <input type="text" className="form-control" placeholder="Court Name" {...register('court_name', { required: true }, { Touch: false })} />
              {errors.court_name && <span className='text-danger small fw-medium'>Court name is required</span>}
            </div>
            <div className='row'>
              <div className='col-lg-6 mb-3'>
                <label className="form-label">Edit Opening Time</label>
                <input type="time" className="form-control"  {...register('open_time', { required: true })} />
                {errors.open_time && <span className='text-danger small fw-medium'>Open time is required</span>}
              </div>
              <div className='col-lg-6 mb-3'>
                <label className="form-label">Edit Closing Time</label>
                <input type="time" className="form-control" {...register('close_time', { required: true })} />
                {errors.close_time && <span className='text-danger small fw-medium'>Close time is required</span>}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Court Details</label>
              <textarea type="text" className="form-control" placeholder="Court Description" {...register('description', { required: true })} />
              {errors.description && <span className='text-danger small fw-medium'>Description is required</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Rate Per Hour</label>
              <div className="input-group">
                <span className="input-group-text">₹</span>
                <input type="number" className="form-control" {...register('rate_per_hour', { required: true })} />
                <span className="input-group-text">.00</span>
              </div>
              {errors.description && <span className='text-danger small fw-medium'>Rate per hour is required</span>}
            </div>
            <div className="mb-3">
              <label className="form-label">Court Image</label>
              <input type="file" className="form-control" accept='image/*' {...register('image_path')} />
              {errors.image_path && <span className='text-danger small fw-medium'>Image is required</span>}
            </div>
            <div className="mb-3 form-check form-switch">
              <label className="form-label mb-0">Active</label>
              <input className="form-check-input bg-success border-success" type="checkbox" role="switch" {...register('is_active')} />
            </div>

            <Modal.Footer>
              <div className="button--wrap button--wrap-two mt-0" onClick={props.handleClose}>
                <button className="eg-btn btn--primary golf-btn mx-auto">
                  <Link className="text-light" to="">Close</Link>
                </button>
              </div>
              <div className="button--wrap button--wrap-two mt-0">
                <button className="eg-btn btn--primary golf-btn mx-auto" type="submit">
                  <span className="text-light">{props.mFor === 'Add' ? 'Add' : 'Save'}</span>
                </button>
              </div>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ManageCourts