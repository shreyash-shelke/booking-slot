import React, { useEffect, useState } from 'react'
import { getBookings, getCourts, getUsers } from '../../../services/ApiServices';
import { useForm } from 'react-hook-form';

export default function Booking() {

  const [bookings, setBookings] = useState([]);
  const [courts, setCourts] = useState([]);
  const [users, setUsers] = useState([]);
  const { register, handleSubmit } = useForm();
  const defaultData = { CourtID: 0, DateFrom: '', DateTo: '', UserID: 0 };

  useEffect(() => {
    onSubmit(defaultData);
    getAllCourts();
    getAllUsers();
  }, []);

  const onSubmit = async (data) => {
    await getAllBookings(data);
  }

  const getAllBookings = async (data) => {
    const response = await getBookings(data).catch(console.error);
    setBookings(response.data);
  }

  const getAllCourts = async () => {
    const response = await getCourts().catch(console.error);
    setCourts(response.data);
  }

  const getAllUsers = async () => {
    const response = await getUsers().catch(console.error);
    setUsers(response.data);
  }

  return (
    <>
      <div className='booking-details'>
        <h4>Booking Details</h4>
        {/* <form>
          <div className='row'>
            <div className="row g-3">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <select className="form-select" {...register("CourtID", { required: false })} onChange={handleSubmit(onSubmit)}>
                  <option value={0}>Select Court</option>
                  {courts.map((item, i) => <option key={i} value={item.id}>{item.court_name}</option>)}
                </select>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <input type="date" className="form-control" {...register("DateFrom", { required: false })} onChange={handleSubmit(onSubmit)} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <input type="date" className="form-control" {...register("DateTo", { required: false })} onChange={handleSubmit(onSubmit)} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <select className="form-select" {...register("UserID", { required: false })} onChange={handleSubmit(onSubmit)}>
                  <option value={0}>Select User</option>
                  {users.map((item, i) => <option key={i} value={item.id}>{item.first_name + ' ' + item.last_name}</option>)}
                </select>
              </div>
            </div>
          </div>
        </form> */}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className="row g-1 align-items-center">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <select className="form-select" {...register("CourtID", { required: false })}>
                  <option value={0}>Select Court</option>
                  {courts.map((item, i) => <option key={i} value={item.id}>{item.court_name}</option>)}
                </select>
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <input type="date" className="form-control" {...register("DateFrom", { required: false })} />
              </div>
              <div className="col-lg-2 col-md-6 col-sm-12">
                <input type="date" className="form-control" {...register("DateTo", { required: false })} />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <select className="form-select" {...register("UserID", { required: false })}>
                  <option value={0}>Select User</option>
                  {users.map((item, i) => <option key={i} value={item.id}>{item.first_name + ' ' + item.last_name}</option>)}
                </select>
              </div>
              <div className="button--wrap button--wrap-two col-lg-2 col-md-6 col-sm-12 mt-0">
                <button type="submit" className="eg-btn btn--primary golf-btn mx-auto py-2">
                  <i className="fas fa-arrow-right ms-0 me-2"></i>Apply</button>
              </div>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-secondary-subtle table-striped mt-4">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Booking Date</th>
                    <th>User Name</th>
                    <th>Court Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Duration</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    bookings && bookings.map((item, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.booking_date}</td>
                        <td>{item.user_name}</td>
                        <td>{item.court_name}</td>
                        <td>{item.start_time}</td>
                        <td>{item.end_time}</td>
                        <td>{item.duration}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
