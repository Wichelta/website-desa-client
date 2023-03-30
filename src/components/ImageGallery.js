import React, { useState } from 'react';
import ImageModalGallery from './ImageModalGallery';

export default function ImageGallery({ images }) {
  const PAGE_SIZE = 6;
  const [displayedImages, setDisplayedImages] = useState(images.slice(0, PAGE_SIZE));
  const [pagination, setPagination] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleShowMore = () => {
    const startIndex = pagination * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const newImages = images.slice(startIndex, endIndex);
    setDisplayedImages([...displayedImages, ...newImages]);
    setPagination(pagination + 1);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevClick = () => {
    setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setSelectedImageIndex((selectedImageIndex + 1) % images.length);
  };

  return (
    <div className="mx-auto mt-40 max-w-screen-xl px-4 py-5 sm:px-6 lg:px-7">
      <div className="flex flex-col gap-6 md:grid md:grid-cols-3">
        {displayedImages.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer bg-black shadow-md transition-shadow duration-300 hover:shadow-lg"
            onClick={() => handleImageClick(index)}
          >
            <div className="group">
              <img
                src={image.src}
                alt={image.alt}
                className="h-72 w-full object-cover brightness-75 duration-300 hover:ease-in-out group-hover:brightness-100"
              />
              <p className="absolute inset-0 flex items-center justify-center text-3xl text-white opacity-0 transition-opacity group-hover:opacity-100">
                {image.title}
              </p>
            </div>
          </div>
        ))}
        {displayedImages.length < images.length && (
          <button
            onClick={handleShowMore}
            className="group col-span-3 m-auto flex w-52 flex-col items-center justify-center text-center text-gray-500 underline hover:text-blue-primary"
          >
            Tampilkan lebih banyak
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 group-hover:stroke-blue-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                fill="none"
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                strokeWidth="2"
                d="m20.5 11.5-6 6-6-6"
                className="group-hover:animate-bounce group-hover:stroke-blue-primary"
              ></path>
            </svg>
          </button>
        )}
      </div>
      {selectedImageIndex !== null && (
        <ImageModalGallery
          image={images[selectedImageIndex]}
          onClose={handleCloseModal}
          onPrev={handlePrevClick}
          onNext={handleNextClick}
        />
      )}
    </div>
  );
}
