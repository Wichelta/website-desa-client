import React, { useState, useEffect } from 'react';
import LoadingIndicator from '../LoadingIndicator';
import EmptyState from '../EmptyState';
import ListboxSortOption from '../ListboxSortOption';
import HTMLReactParser from 'html-react-parser';
import { CalendarDaysIcon, ArrowLongRightIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PAGE_SIZE = 6;

export default function News({ newsDataJson }) {
  const [isLoading, setIsLoading] = useState(true);
  const [displayedNews, setDisplayedNews] = useState([]);
  const [pagination, setPagination] = useState(1);
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    const sortedNews = newsDataJson.sort((a, b) => {
      if (sortOrder === 'oldest') {
        return new Date(a.dateCreated) - new Date(b.dateCreated);
      } else {
        return new Date(b.dateCreated) - new Date(a.dateCreated);
      }
    });
    setDisplayedNews(sortedNews.slice(0, PAGE_SIZE));
    setPagination(1);
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000);
    AOS.init();
  }, [sortOrder, newsDataJson]);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('id-ID', options);
  };

  const handleShowMore = () => {
    const startIndex = pagination * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const newNews = newsDataJson.slice(startIndex, endIndex);
    setDisplayedNews((prevNews) => [...prevNews, ...newNews]);
    setPagination((prevPagination) => prevPagination + 1);
    // setIsLoadingShowMore(true);
    // setTimeout(() => setIsLoadingShowMore(false), 1000);
  };

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  return (
    <section className="mx-auto w-full bg-white">
      <div className="container mx-auto mt-[8.5rem] flex max-w-screen-xl flex-col px-4 py-4 sm:py-16 lg:px-10">
        <div className="flex flex-col gap-4">
          <div className="col-span-3 flex justify-end">
            <ListboxSortOption
              sortOrder={sortOrder}
              handleSortOrderChange={handleSortOrderChange}
            />
          </div>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
            <div className="flex flex-col items-center justify-center gap-4 lg:grid lg:grid-cols-3 lg:gap-6 xl:gap-8">
              {!displayedNews.length ? (
                <EmptyState textColor="text-gray-500" />
              ) : (
                displayedNews.map((news, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={50 * index}
                    data-aos-duration="500"
                    data-aos-once="true"
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
                          <div className="line-clamp-[8] overflow-hidden text-sm text-gray-700 sm:text-base">
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
              {!isLoading && displayedNews.length < newsDataJson.length && (
                <div
                  data-aos="fade-up"
                  data-aos-delay="150"
                  data-aos-duration="500"
                  className="col-span-full flex justify-center"
                >
                  <button
                    onClick={handleShowMore}
                    className="group col-span-3 m-auto flex flex-col items-center justify-center text-center text-gray-500 transition duration-300 ease-in-out hover:text-blue-primary hover:underline"
                  >
                    Tampilkan Lebih Banyak
                    <ChevronDownIcon
                      className="h-5 w-5 translate-y-0 transform transition-transform duration-300 group-hover:translate-y-1"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
