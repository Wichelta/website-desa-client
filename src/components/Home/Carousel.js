import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImgCarousel1 from '../../assets/images/img_carousel_1.jpg';
import ImgCarousel2 from '../../assets/images/img_carousel_2.jpg';
import ImgCarousel3 from '../../assets/images/img_carousel_3.jpg';
import { Fade } from 'react-awesome-reveal';
// import { ChevronDownIcon } from '@heroicons/react/24/solid';

export default function CarouselImg() {
  const images = [ImgCarousel1, ImgCarousel2, ImgCarousel3];

  return (
    <Fade direction="down" triggerOnce>
      <Carousel swipeable={false} showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index}`}
              className="h-screen select-none object-cover brightness-50"
            />
            <div className="carousel-text-container flex w-full flex-col items-center gap-3 text-center md:max-w-5xl">
              <Fade direction="up" cascade damping={0.3}>
                <h2 className="text-3xl font-bold text-gray-50 sm:text-5xl md:text-6xl">
                  Selamat Datang di Website Resmi
                </h2>
                <p className="text-2xl font-bold text-gray-50 sm:text-4xl md:text-5xl">
                  Desa BRIliant
                </p>
                <p className="text-lg font-bold text-gray-50 sm:text-2xl md:text-3xl">
                  Kec. Sungai Raya, Kab. Kubu Raya
                </p>
                {/* <div className="mt-3 flex h-14 cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-50 text-gray-300 transition duration-300 ease-in-out hover:text-gray-50">
                  <ChevronDownIcon aria-hidden="true" className="mt-3 h-10 w-10 animate-bounce" />
                </div> */}
                <button className="mt-3 select-none self-center rounded-md bg-blue-primary px-4 py-2 font-medium text-gray-50 transition duration-300 ease-in-out hover:bg-blue-secondary">
                  Jelajahi
                </button>
              </Fade>
            </div>
          </div>
        ))}
      </Carousel>
    </Fade>
  );
}
