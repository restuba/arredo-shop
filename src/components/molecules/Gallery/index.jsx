import { React, styled, useState } from 'libraries';
import { breakpoints } from 'utils';

const Gallery  = ({images}) => {  
  const [ selected, setSelected ] = useState(images[0]);
  return(
    <GalleryWrap>
      <div className="header-gallery">
        <img src={selected} alt="selected" className="image-gallery" />
      </div>
      <div className="thumb-gallery">
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            className={selected === img ? 'active': null} 
            alt="thumbs" 
            onClick={() => setSelected(img)}
          />
        ))}
      </div>
    </GalleryWrap>
  )
}

export default Gallery;

const GalleryWrap = styled.div`
  width: 100%;
  .header-gallery{
      width: 100%;
      height: 480px;
      overflow: hidden;
      ${breakpoints.xs}{
        height: 320px;
      }
      &:before{
        content: '';
        display: block;
      }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.5s ease-out;
      background-position: center center;
      background-repeat: none;
      background-size: cover;
      &:hover{
        transform: scale(1.5);
      }
    }
  }
  .thumb-gallery{
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    align-items: stretch;
    img{
      width: 100%;
      height: 60px;
      object-fit: cover;
      border: 2px solid #ffffff;
      cursor: pointer;
      &.active{
        border: 2px solid tomato;
      }
    }
  }
`;