import { useNavigate } from "react-router-dom"

const Main = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h4 onClick={()=>navigate("/")}>Home</h4>
    </div>
  )
}

export default Main
