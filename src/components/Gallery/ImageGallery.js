import React, { useState, useEffect, Fragment } from 'react';
import ImageModalGallery from '../ImageModalGallery';
import LoadingIndicator from '../LoadingIndicator';
import EmptyState from '../EmptyState';
import { Listbox, Transition } from '@headlessui/react';
import {
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/20/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ImageGallery({ galleryDataJson }) {
  const PAGE_SIZE = 6;

  const [sortOrder, setSortOrder] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingShowMore, setIsLoadingShowMore] = useState(true);

  const [displayedImages, setDisplayedImages] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

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
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
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
    <main className="mx-auto w-full bg-white">
      <div className="container mx-auto mt-[8.5rem] flex max-w-screen-xl flex-col px-4 py-4 sm:py-16 lg:px-10">
        <div className="flex flex-col gap-4">
          <div className="col-span-3 flex justify-end">
            <Listbox value={sortOrder} onChange={handleSortOrderChange}>
              <div className="relative mt-0.5">
                <Listbox.Button className="relative w-40 rounded-md border bg-white py-2 pl-3 pr-10 text-left text-sm shadow focus:outline-none sm:text-base">
                  <span className="block truncate">
                    {sortOrder === 'newest' ? 'Terbaru' : 'Terlama'}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-300"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-40 list-none overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                    <Listbox.Option
                      value="newest"
                      className={({ active }) =>
                        `${active ? 'bg-gray-100 ' : 'text-gray-900'}
relative cursor-pointer select-none py-2 pl-10 pr-4`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`${
                              selected ? 'font-medium' : 'font-normal'
                            } block truncate text-sm sm:text-base`}
                          >
                            Terbaru
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0  left-0 flex items-center pl-3 text-gray-900">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                    <Listbox.Option
                      value="oldest"
                      className={({ active }) =>
                        `${active ? 'bg-gray-100' : 'text-gray-900'}
relative cursor-pointer select-none py-2 pl-10 pr-4`
                      }
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`${
                              selected ? 'font-medium' : 'font-normal'
                            } block truncate text-sm sm:text-base`}
                          >
                            Terlama
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0  left-0 flex items-center pl-3 text-gray-900">
                              <CheckIcon className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
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
                    data-aos-delay={150 * index}
                    data-aos-duration="500"
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
              {!isLoadingShowMore && displayedImages.length < galleryDataJson.length && (
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="500"
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
    </main>
  );
}
