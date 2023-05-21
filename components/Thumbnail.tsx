import { Movie } from "@typings";
import Image from "next/image";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="bg-black cursor-pointer h-40 md:h-52">
      <div className="relative h-28 min-w-[60px] transition duration-200 ease-out md:min-w-[90px] md:scale-105 lg:scale-110">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="thumbnail image"
          className=" rounded-sm object-cover md:rounded"
          fill
        />
      </div>
      <p className="text-xs md:text-sm lg-text-2xl mt-4 mx-2">{movie.title || movie.name || movie.original_name}</p>
    </div>
    /*  */
  );
};

export default Thumbnail;
