// import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const Movies = ({ image, data }) => {
  // console.log(data.title,'vhv');
  const navigate = useNavigate();

  return (
    <>
      <div key={data.title} onClick={() => navigate(`card/${data.title}`, { state: { data } })}>
        <img src={image} alt="Salaar" className="w-100" />
      </div>
    </>
  );
};

export default Movies;