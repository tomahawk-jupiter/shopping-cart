import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();
  const toShop = () => {
    navigate("../Shop");
  };

  return (
    <div className="confirmation-container">
      <h1>Your order has been placed.</h1>
      <button onClick={toShop}>Continue Shopping</button>
    </div>
  );
};

export default Confirmation;
