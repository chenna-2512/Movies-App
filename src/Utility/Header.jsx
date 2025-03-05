import { useNavigate } from "react-router-dom"
import Styles from '../Components/lp.module.css';

const Main = () => {
    const navigate = useNavigate();
  return (
    <>
      <div>
        <h1 className="bg-primary p-2 text-center text-light">Movies App</h1>
      </div>
      <div className={Styles.header}>
        <h4 onClick={()=>navigate("/")}>Home</h4>
        <h4 onClick={()=>navigate("/about")}>About Us</h4>
        <h4 onClick={()=>navigate("/contact")}>Contact Us</h4>
      </div>
    </>
  )
}

export default Main
