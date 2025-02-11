import React from 'react';

export default function ServicesModal({ service }) {
  if (!service) return null; // Prevents errors if service is not selected

  return (
    <div>
      <div className="modal fade" id="serviceModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">{service?.stitle || "Service Details"}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body p-0">
              <div className="single-information">
                <div className="row">
                  <img src={service?.imgPath || "/default-image.png"} alt={service?.stitle || "Service"} className="img-fluid" />
                  <h5 className="mt-4">{service?.stitle || "Service Name"}</h5>
                  <p>{service?.descr || "Description not available."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
