import { React, useState } from "libraries";
import { Wrapper } from "./style";

const Index = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);
  return (
    <Wrapper>
      <div className="header-gallery">
        <img src={selected} alt="selected" className="image-gallery" />
      </div>
      <div className="thumb-gallery">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={selected === img ? "active" : null}
            alt="thumbs"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Index;
