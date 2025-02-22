import React from "react";
import { Carousel } from "react-responsive-carousel";

import { carousel_images } from "../../assets/images/links-images";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HeroCarousel = () => {
  return (
    <div className="w-full relative ">
      {" "}
      {/* Slightly rounded corners */}
      <Carousel
        autoPlay={true}
        interval={1000} // Change slide every second
        infiniteLoop={true} // Infinite loop for carousel
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide the slide status
        showThumbs={false} // Hide thumbnails
        stopOnHover={true} // Pause carousel on hover
        dynamicHeight={false} // Fix height, do not adjust per slide
        className="rounded-lg" // Optional: Adding some round edges to carousel itself
      >
        {carousel_images.map((image, index) => (
          <div key={index}>
            <img
              src={image.image}
              alt={`carousel-img-${index}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
