import React from 'react';

export default function ServiceCards({ sData, setSelectedService }) {
  return (
    <div>
      <div className="row g-4">
        {sData.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="single-post">
              <div className="post-thumbnail">
                <a href="/"><img src={item.imgPath} alt={item.stitle} /></a>
              </div>
              <div className="news-cnt">
                <h3><a href="/">{item.stitle}</a></h3>
                <div className="button--wrap button--wrap-two">
                  <button
                    className="eg-btn btn--primary golf-btn mx-auto"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#serviceModal"
                    style={{ zIndex: 'auto' }}
                    onClick={() => setSelectedService(item)} // Ensure correct service is selected
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
