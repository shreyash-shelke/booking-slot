import React, { useEffect, useState } from 'react'
import { getUsers, updateUserStatus } from '../../../services/ApiServices'
import { Link } from 'react-router-dom';
import UserBookingDetails from '../../modals/UserBookingDetails';
import { toastTimeStamp, userStatusUpdateSuccess } from '../../../constants/ResponseConstants';
import ToastPopup from '../../modals/ToastPopup';

export default function UsersDetails() {

  const [allUsers, setAllUsers] = useState([]);

  // Toast State Start
  const [showToast, setShowToast] = useState(false);
  const [tMessage, setTMessage] = useState();
  const [tVariant, setTVariant] = useState();
  // Toast State End

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const response = await getUsers();
      setAllUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  //Manage Court Enable/Disable Status Start
  const handleStatus = async (is_active, id, fname, lname) => {
    const data = { is_active: is_active ? 0 : 1 };
    const response = await updateUserStatus(data, id).catch(console.error);
    // Toast Start
    setShowToast(true);
    if (response.message === userStatusUpdateSuccess) {
      setTMessage(`${response.message} Status of ${fname} ${lname} is <b>${is_active ? 'Disabled' : 'Enabled'}</b>.`);
      setTVariant(is_active ? 'danger' : 'success');
    } else {
      setTMessage(response.message);
      setTVariant('danger');
    }
    setTimeout(() => setShowToast(false), toastTimeStamp);
    // Toast End
    getAllUsers();
  };
  //Manage Court Enable/Disable Status End

  // Modal Members & Functions Start
  const [show, setShow] = useState(false);
  const [mFor, setMFor] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (m) => {
    setShow(true);
    setMFor(m);
  }
  // Modal Members & Functions End

  return (
    <div>
      {showToast && <ToastPopup isShow={showToast} variant={tVariant} message={tMessage} />}
      <div className="user-details">
        <h4>Users Details</h4>
        <div className="table-responsive">
          <table className="table table-secondary-subtle table-striped mt-4">
            <thead>
              <tr>
                <th>#</th>
                <th>User Name</th>
                <th>Mobile Number</th>
                <th>Email</th>
                <th>Active</th>
                <th>Bookings</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((item, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item.first_name + ' ' + item.last_name}</td>
                  <td>+91 {item.contact_number}</td>
                  <td>{item.email_id}</td>
                  <td>
                    <div className='d-flex gap-1'>
                      <div className="form-check form-switch">
                        <input
                          className="form-check-input bg-success border-success"
                          type="checkbox"
                          role="switch"
                          defaultChecked={item.is_active === 1 ? true : false}
                          onClick={() => handleStatus((item.is_active === 1 ? true : false), item.id, item.first_name, item.last_name)}
                        />
                      </div>
                      { <div>{item.is_active === 0 ? 'Inactive' : 'Active'}</div> }
                    </div>
                  </td>
                  <td><Link className="icon-edit me-0" onClick={() => handleShow(item.id)}><i className='fa fa-eye'></i></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {show && <UserBookingDetails show={show} handleClose={handleClose} mFor={mFor} />}
    </div>
  )
}
