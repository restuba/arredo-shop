import { React } from "libraries";
import { RiHeartFill as FavFillIc } from "react-icons/ri";
import { Wrapper } from "./style";

const Index = ({ image, price, name, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <img src={`${image}`} alt="thumb" />
      <FavFillIc className="product-fav" />
      <div className="product-content">
        <p>${price}</p>
        <h4>{name}</h4>
      </div>
    </Wrapper>
  );
};

export default Index;
