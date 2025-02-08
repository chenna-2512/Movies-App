// import React from 'react'
// import Styles from '../Utility/styles.module.css';
import Strike from '../Utility/Strike';
import AboutUs from '../Utility/Aboutus';
import Contanct from '../Utility/Contanct';
import { useLocation, useParams } from 'react-router-dom';

const Card = () => {
  const location = useLocation();
  console.log(location);
  const item = location.state;
  // console.log(item,'ssa')
  const params = useParams();
  const {title} = params;
  console.log(params);
  const arr = ["2D, IMAX 2D","Telugu, Hindhi, Kannada, Tamil,Malayalam"];

  return (
    <>
      <header className="d-flex justify-content-center gap-4 p-2 fs-1">
        <Strike />
        <AboutUs />
        <Contanct />
      </header>

      <div className="m-0 p-0 bg-dark bg-gradient">
        <div className="d-flex gap-2 px-5 py-2">
          <img src={item.data.img} alt="" className="w-25 h-50 rounded-4 border border-light"/>
          <div className="d-flex flex-column justify-content-center">
            <h2 className="text-light fw-bold font-monospace">{item.data.title}</h2>
              <div className="d-flex align-items-center px-2 py-2 gap-3 rounded-4 bg-danger">
                <p><span className="fw-bold fs-1">&#9733;{item.data.reveiw}</span> {item.data.votes}</p>
                <button className="p-2 border border-light fw-bold rounded-2">Rate Now</button>
              </div>
              <div className="d-flex gap-1 m-1">
                {arr.map((elem, index) => (
                  <a key={index} href="" className="btn btn-light p-1">
                    {elem}
                  </a>
                ))}
              </div>

              <p className="text-white px-2 py-2">{location.state.data.time} . {location.state.data.jonare} . {location.state.data.a} . {location.state.data.releasedate}</p>
          </div>
          <div className="bg-dark px-4 py-4 rounded-4 w-50">
              <h2 className="text-light fs-1">About Movie</h2>
              <p className="text-light">{location.state.data.description}</p>
              <h2 className="text-light fs-1">Cast</h2>
              <p className="text-light">{location.state.data.cast}</p>
              </div>
          </div>
        </div>
    </>
  )
}

export default Card
