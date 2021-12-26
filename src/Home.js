import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop')
  }

  return(
    <div className="home-container">
      <h1>Welcome to "The Armoury"</h1>
      <p>Going on a raid? Everything you need is right here at <span>The Armoury</span>.</p>
      <button className="shop-btn" onClick={handleClick}>Shop Now</button>
    </div>
  );
}

export default Home;