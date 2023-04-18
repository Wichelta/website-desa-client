import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImgCarousel1 from '../../assets/images/img_carousel_1.jpg';
import ImgCarousel2 from '../../assets/images/img_carousel_2.jpg';
import ImgCarousel3 from '../../assets/images/img_carousel_3.jpg';
import { Fade } from 'react-awesome-reveal';

export default function CarouselImg({ refShortProfile }) {
  const images = [ImgCarousel1, ImgCarousel2, ImgCarousel3];

  const showShortProfile = () => {
    refShortProfile.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Fade direction="down" triggerOnce>
      <section>
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
                  <h1 className="text-3xl font-bold text-gray-50 sm:text-4xl md:text-5xl">
                    Selamat Datang di Website Resmi
                  </h1>
                  <h2 className="text-2xl font-bold text-gray-50 sm:text-3xl md:text-4xl">
                    Desa BRIliant
                  </h2>
                  <h3 className="text-lg font-bold text-gray-50 sm:text-xl md:text-2xl">
                    Kec. Sungai Raya, Kab. Kubu Raya
                  </h3>
                  <button
                    className="mt-3 select-none self-center rounded-md bg-blue-primary px-4 py-2 text-sm font-medium text-gray-50 transition duration-300 ease-in-out hover:bg-blue-secondary sm:text-base"
                    onClick={showShortProfile}
                  >
                    Jelajahi
                  </button>
                </Fade>
              </div>
            </div>
          ))}
        </Carousel>
      </section>
    </Fade>
  );
}
