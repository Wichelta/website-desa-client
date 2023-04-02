import React, { useState, useEffect, Fragment } from 'react';
import ImageModalGallery from './ImageModalGallery';
import { Listbox, Transition } from '@headlessui/react';
import { BarLoader } from 'react-spinners';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export default function ImageGallery({ images }) {
  const PAGE_SIZE = 6;

  const [sortOrder, setSortOrder] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);

  const [displayedImages, setDisplayedImages] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  useEffect(() => {
    const sortedImages = images.sort((a, b) => {
      if (sortOrder === 'oldest') {
        return new Date(a.dateCreated) - new Date(b.dateCreated);
      } else {
        return new Date(b.dateCreated) - new Date(a.dateCreated);
      }
    });
    setDisplayedImages(sortedImages.slice(0, PAGE_SIZE));
    setPagination(1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  }, [sortOrder, images]);

  const handleShowMore = () => {
    const startIndex = pagination * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const newImages = images.slice(startIndex, endIndex);
    setDisplayedImages((prevImages) => [...prevImages, ...newImages]);
    setPagination((prevPagination) => prevPagination + 1);
    setIsLoading(false);
  };

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrevClick = () => {
    if (selectedImageIndex === 0) {
      return;
    }
    setSelectedImageIndex(selectedImageIndex - 1);
  };

  const handleNextClick = () => {
    if (selectedImageIndex === images.length - 1) {
      return;
    }
    setSelectedImageIndex(selectedImageIndex + 1);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="mx-auto mt-40 max-w-screen-xl px-4 py-5 sm:px-6 lg:px-7">
      <div className="flex flex-col gap-6">
        <div className="col-span-3 flex justify-end">
          <Listbox value={sortOrder} onChange={handleSortOrderChange}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-40 rounded-md bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-60">
                <span className="block truncate">
                  {sortOrder === 'newest' ? 'Terbaru' : 'Terlama'}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                          className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}
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
                          className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}
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
          <div className="col-span-3 mt-10 flex h-80 flex-col items-center justify-center gap-5 md:gap-7">
            <BarLoader height={5} width={150} color={'#9CA3AF'} />
            <p className="text-gray-500">Memuat...</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 md:grid md:grid-cols-3">
            {displayedImages.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(index)}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-72 w-full cursor-pointer object-cover duration-300 hover:brightness-50 hover:ease-in-out"
                />
              </div>
            ))}
          </div>
        )}
        {displayedImages.length < images.length && (
          <div className="col-span-3 flex justify-center">
            {isLoading ? null : (
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
        )}
      </div>
      {selectedImageIndex !== null && (
        <ImageModalGallery
          image={images[selectedImageIndex]}
          onClose={handleCloseModal}
          onPrev={handlePrevClick}
          onNext={handleNextClick}
          startImageNumber={selectedImageIndex + 1}
          endImageNumber={images.length}
        />
      )}
    </div>
  );
}
