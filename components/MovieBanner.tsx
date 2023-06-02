"use client"
import { useEffect, useState } from 'react';
import { Movie } from '../typings'
import Image from 'next/image';
import { baseUrl } from '@constants/movie';
import { BannerProps } from '../typings';

const MovieBanner = ({ netflixOriginals}:BannerProps) => {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random()* netflixOriginals.length)])
    
  }, [netflixOriginals])
  
  return (
    <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
      <div className='bg-gradient-to-b absolute top-0 left-0 h-[95vh] w-screen -z-10'>
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} alt='Movie Poster' fill style={{objectFit:"cover"}} priority/>
      </div>
      <h1 className='text-2xl  font-bold md:text-4xl lg:text-7xl'> {movie?.title || movie?.name || movie?.original_name}</h1>
      <p className='max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl'>{movie?.overview}</p>
    </div>
  );
};

export default MovieBanner;
