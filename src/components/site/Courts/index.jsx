import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../../common/BreadCrumb";
import { Link } from "react-router-dom";
import { getCourts } from "../../../services/ApiServices";
import Loader from "../../../services/Loader";
import { IMAGE_BASE_URL } from "../../../constants/DataConstants";

export default function Courts() {
  useEffect(() => {
    getFilteredCourts();
  }, []);
  const [isLoading, setIsLoading] = useState(false);
  const [courts, setCourts] = useState([]);

  const getFilteredCourts = async () => {
    try {
      setIsLoading(true);
      const response = await getCourts(2);
      setCourts(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      {isLoading && <Loader />}
      <BreadCrumb name="Courts" />
      <div className="latest-blog grid sec-mar py-5 mt-0">
        <div className="container">
          <div className="row g-4">
            {courts &&
              courts.map((item, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="single-post">
                    <div className="post-thumbnail">
                      <Link to={"/turf-details/" + item.id}>
                        <img src={IMAGE_BASE_URL + item.image_path.substring(7)} alt={item.court_name} className="img-responsive" />
                      </Link>
                    </div>
                    <div className="news-cnt">
                      <h3>
                        <Link to={"/turf-details/" + item.id}>
                          {item.court_name}
                        </Link>
                      </h3>
                      <span>Turf Location</span>
                      <div className="view-btn">
                        <Link to={"/turf-details/" + item.id}>
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* <div className="pagaination">
            <ul className="paginate">
              <li><Link to={'/'}><i className="fas fa-angle-double-left"></i></a></li>
              <li className="active"><Link to={'/'}>1</a></li>
              <li><Link to={'/'}>2</a></li>
              <li><Link to={'/'}>3</a></li>
              <li><Link to={'/'}><i className="fas fa-angle-double-right"></i></a></li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
}
