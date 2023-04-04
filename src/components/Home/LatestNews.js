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
      <div className="container mx-auto mt-40 max-w-screen-xl px-4 py-5">
        <div className="mb-1 flex flex-col items-center gap-2 py-4">
          <h2 className="text-3xl font-bold tracking-wide text-gray-900">Berita Terkini</h2>
          <p className="text-gray-500">Seputar Berita Di Desa</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
          {displayedNews.map((news, index) => (
            <div key={index}>
              <Fade direction="up" delay={100 * index} triggerOnce>
                <div className="flex w-full flex-col justify-center rounded-lg shadow-lg md:w-full lg:w-80 xl:w-96">
                  <div className="relative flex h-full flex-col justify-start rounded-lg border md:w-full md:flex-row md:gap-0 lg:h-[41rem] lg:flex-col lg:gap-5 xl:h-[38rem]">
                    <div className="h-60 w-full object-cover md:h-[21rem] md:w-full lg:h-60 lg:w-full">
                      <img
                        src={news.src}
                        alt={news.alt}
                        className="h-60 w-full rounded-t-lg object-cover md:h-[21rem] md:w-60 md:min-w-[18rem] md:rounded-l-lg md:rounded-tr-none lg:h-60 lg:w-full lg:rounded-bl-none lg:rounded-tl-lg lg:rounded-tr-lg"
                      />
                    </div>
                    <div className="flex h-full flex-col gap-3 px-4 py-4 md:px-4 md:py-4 lg:px-4 lg:py-0">
                      <h5 className="w-[21.5rem] self-center truncate text-center text-lg font-bold text-gray-900 sm:w-[36rem] md:w-[26rem] md:self-start md:text-left lg:w-[18rem] xl:w-full">
                        {news.title}
                      </h5>
                      <div className="flex flex-row items-center gap-1 self-center text-center md:self-start md:text-left">
                        <CalendarDaysIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                        <span className="text-base text-gray-500">
                          {formatDate(news.dateCreated)}
                        </span>
                      </div>
                      <p className="text-gray-700">{truncateDescription(news.description)} </p>
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
