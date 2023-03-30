import React, { useEffect } from 'react';

export default function ImageModalGallery({ image, onClose, onPrev, onNext }) {
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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-5">
        <div className="fixed inset-0  bg-gray-900 opacity-50" onClick={onClose}></div>
        <div className="relative overflow-hidden rounded-md bg-white">
          <div className="flex items-center justify-between bg-white px-4 py-2">
            <h2 className="w-[900px] overflow-hidden whitespace-nowrap text-lg font-medium text-gray-900">
              {image.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-900 hover:text-blue-primary focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <button
            onClick={onPrev}
            className="absolute left-0 top-1/2 z-10 ml-2 transform rounded-full bg-white bg-opacity-50 p-1 text-gray-800 hover:bg-opacity-75 hover:text-blue-primary focus:outline-none sm:-translate-y-1/2 sm:p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={onNext}
            className="absolute right-0 top-1/2 z-10 mr-2 transform rounded-full bg-white bg-opacity-50 p-1 text-gray-800 hover:bg-opacity-75 hover:text-blue-primary focus:outline-none sm:-translate-y-1/2 sm:p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <img src={image.src} alt={image.alt} className="w-[1000px]" />
        </div>
      </div>
    </div>
  );
}
