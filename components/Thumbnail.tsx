import { Movie } from "@typings";
import Image from "next/image";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="bg-black cursor-pointer h-[13rem] md:h-[15rem] lg:h-72">
      <div className="relative h-28 min-w-[56px] transition duration-200 ease-out md:h-32 md:min-w-[64px] lg:h-44 lg:min-w-[88px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="thumbnail image"
          className=" rounded-sm object-cover md:rounded"
          fill
        />
      </div>
      <p className="text-xs md:text-sm lg:text-2xl mt-4 mx-2">{movie.title || movie.name || movie.original_name}</p>
    </div>
  );
};

export default Thumbnail;
