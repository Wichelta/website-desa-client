import React, { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

// Todo : Add a Popover from headlessui (Icon Information) to show the image details (title, dateCreated, caption)

export default function ImageModalGallery({
  image,
  onClose,
  onPrev,
  onNext,
  startImageNumber,
  endImageNumber,
}) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft' && onPrev) {
        onPrev();
      } else if (event.key === 'ArrowRight' && onNext) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose, onPrev, onNext]);

  const handlers = useSwipeable({
    onSwipedLeft: onNext,
    onSwipedRight: onPrev,
    preventDefaultTouchmoveEvent: true,
  });

  return (
    <div className="modal fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm">
      <div className="flex min-h-screen items-center justify-center p-2 md:p-5">
        <div className="fixed inset-0 bg-black bg-opacity-80" onClick={onClose}></div>
        <div className="fixed left-0 right-0 top-0 z-50 flex h-20 w-full items-center justify-center bg-black bg-opacity-60 px-4 py-2 md:py-3">
          <div className="flex w-full xl:max-w-7xl">
            <div className="flex w-full flex-col justify-between overflow-hidden whitespace-nowrap p-1">
              <h2 className="truncate text-lg font-medium capitalize text-gray-300 md:text-2xl">
                {image.title}
              </h2>
              <p className="text-sm text-gray-500 md:text-base">
                Image {startImageNumber} of {endImageNumber}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-50 focus:outline-none"
            >
              <XMarkIcon aria-hidden="true" className="h-6 w-6 md:h-9 md:w-9" />
            </button>
          </div>
        </div>
        <img
          className="z-50 mt-20 max-h-[80vh] touch-pinch-zoom xl:max-w-screen-xl xl:p-2"
          src={image.src}
          alt={image.alt}
          {...handlers}
        />
        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 z-50 ml-3 mt-5 transform text-gray-400 hover:text-gray-50 focus:outline-none lg:mt-3"
        >
          <ChevronLeftIcon aria-hidden="true" className="h-8 w-8 md:h-10 md:w-10" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 z-50 mr-3 mt-5 transform text-gray-400 hover:text-gray-50 focus:outline-none lg:mt-3"
        >
          <ChevronRightIcon aria-hidden="true" className="h-8 w-8 md:h-10 md:w-10" />
        </button>
      </div>
    </div>
  );
}
