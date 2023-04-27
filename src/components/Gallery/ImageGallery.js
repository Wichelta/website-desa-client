import React, { useState, useEffect, useRef } from 'react';
import ImageModalGallery from '../ImageModalGallery';
import LoadingIndicator from '../LoadingIndicator';
import EmptyState from '../EmptyState';
import ListboxSortOption from '../ListboxSortOption';
import { ChevronDownIcon, ArrowsPointingOutIcon } from '@heroicons/react/20/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PAGE_SIZE = 6;

export default function ImageGallery({ galleryDataJson }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingShowMore, setIsLoadingShowMore] = useState(true);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [sortOrder, setSortOrder] = useState('newest');
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bodyRef = useRef(document.body);

  useEffect(() => {
    const sortedImages = galleryDataJson.sort((a, b) => {
      if (sortOrder === 'oldest') {
        return new Date(a.dateCreated) - new Date(b.dateCreated);
      } else {
        return new Date(b.dateCreated) - new Date(a.dateCreated);
      }
    });
    setDisplayedImages(sortedImages.slice(0, PAGE_SIZE));
    setPagination(1);
    setIsLoading(true);
    setIsLoadingShowMore(false);
    setTimeout(() => setIsLoading(false), 1000);
    AOS.init();
  }, [sortOrder, galleryDataJson]);

  const handleShowMore = () => {
    const startIndex = pagination * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const newImages = galleryDataJson.slice(startIndex, endIndex);
    setDisplayedImages((prevImages) => [...prevImages, ...newImages]);
    setPagination((prevPagination) => prevPagination + 1);
    setIsLoadingShowMore(true);
    setTimeout(() => setIsLoadingShowMore(false), 1000);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    bodyRef.current.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    setIsModalOpen(false);
    bodyRef.current.style.overflow = 'auto';
  };

  const handlePrevClick = () => {
    if (selectedImageIndex === 0) {
      return;
    }
    setSelectedImageIndex(selectedImageIndex - 1);
  };

  const handleNextClick = () => {
    if (selectedImageIndex === displayedImages.length - 1) {
      return;
    }
    setSelectedImageIndex(selectedImageIndex + 1);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  return (
    <section className="mx-auto w-full bg-white">
      <div className="container mx-auto mt-[8.25rem] flex max-w-screen-xl flex-col px-4 py-4 sm:mt-[8.5rem] lg:px-6 lg:py-16">
        <div className="flex flex-col gap-4">
          <div className="col-span-3 flex justify-end">
            <ListboxSortOption
              sortOrder={sortOrder}
              handleSortOrderChange={handleSortOrderChange}
            />
          </div>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
              {!displayedImages.length ? (
                <EmptyState textColor="text-gray-500" />
              ) : (
                displayedImages.map((image, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={50 * index}
                    data-aos-duration="500"
                    data-aos-once="true"
                    onClick={() => handleImageClick(index)}
                  >
                    <div className="group relative cursor-pointer overflow-hidden rounded-md">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-72 w-full transform select-none object-cover duration-300 group-hover:scale-110 group-hover:brightness-50 group-hover:ease-in-out"
                        onClick={() => setIsModalOpen((isModalOpen) => !isModalOpen)}
                      />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 duration-300 group-hover:opacity-100">
                        <div className="relative h-10 w-10">
                          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-white">
                            <ArrowsPointingOutIcon aria-hidden="true" className="h-6 w-6" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
              {/* {isLoadingShowMore ? (
                <div className="col-span-full flex -translate-x-0 -translate-y-[40rem] justify-center">
                  <LoadingIndicator />
                </div>
              ) : null} */}
            </div>
          )}
          {!isLoading && displayedImages.length < galleryDataJson.length && (
            <div
              data-aos="fade-up"
              data-aos-delay="150"
              data-aos-duration="500"
              data-aos-once="true"
              className="col-span-full flex justify-center"
            >
              <button
                onClick={handleShowMore}
                className="group col-span-3 m-auto flex flex-col items-center justify-center text-center text-gray-500 transition duration-300 ease-in-out hover:text-blue-primary hover:underline"
              >
                Tampilkan Lebih Banyak
                <ChevronDownIcon
                  className="h-5 w-5 translate-y-0 transform transition-transform duration-300 group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </button>
            </div>
          )}
        </div>
        {selectedImageIndex !== null && (
          <ImageModalGallery
            image={galleryDataJson[selectedImageIndex]}
            onClose={handleCloseModal}
            onPrev={handlePrevClick}
            onNext={handleNextClick}
            startImageNumber={selectedImageIndex + 1}
            endImageNumber={displayedImages.length}
            isModalOpen={isModalOpen}
          />
        )}
      </div>
    </section>
  );
}
