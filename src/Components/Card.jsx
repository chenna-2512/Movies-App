import Strike from '../Utility/Header';
import { useLocation } from 'react-router-dom';

const Card = () => {
  const location = useLocation();
  const item = location.state;
  const arr = ["2D, IMAX 2D", "Telugu, Hindi, Kannada, Tamil, Malayalam"];

  return (
    <>
      <Strike />
      <div className="container-fluid bg-dark bg-gradient min-vh-100 py-4">
        <div className="row px-3">
          <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center">
            <img src={item.data.img} alt="Movie Poster" className="img-fluid rounded-4 border border-light w-100 h-auto" />
          </div>
          <div className="col-lg-4 col-md-6 col-12 d-flex flex-column justify-content-center text-center text-md-start mt-3 mt-md-0">
            <h2 className="text-light fw-bold font-monospace">{item.data.title}</h2>
            <div className="d-flex align-items-center px-3 py-2 gap-3 rounded-4 bg-danger justify-content-center justify-content-md-start">
              <p className="mb-0 text-light">
                <span className="fw-bold fs-3">&#9733; {item.data.reveiw}</span> {item.data.votes}
              </p>
              <button className="btn btn-light fw-bold rounded-2">Rate Now</button>
            </div>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mt-2">
              {arr.map((elem, index) => (
                <a key={index} className="btn btn-outline-light px-3 py-1">
                  {elem}
                </a>
              ))}
            </div>
            <p className="text-white mt-3">
              {item.data.time} • {item.data.jonare} • {item.data.a} • {item.data.releasedate}
            </p>
          </div>
          <div className="col-lg-4 col-12 mt-4 mt-lg-0">
            <div className="bg-dark p-4 rounded-4 text-light">
              <h2 className="fs-3">About Movie</h2>
              <p>{item.data.description}</p>
              <h2 className="fs-3">Cast</h2>
              <p>{item.data.cast}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;