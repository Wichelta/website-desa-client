import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

export default function LatestNews({ data }) {
  const [displayedNews, setDisplayedNews] = useState([]);

  useEffect(() => {
    const sortedNews = data
      .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
      .slice(0, 3);
    setDisplayedNews(sortedNews);
  }, [data]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
  };

  function truncateDescription(description, maxLength = 400) {
    if (description.length <= maxLength) {
      return description;
    }
    const truncated = description.substr(0, maxLength).trim();
    return truncated + '...';
  }

  return (
    <Fade direction="up" triggerOnce>
      <div className="container mx-auto mt-40 max-w-screen-xl px-2 py-5 xs:px-3">
        <div className="mb-1 flex flex-col items-center gap-2 py-4">
          <h2 className="text-2xl font-bold tracking-wide text-gray-900 sm:text-3xl">
            Berita Terkini
          </h2>
          <p className="text-sm text-gray-500 sm:text-base">Seputar Berita Di Desa</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          {displayedNews.map((news, index) => (
            <div key={index} className="w-full max-w-screen-xl lg:w-auto">
              <Fade direction="up" delay={100 * index} triggerOnce>
                <div className="flex w-full flex-col justify-center rounded-lg shadow-lg xs:w-full lg:w-80 xl:w-96">
                  <div className="relative flex h-full w-full flex-col justify-start rounded-lg border md:flex-row md:gap-0 lg:h-[41rem] lg:flex-col lg:gap-5 xl:h-[38rem]">
                    <div className="relative h-60 w-full object-cover md:h-[21rem] lg:h-60">
                      <img
                        src={news.src}
                        alt={news.alt}
                        className="h-60 w-full rounded-t-lg object-cover md:h-[21rem] md:min-w-[18rem] md:rounded-l-lg md:rounded-tr-none lg:h-60 lg:rounded-bl-none lg:rounded-tl-lg lg:rounded-tr-lg"
                      />
                    </div>
                    <div className="flex h-full flex-col gap-3 px-4 py-4 md:px-4 md:py-4 lg:px-4 lg:py-0">
                      <h5 className="w-full self-center truncate text-center text-base font-bold text-gray-900 sm:text-lg md:w-[26rem] md:self-start md:text-left lg:w-full">
                        {news.title}
                      </h5>
                      <div className="flex flex-row items-center gap-1 self-center text-center md:self-start md:text-left">
                        <CalendarDaysIcon
                          className="h-4 w-4 text-gray-500 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-gray-500 sm:text-base">
                          {formatDate(news.dateCreated)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 sm:text-base">
                        {truncateDescription(news.description)}{' '}
                      </p>
                      <button
                        className="static bottom-0 w-max self-end text-blue-primary hover:underline md:absolute md:right-0 md:w-max md:px-4 md:py-4 lg:right-auto lg:w-max lg:flex-col lg:self-start lg:px-0 lg:py-4"
                        onClick={() => console.log('Read more clicked')}
                      >
                        Baca selengkapnya...
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
