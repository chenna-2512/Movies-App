import { useNavigate } from "react-router-dom"

const Aboutus = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h4 onClick={() => navigate("About")}>About Us</h4>
    </div>
  )
}

export default Aboutus
