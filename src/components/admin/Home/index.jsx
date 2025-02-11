import React, { useEffect, useState } from 'react'
import { getCount } from '../../../services/ApiServices';

function Home() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    getAllCount();
  }, [])

  const getAllCount = async () => {
    const response = await getCount().catch(console.error);
    setCount(response.data);
  }

  return (
    <div>
      <div className="row">
        {count.map((item) => (
          <div className="col-lg-4">
            <div className="single-information admin">
              <div className="info-cnt">
                <h6>{item.title}</h6>
                <h4>{item.count}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home