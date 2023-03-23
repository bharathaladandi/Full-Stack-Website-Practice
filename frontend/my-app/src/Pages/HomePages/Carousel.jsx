import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import Four from "../../assets/final-fantasy-xiv-stormblood-miqo-te-wallpaper-2400x1350_50.jpg";
import Three from "../../assets/2571513.webp";
import Seven from "../../assets/samurai-girl-katana-wallpaper-1366x768_46.jpg";
import Five from "../../assets/sucker_punch_by_syn_k.jpg";
import Six from "../../assets/wallpapersden.com_samurai-ghost-of-tsushima_3840x2160.jpg";
import First from "../../assets/samurai-girl-k-guweiz-wallpaper.jpg";
import Eight from "../../assets/samurai-_-wallpaper-1366x768-wallpaper.jpg";


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
  {
    image: Seven,
  },
  {
    image: Eight,
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
