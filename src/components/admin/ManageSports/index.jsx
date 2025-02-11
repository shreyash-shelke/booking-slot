import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { createSport, deleteSport, getSports, getSingleSport, updateSport } from '../../../services/ApiServices';
import { Link } from 'react-router-dom';
import { sportAddedSuccess, sportDeleteSuccess, sportUpdatedSuccess, toastTimeStamp } from '../../../constants/ResponseConstants';
import ToastPopup from '../../modals/ToastPopup';
import { confirmAlert } from 'react-confirm-alert';
import { strHTML } from '../../../services/renderHtml';

export default function ManageSports() {

  const [allSports, setAllSports] = useState([]);
  const [isAddSport, setIsAddSport] = useState();
  const [disableBtn, setDisableBtn] = useState();

  // Toast State Start
  const [showToast, setShowToast] = useState(false);
  const [tMessage, setTMessage] = useState();
  const [tVariant, setTVariant] = useState();
  // Toast State End

  useEffect(() => {
    getAllSports();
  }, [])

  // Handle Edit Start
  const handleEdit = async (id) => {
    const singleService = await getSingleSport(id).catch(console.error);
    reset(singleService.data);
  }
  // Handle Edit End

  //Manage Court Enable/Disable Status Start
  const handleDelete = async (id, name) => {
    confirmAlert({
      title: strHTML('<h3>Confirm to delete</h3>'),
      message: strHTML(`Are you sure do you want to delete <span style='font-weight: bold; color: red;'>${name}</span> sport.`),
      buttons: [
        {
          label: 'Yes', onClick: async () => {
            const response = await deleteSport(id).catch(console.error);
            console.log(response.message);
            getAllSports();

            // Toast Start
            setShowToast(true);
            if (response.message === sportDeleteSuccess) {
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

  // Handle onSubmit Sport Start
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = async (data) => await (isAddSport ? onAddSport(data) : onUpdateSport(data));
  // Handle onSubmit Sport Start

  // Handle Add Sport Start
  const onAddSport = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    const response = await createSport(formData).catch(console.error);
    // Toast Start
    setShowToast(true);
    if (response.message === sportAddedSuccess) {
      setTMessage('<b>' + data.name + '</b>. ' + response.message);
      setTVariant('success');
      setIsAddSport(false);
    } else {
      setTMessage(response.message);
      setTVariant('danger');
    }
    setTimeout(() => setShowToast(false), toastTimeStamp);
    // Toast End
    getAllSports();
  };
  // Handle Add Sport End

  // Handle Update Sport Start
  const onUpdateSport = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('_method', 'PUT');
    const response = await updateSport(formData, data.id).catch(console.error);
    console.log("🚀 ~ file: index.jsx:99 ~ onUpdateSport ~ response:", response)
    // Toast Start
    setShowToast(true);
    if (response.message === sportUpdatedSuccess) {
      setTMessage('<b>' + data.name + '</b>. ' + response.message);
      setTVariant('success');
    } else {
      setTMessage(response.message);
      setTVariant('danger');
    }
    setTimeout(() => setShowToast(false), toastTimeStamp);
    // Toast End
    getAllSports();
  };
  // Handle Update Sport End

  const getAllSports = async () => {
    const response = await getSports().catch(console.error);
    setAllSports(response.data);
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
                    <th scope="col">Sport Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allSports.map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item.name}</td>
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
                <label htmlFor="serviceTitle" className="form-label">Sport Name</label>
                <input className="form-control" onChange={() => setDisableBtn(false)} placeholder="Sport Title" {...register("name", { required: true })} />
                {errors.name && <span className='text-danger small fw-bold'>* This field is required</span>}
              </div>
              {/* <div className="mb-3">
                <label htmlFor="serviceText" className="form-label">Sport Description</label>
                <textarea className="form-control" onChange={() => setDisableBtn(false)} rows="3" placeholder="Sport Descritption" {...register("description")}></textarea>
              </div> */}
              <div className="row mt-4">
                <div className="col-4">
                  <div className="button--wrap">
                    <button type="submit" className="eg-btn btn--primary golf-btn mx-auto px-3 py-2" disabled={disableBtn}>Update</button>
                  </div>
                </div>
                <div className="col-8">
                  <div className="button--wrap">
                    <button type="submit" className="eg-btn btn--primary golf-btn mx-auto px-3 py-2" onClick={() => setIsAddSport(true)}>Add New Sport</button>
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
