import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImgCarousel1 from '../assets/images/img_carousel_1.jpg';
import ImgCarousel2 from '../assets/images/img_carousel_2.jpg';
import ImgCarousel3 from '../assets/images/img_carousel_3.jpg';

export default function CarouselImg() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const images = [ImgCarousel1, ImgCarousel2, ImgCarousel3];

  return (
    <div className="carousel-container mt-20">
      <Carousel
        showThumbs={false}
        selectedItem={selectedIndex}
        onChange={handleSelect}
        infiniteLoop={true}
        autoPlay={true}
      >
        {images.map((image, index) => (
          <div key={index}>
            <div className="carousel-image-container">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="carousel-image select-none object-cover brightness-75"
              />
              <div className="carousel-text-container flex w-80 flex-col gap-5 md:w-auto">
                <h2 className="text-4xl font-bold md:text-6xl">Selamat Datang</h2>
                <p className="text-lg md:text-2xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor velit at erat
                  dictum mollis.
                </p>
                <button className="w-max select-none self-center rounded bg-sky-900 px-7 py-3 font-bold text-white hover:bg-sky-950">
                  Jelajahi <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
