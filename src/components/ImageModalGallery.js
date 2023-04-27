import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Transition } from '@headlessui/react';

// Todo : Add a Popover from headlessui (Icon Information) to show the image details (title, dateCreated, caption)

export default function ImageModalGallery({
  image,
  onClose,
  onPrev,
  onNext,
  startImageNumber,
  endImageNumber,
}) {
  const [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Escape') {
        setIsShowing(false);
        setTimeout(() => onClose(), 300);
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

  const handleCloseTransition = () => {
    setIsShowing(false);
    setTimeout(() => onClose(), 300);
  };

  return (
    <Transition
      show={isShowing}
      appear={true}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="absolute z-50"
    >
      <div className="fixed inset-0 h-full overflow-y-auto">
        <div className="flex h-full items-center justify-center p-2 md:p-5" {...handlers}>
          <div className="fixed inset-0 bg-black bg-opacity-90" onClick={handleCloseTransition} />
          <div className="fixed left-0 right-0 top-0 z-50 flex h-20 w-full items-center justify-center bg-black bg-opacity-75 px-4 py-2 md:py-3">
            <div className="flex w-full xl:max-w-7xl">
              <div className="flex w-full flex-col justify-between overflow-hidden whitespace-nowrap">
                <h5
                  className="truncate text-lg font-medium capitalize text-gray-300 md:text-2xl"
                  title={image.title}
                >
                  {image.title}
                </h5>
                <p className="text-sm text-gray-500 md:text-base">
                  {startImageNumber} &#47; {endImageNumber}
                </p>
              </div>
              <button
                onClick={handleCloseTransition}
                className="text-gray-400 hover:text-gray-50 focus:outline-none"
              >
                <XMarkIcon aria-hidden="true" className="h-9 w-9" />
              </button>
            </div>
          </div>
          <img
            className="z-40 mt-20 max-h-[80vh] rounded-md xl:max-w-screen-xl"
            src={image.src}
            alt={image.alt}
          />
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 z-50 ml-3 mt-5 transform text-gray-400 hover:text-gray-50 focus:outline-none lg:mt-3"
          >
            <ChevronLeftIcon aria-hidden="true" className="h-10 w-10" />
          </button>
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 z-50 mr-3 mt-5 transform text-gray-400 hover:text-gray-50 focus:outline-none lg:mt-3"
          >
            <ChevronRightIcon aria-hidden="true" className="h-10 w-10" />
          </button>
        </div>
      </div>
    </Transition>
  );
}
