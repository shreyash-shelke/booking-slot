import React from 'react'
import { Link } from 'react-router-dom';

export function BreadCrumb(props) {
  return (
    <div className="breadcrumb" style={{ 'zIndex': 'auto' }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-wrapper">
              <div className="breadcrumb-inner">
                <h1>{props.name}</h1>
                <span><Link to={'/'}>Home<i className="fas fa-angle-right"></i></Link>{props.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
