import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { createService, deleteService, getServices, getSingleServices, updateService } from '../../../services/ApiServices';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../../../constants/DataConstants';
import { serviceAddedSuccess, serviceDeleteSuccess, serviceUpdatedSuccess, toastTimeStamp } from '../../../constants/ResponseConstants';
import ToastPopup from '../../modals/ToastPopup';
import { confirmAlert } from 'react-confirm-alert';
import { strHTML } from '../../../services/renderHtml';

export default function ManageServices() {

  const [allService, setAllService] = useState([]);
  const [isAddService, setIsAddService] = useState();
  const [disableBtn, setDisableBtn] = useState();

  // Toast State Start
  const [showToast, setShowToast] = useState(false);
  const [tMessage, setTMessage] = useState();
  const [tVariant, setTVariant] = useState();
  // Toast State End

  useEffect(() => {
    getAllServices();
  }, [])

  // Handle Edit Start
  const handleEdit = async (id) => {
    const singleService = await getSingleServices(id).catch(console.error);
    reset(singleService.data);
  }
  // Handle Edit End

  //Manage Court Enable/Disable Status Start
  const handleDelete = async (id, name) => {
    confirmAlert({
      title: strHTML('<h3>Confirm to delete</h3>'),
      message: strHTML(`Are you sure do you want to delete <span style='font-weight: bold; color: red;'>${name}</span> service.`),
      buttons: [
        {
          label: 'Yes', onClick: async () => {
            const response = await deleteService(id).catch(console.error);
            console.log(response.message);
            getAllServices();

            // Toast Start
            setShowToast(true);
            if (response.message === serviceDeleteSuccess) {
              setTMessage('<b>' + name + '</b>. ' + response.message);
              setTVariant('success');
            } else {
              setTMessage(response.message);
              setTVariant('danger');
            }
            setTimeout(() => setShowToast(false), toastTimeStamp);
            // Toast End}
          }
        },
        { label: 'No' }
      ]
    });
  };
  //Manage Court Enable/Disable Status End

  // Handle onSubmit Service Start
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async (data) => await (isAddService ? onAddService(data) : onUpdateService(data));
  // Handle onSubmit Service Start

  // Handle Add Service Start
  const onAddService = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('image_path', data.image_path[0], data.image_path[0].name);
    const response = await createService(formData).catch(console.error);
    // Toast Start
    setShowToast(true);
    if (response.message === serviceAddedSuccess) {
      setTMessage('<b>' + data.name + '</b>. ' + response.message);
      setTVariant('success');
      setIsAddService(false);
    } else {
      setTMessage(response.message);
      setTVariant('danger');
    }
    setTimeout(() => setShowToast(false), toastTimeStamp);
    // Toast End
    getAllServices();
  };
  // Handle Add Service End

  // Handle Update Service Start
  const onUpdateService = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('image_path', data.image_path[0], data.image_path[0].name);
    formData.append('_method', 'PUT');
    const response = await updateService(formData, data.id).catch(console.error);
    // Toast Start
    setShowToast(true);
    if (response.message === serviceUpdatedSuccess) {
      setTMessage('<b>' + data.name + '</b>. ' + response.message);
      setTVariant('success');
    } else {
      setTMessage(response.message);
      setTVariant('danger');
    }
    setTimeout(() => setShowToast(false), toastTimeStamp);
    // Toast End
    getAllServices();
  };
  // Handle Update Service End

  const getAllServices = async () => {
    const response = await getServices().catch(console.error);
    setAllService(response.data);
  }

  return (
    <>
      {showToast && <ToastPopup isShow={showToast} variant={tVariant} message={tMessage} />}
      <div className='manage-services'>
        <h4>Manage Services</h4>
        <div className="row">
          <div className="col-lg-7 col-md-12 border-end py-4">
            <div className="table-responsive">
              <table className="table table-secondary-subtle table-striped">
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope="col">Service Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allService.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.name}</td>
                      <td><img src={IMAGE_BASE_URL + item.image_path.substring(7)} alt="" /></td>
                      <td>
                        <Link className="icon-edit me-0" onClick={() => handleEdit(item.id)} >
                          <i className="fas fa-pencil-alt"></i>
                        </Link>
                        <Link className="icon-delete" onClick={() => handleDelete(item.id, item.name)} >
                          <i className="fas fa-trash-alt"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label htmlFor="serviceTitle" className="form-label">Service Name</label>
                <input className="form-control" onChange={() => setDisableBtn(false)} placeholder="Service Title" {...register("name", { required: true })} />
                {errors.name && <span className='text-danger small fw-bold'>* This field is required</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="serviceText" className="form-label">Service Description</label>
                <textarea className="form-control" onChange={() => setDisableBtn(false)} rows="3" placeholder="Service Descritption" {...register("description")}></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="serviceImg" className="form-label">Upload Image</label>
                <input className="form-control" type="file" accept='image/*' id="serviceImg" {...register("image_path")} />
              </div>
              <div className="row mt-4">
                <div className="col-4">
                  <div className="button--wrap">
                    <button type="submit" className="eg-btn btn--primary golf-btn mx-auto px-3 py-2" disabled={disableBtn}>Update</button>
                  </div>
                </div>
                <div className="col-8">
                  <div className="button--wrap">
                    <button type="submit" className="eg-btn btn--primary golf-btn mx-auto px-3 py-2" onClick={() => setIsAddService(true)}>Add New Service</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
