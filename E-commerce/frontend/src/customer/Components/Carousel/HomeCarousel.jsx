// import React from "react";
// import AliceCarousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import { homeCarouselData } from "./HomeCaroselData";
// import { useNavigate } from "react-router-dom";

// const handleDragStart = (e) => e.preventDefault();

// const HomeCarousel = () => {
//   const navigate = useNavigate();
//   const item = homeCarouselData.map((item) => (
//     <img
//       className="cursor-pointer"
//       onClick={() => navigate(item.path)}
//       src={item.image}
//       alt=""
//       onDragStart={handleDragStart}
//       role="presentation"
//     />
//   ));
//   return (
//     <AliceCarousel
//       mouseTracking
//       items={item}
//       autoPlay
//       infinite
//       autoPlayInterval={2000}
//       disableButtonsControls
//     />
//   );
// };

// export default HomeCarousel;

import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";
import "./Carousel.css"; // Ensure this CSS file exists

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();

  const items = homeCarouselData.map((item, index) => (
    <img
      key={index}
      className="carousel-image cursor-pointer "
      onClick={() => navigate(item.path)}
      src={item.image}
      alt="carousel item"
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));

  return (
    <div className="carousel-container  ">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInterval={1000}
        disableButtonsControls
        disableDotsControls
      />
    </div>
  );
};

export default HomeCarousel; 


