import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { toastTimeStamp } from '../../../constants/ResponseConstants';
import { strHTML } from '../../../services/renderHtml';

export default function ToastPopup(props) {

  const { variant, message, isShow } = props;

  useEffect(() => {
    setShow(isShow);
  }, [])

  const [show, setShow] = useState(false);

  return (
    <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 100 }}>
      <Toast onClose={() => setShow(false)} show={show} delay={toastTimeStamp} autohide bg={variant}>
        <Toast.Header>
          <img src="/assets/img/logo-light.jpg" className="rounded me-2" width='10%' alt="" />
          <strong className="me-auto">BnB Turf</strong>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        <Toast.Body className={(variant === 'success' || variant === 'danger') && 'text-white'}>{strHTML(message)}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}