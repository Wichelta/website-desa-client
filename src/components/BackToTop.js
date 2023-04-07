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
      className={`fixed bottom-6 right-6 rounded-md bg-blue-secondary p-3 text-white ${
        showButton ? 'visible' : 'invisible'
      }`}
      onClick={handleClick}
    >
      <ArrowUpIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
