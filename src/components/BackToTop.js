import React, { useState } from 'react';
import { ArrowUpIcon } from '@heroicons/react/20/solid';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <button
      className={`fixed bottom-6 right-6 rounded-md bg-black bg-opacity-75 p-2 text-gray-50 sm:p-3 ${
        showButton ? 'visible' : 'invisible'
      }`}
      onClick={handleClick}
    >
      <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
