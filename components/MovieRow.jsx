"use client"

import { useState } from 'react';

const MovieRow = ({ title, movies }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrowClick = () => {
  };

  const handleRightArrowClick = () => {
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div
        id={title}
        className="relative flex overflow-x-hidden"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button
            className={`${
              scrollX === 0 ? 'hidden' : 'block'
            } bg-gray-800 rounded-full p-2 focus:outline-none`}
            onClick={handleLeftArrowClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="flex">
          {movies.map((movie) => (
            <div key={movie.id} className="mr-6">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-32 h-48 object-cover rounded-md"
              />
              <p className="mt-2 text-sm">{movie.title}</p>
            </div>
          ))}
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button
            className={`${
              scrollX <= -(movies.length * 150 - window.innerWidth)
                ? 'hidden'
                : 'block'
            } bg-gray-800 rounded-full p-2 focus:outline-none`}
            onClick={handleRightArrowClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieRow;

