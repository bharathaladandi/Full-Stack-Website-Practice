import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Four from "../../assets/25cd1aa0281e4842977cfaf336c9c99f.jpg.webp";
import Three from "../../assets/da409d74a0174dc1a31e0f5935efd007.jpg.webp";
import First from "../../assets/elainacom.jpg";
import Five from "../../assets/Category_Banner_test_anime_anime_3.png";
import Six from "../../assets/73f378ded2ab4da59798f278f3704234.jpg.webp";

const slider = [
  {
    image: First,
  },
  {
    image: Three,
  },
  {
    image: Four,
  },
  {
    image: Five,
  },
  {
    image: Six,
  },
];

function Slider() {
  return (
    <div className="maindivhai">
      
        {" "}
        <Carousel autoPlay infiniteLoop showArrows showIndicators>
        
          {slider.map((el) => {
            
            return (
              <Link to="/products">
              <img
                key={el.image}
                src={el.image}
                alt="additional-image"
                height="100%"
                width="90%"
              />
              </Link>
            );
            
          })}
         
        </Carousel>
      
    </div>
  );
}

export default Slider;
