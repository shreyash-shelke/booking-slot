import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { getBookings } from '../../../services/ApiServices';

function AddCourt(props) {


  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getAllBookings();
  }, []);

  const getAllBookings = async () => {
    const filterData = { CourtID: 0, DateFrom: '2001-01-01', DateTo: '2099-01-01', UserID: props.mFor };
    const response = await getBookings(filterData).catch(console.error);
    setBookings(response.data);
  }

  return (
    <Modal show={props.show} onHide={props.handleClose} backdrop="static" keyboard={false} fullscreen={true}>
      <Modal.Header closeButton><Modal.Title>Booking of <span className='text-warning'>{bookings.slice(0, 1).map((obj) => (obj.user_name))}</span></Modal.Title></Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-12">
            <div className="table-responsive">
              <table className="table table-secondary-subtle table-striped mt-4">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Booking Date</th>
                    {/* <th>User Name</th> */}
                    <th>Court Name</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Duration</th>
                    <th>Payment ID</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    bookings && bookings.map((item, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{item.booking_date}</td>
                        {/* <td>{item.user_name}</td> */}
                        <td>{item.court_name}</td>
                        <td>{item.start_time}</td>
                        <td>{item.end_time}</td>
                        <td>{item.duration}</td>
                        <td>{item.payment_id}</td>
                        <td>{item.description}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default AddCourt