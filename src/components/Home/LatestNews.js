import React, { useState, useEffect } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import EmptyState from '../EmptyState';
import HTMLReactParser from 'html-react-parser';
import { CalendarDaysIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LatestNews({ newsDataJson }) {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedNews, setDisplayedNews] = useState([]);

  useEffect(() => {
    const sortedNews = newsDataJson
      .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
      .slice(0, 3);
    setDisplayedNews(sortedNews);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
    AOS.init();
  }, [newsDataJson]);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
  };

  return (
    <section className="mx-auto w-full bg-white">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-4 sm:py-16 lg:px-6">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex flex-col items-center gap-2 py-4"
        >
          <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Berita Terkini</h2>
          <p className="text-sm text-gray-500 sm:text-base">Seputar Berita di Desa</p>
        </div>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <div
            className={`flex flex-col items-center gap-4 lg:flex-row
          ${displayedNews.length >= 3 ? 'justify-between' : 'justify-center'} `}
          >
            {!displayedNews.length ? (
              <EmptyState textColor="text-gray-500" />
            ) : (
              displayedNews.map((news, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={50 * index}
                  data-aos-duration="500"
                  className="w-full lg:max-w-[24.333rem]"
                >
                  <div className="flex h-full w-full flex-col justify-center rounded-md bg-white shadow-lg transition duration-300 ease-in-out hover:shadow-2xl">
                    <div className="relative flex h-full w-full flex-col justify-start rounded-md border md:flex-row md:gap-0 lg:h-[38rem] lg:flex-col lg:gap-5">
                      <div className="relative h-60 w-full object-cover md:h-[21rem] md:w-72 lg:h-60 lg:w-full">
                        <img
                          src={news.src}
                          alt={news.alt}
                          className="h-60 w-full cursor-pointer select-none rounded-t-md object-cover md:h-[21rem] md:min-w-[18rem] md:rounded-l-md md:rounded-tr-none lg:h-60 lg:rounded-bl-none lg:rounded-tl-md lg:rounded-tr-md"
                        />
                      </div>
                      <div className="flex h-full flex-col gap-3 px-4 py-4 md:h-[21rem] lg:py-0">
                        <h5
                          className="line-clamp-2 w-full cursor-pointer self-center text-center text-base font-semibold text-gray-900 sm:text-lg md:line-clamp-1 md:self-start md:text-left lg:line-clamp-2 lg:w-full"
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
                        <div className="text-default line-clamp-[8] text-gray-700">
                          {HTMLReactParser(news.description)}
                        </div>
                        <a
                          className="group static w-max self-end text-sm text-blue-primary no-underline hover:underline sm:text-base md:absolute md:bottom-0 md:right-0 md:w-max md:px-4 md:py-4 lg:right-auto lg:w-max lg:flex-col lg:self-start lg:px-0 lg:py-4"
                          onClick={() => console.log('Read more clicked')}
                          href="/"
                        >
                          Baca Selengkapnya
                          <ArrowLongRightIcon
                            className="inline h-5 w-5 translate-x-0 transform transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
        {displayedNews.length && !isLoading ? (
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
            className="col-span-3 mb-3 mt-4 py-4 text-center sm:mb-0"
          >
            <a
              href="/berita-seputar-desa"
              className="rounded-md bg-blue-primary px-4 py-2.5 text-center text-sm text-gray-50 no-underline transition duration-300 ease-in-out hover:bg-blue-secondary sm:text-base"
            >
              Lihat Semua Berita
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
