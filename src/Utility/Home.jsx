import { useNavigate } from "react-router-dom";
import { telugu } from "../Components/telugu";
import Movies from "./Movies";
const Home = () => {
  
  return (
    <div className="d-grid gap-3" style={{gridTemplateColumns : "auto auto auto auto"}}>
      {telugu.map((item) => (
        <Movies key={item.img} image={item.img} data={item} />
      ))}
    </div>
  );
};

export default Home;
