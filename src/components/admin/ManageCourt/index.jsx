import React, { useEffect, useState } from 'react';
import { deleteCourt, getCourts, updateCourtStatus } from '../../../services/ApiServices';
import ManageCourts from '../../modals/ManageCourt';
import { Link } from 'react-router-dom';
import ToastPopup from '../../modals/ToastPopup';
// Confirm Dialog Start
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { courtDeleteSuccess, courtStatusUpdateSuccess, toastTimeStamp } from '../../../constants/ResponseConstants';
import { strHTML } from '../../../services/renderHtml';
// Confirm Dialog End

export default function ManageCourt() {

  const [Courts, setCourts] = useState([]);

  // Toast State Start
  const [showToast, setShowToast] = useState(false);
  const [tMessage, setTMessage] = useState();
  const [tVariant, setTVariant] = useState();
  // Toast State End

  // Modal Members & Functions Start
  const [show, setShow] = useState(false);
  const [mFor, setMFor] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (m) => {
    setShow(true);
    setMFor(m);
  }
  // Modal Members & Functions End

  useEffect(() => {
    getAllCourts();
  }, [show])

  //Manage Court Enable/Disable Status Start
  const handleStatus = async (is_active, name, id) => {
    const data = { is_active: is_active ? 0 : 1 };
    const response = await updateCourtStatus(data, id).catch(console.error);
    // Toast Start
    setShowToast(true);
    if (response.message === courtStatusUpdateSuccess) {
      // setTMessage(response.message + ' <b>' + name + '</b> Court Status is <b>' + (is_active ? 'Disabled' : 'Enabled') + '</b>.');
      setTMessage('<b>' + name + '</b> Court Status is <b>' + (is_active ? 'Disabled' : 'Enabled') + '</b>.');
      setTVariant(is_active ? 'danger' : 'success');
    } else {
      setTMessage(response.message);
      setTVariant('danger');
    }
    setTimeout(() => setShowToast(false), toastTimeStamp);
    // Toast End
    getAllCourts();
  };
  //Manage Court Enable/Disable Status End

  //Manage Court Enable/Disable Status Start
  const handleDelete = (id, name) => {
    confirmAlert({
      title: strHTML(`<h3 className='text-one'>Confirm to delete</h3>`),
      message: strHTML(`Are you sure do you want to delete <span style='font-weight: bold; color: red;'>${name}</span> court.`),
      buttons: [
        {
          label: 'Yes', onClick: async () => {
            const response = await deleteCourt(id).catch(console.error);
            getAllCourts();
            // Toast Start
            setShowToast(true);
            if (response.message === courtDeleteSuccess) {
              setTMessage('<b>' + name + '</b> ' + response.message);
              setTVariant('success');
            } else {
              setTMessage(response.message);
              setTVariant('danger');
            }
            setTimeout(() => setShowToast(false), toastTimeStamp);
            // Toast End
          }
        },
        { label: 'No' }
      ]
    });
  };
  //Manage Court Enable/Disable Status End

  //Get All Court List Start
  const getAllCourts = async () => {
    const response = await getCourts().catch(console.error);
    setCourts(response.data);
  }
  //Get All Court List End

  return (
    <>
      {showToast && <ToastPopup isShow={showToast} variant={tVariant} message={tMessage} />}
      <div className='manage-court'>
        <div className="row">
          <div className="col-lg-9">
            <h4>Manage Courts</h4>
          </div>
          <div className="col-lg-3">
            {/* Add New Court Button */}
            <div className="button--wrap button--wrap-two mt-0">
              <button type="button" className="eg-btn btn--primary golf-btn mx-auto py-2 px-3" onClick={() => handleShow('Add')}>
                <i className="fas fa-plus ms-0 me-2"></i>Add New</button>
            </div>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-secondary-subtle table-striped mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>Court Name</th>
                <th>Open Time</th>
                <th>Close Time</th>
                <th>Enable/Disable</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Courts.map((item, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{item.court_name}</td>
                  <td>{item.open_time}</td>
                  <td>{item.close_time}</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input bg-success border-success"
                        type="checkbox"
                        role="switch"
                        defaultChecked={item.is_active === 1 ? true : false}
                        onClick={() => handleStatus((item.is_active === 1 ? true : false), item.court_name, item.id)}
                      />
                    </div>
                  </td>
                  <td>
                    <Link className="icon-edit me-0" onClick={() => handleShow(item)} >
                      <i className="fas fa-pencil-alt"></i>
                    </Link>
                    <Link className="icon-delete" onClick={() => handleDelete(item.id, item.court_name)} >
                      <i className="fas fa-trash-alt"></i>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {show && <ManageCourts show={show} handleClose={handleClose} mFor={mFor} />}
      </div >
    </>
  )
}
