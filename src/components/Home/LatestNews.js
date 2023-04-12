import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { CalendarDaysIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { BarLoader } from 'react-spinners';

export default function LatestNews({ newsDataJson }) {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedNews, setDisplayedNews] = useState([]);

  useEffect(() => {
    const sortedNews = newsDataJson
      .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
      .slice(0, 3);
    setDisplayedNews(sortedNews);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 300);
  }, [newsDataJson]);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
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
    <div className="mx-auto w-full bg-white">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-4 sm:py-16 lg:px-10">
        <Fade direction="up" triggerOnce>
          <div className="flex flex-col items-center gap-2 py-4">
            <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Berita Terkini</h2>
            <p className="text-sm text-gray-500 sm:text-base">Seputar Berita di Desa</p>
          </div>
          {isLoading ? (
            <div className="col-span-3 mt-10 flex h-80 flex-col items-center justify-center gap-5 md:gap-7">
              <BarLoader height={5} width={150} color={'#9CA3AF'} />
              <p className="text-gray-500">Memuat...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 lg:flex-row">
              {displayedNews.map((news, index) => (
                <div key={index} className="w-full max-w-screen-xl lg:w-auto">
                  <Fade direction="up" delay={100 * index} triggerOnce>
                    <div className="flex w-full flex-col justify-center rounded-md bg-white shadow-lg transition duration-300 ease-in-out hover:shadow-2xl xs:w-full lg:w-80 xl:w-96">
                      <div className="relative flex h-full w-full flex-col justify-start rounded-md border md:flex-row md:gap-0 lg:h-[41rem] lg:flex-col lg:gap-5 xl:h-[38rem]">
                        <div className="relative h-60 w-full object-cover md:h-[21rem] lg:h-60">
                          <img
                            src={news.src}
                            alt={news.alt}
                            className="h-60 w-full cursor-pointer select-none rounded-t-md object-cover md:h-[21rem] md:min-w-[18rem] md:rounded-l-md md:rounded-tr-none lg:h-60 lg:rounded-bl-none lg:rounded-tl-md lg:rounded-tr-md"
                          />
                        </div>
                        <div className="flex h-full flex-col gap-3 px-4 py-4 md:px-4 md:py-4 lg:px-4 lg:py-0">
                          <h5
                            className="w-full cursor-pointer self-center truncate text-center text-base font-bold text-gray-900 sm:text-lg md:w-[26rem] md:self-start md:text-left lg:w-full"
                            title={news.title}
                          >
                            {news.title}
                          </h5>
                          <div className="flex flex-row items-center gap-5 self-center text-center md:self-start md:text-left">
                            <div className="flex flex-row items-center gap-1">
                              <CalendarDaysIcon
                                className="h-4 w-4 text-gray-500"
                                aria-hidden="true"
                              />
                              <span className="text-sm text-gray-500">
                                {formatDate(news.dateCreated)}
                              </span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 sm:text-base">
                            {truncateDescription(news.description)}
                          </p>
                          <button
                            className="group static bottom-0 w-max self-end text-blue-primary hover:underline md:absolute md:right-0 md:w-max md:px-4 md:py-4 lg:right-auto lg:w-max lg:flex-col lg:self-start lg:px-0 lg:py-4"
                            onClick={() => console.log('Read more clicked')}
                          >
                            Baca Selengkapnya
                            <ArrowLongRightIcon
                              className="inline h-5 w-5 translate-x-0 transform transition-transform duration-300 group-hover:translate-x-1"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </div>
              ))}
            </div>
          )}
          <Fade
            direction="up"
            delay={500}
            triggerOnce
            className="mb-3 mt-4 py-4 text-center sm:mb-0"
          >
            <a
              href="/berita-seputar-desa"
              className="rounded-md bg-blue-primary px-4 py-2.5 text-center text-gray-50 transition duration-300 ease-in-out hover:bg-blue-secondary"
            >
              Lihat Semua Berita
            </a>
          </Fade>
        </Fade>
      </div>
    </div>
  );
}
