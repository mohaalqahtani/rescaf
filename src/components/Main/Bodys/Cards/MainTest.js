import React, { useState } from 'react';
import data from './restaurants.json';
import sr from '../../../../SR.svg';

export default function RestaurantSlider({ type }) {
    const [current, setCurrent] = useState(0);

    const list = data[type]; // المطاعم أو المقاهي
  
    const goNext = () => {
      if (current < list.length - 1) setCurrent(current + 1);
    };
  
    const goPrev = () => {
      if (current > 0) setCurrent(current - 1);
    };
  
    if (!list || !list[current]) return <p>ما فيه بيانات لعرضها</p>;
  
    const { name, image, mapUrl, price, ratingText, stars } = list[current];
    const isIframe = mapUrl.includes('<iframe');  
  return (
    <div className="bg-white text-gray-800 rounded-lg p-6 shadow-md max-w-md w-full">
      <img src={image} alt={name} className="rounded-md mb-4 w-20 h-20 justify-center m-auto object-cover" />
      <h2 className="text-2xl font-bold mb-2">{name}</h2>

      <p className="mb-1 flex items-center gap-1 justify-center">💵
      <span className="text-lg font-semibold">{price}</span>
      <img src={sr} alt="ريال سعودي" className="w-4 h-4" />
      </p>

      <p className="mb-1">⭐ {stars} / 5</p>
      <p className="mb-2">💬 {ratingText}</p>
      {isIframe ? (
        <div dangerouslySetInnerHTML={{ __html: mapUrl }} />
      ) : (
        <a href={mapUrl} target="_blank" rel="noopener noreferrer" >
          عرض الموقع على الخريطة
        </a>
      )}

<div className="flex gap-4 mt-6 justify-center">
        <button
          type="button"
          className="items-center justify-center h-full cursor-pointer group focus:outline-none"
          onClick={goPrev}
        
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg className="w-4 h-4 text-black rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="items-center justify-center h-full cursor-pointer group focus:outline-none"
          onClick={goNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70">
            <svg className="w-4 h-4 text-black rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
