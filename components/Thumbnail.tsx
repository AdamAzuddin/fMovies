import { Movie } from "@typings";
import Image from "next/image";

interface Props {
  movie: Movie;
}

const Thumbnail = ({ movie }: Props) => {
  return (
    <div className="bg-primary-background cursor-pointer h-40 md:h-160 lg:h-280">
      <div className="relative h-28 min-w-[60px] transition duration-200 ease-out md:min-w-[90px] md:scale-105 lg:scale-110">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="thumbnail image"
          className="rounded-sm object-cover md:rounded"
          fill
        />
      </div>
      <p className="text-xs md:text-xl lg_text-2xl md:mt-4">{movie.title || movie.name || movie.original_name}</p>
    </div>
    /*  */
  );
};

export default Thumbnail;

/*     <div className="relative h-32 min-w-[80px] cursor-pointer transition duration-200 ease-out md:h-34 md:min-w-[100px] md:scale-105">
      <Image
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt="thumbnail image"
        className="rounded-sm object-cover md:rounded"
        fill
      />
      <div className="absolute inset-x-0 bottom-0 p-4 bg-black bg-opacity-50 text-white">
        <h2 className="text-xl font-bold">Movie Title</h2>
      </div>
    </div> */
