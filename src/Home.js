import { useNavigate } from "react-router-dom";
import homeImg from "./images/scene.webp";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/shopping-cart/shop");
  };

  return (
    <div className="home-container">
      <img className="home-img-bg" src={homeImg} />
      <div className="home-inner-container">
        <h1 className="home-page-h1">Welcome to Odin's Forge</h1>
        <p>Quality steel worked by our master craftsman!</p>
        <a className="shop-link" onClick={handleClick}>
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Home;
