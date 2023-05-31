import { Movie } from "@typings";
import Image from "next/image";
import { useRouter } from "next/navigation";
import useDetails from "@hooks/useDetails";

interface Props {
  movie: Movie;
}


const Thumbnail = ({ movie }: Props) => {
  const router = useRouter();

  const jsonData = movie;
  const jsonString =JSON.stringify(movie)
  // access setJsonDara function from the useDetails Hook
  const setJsonData = useDetails((state)=> state.setJsonData)
  
  const handleClick = () => {
    setJsonData(jsonString)
    router.push(`/details/${movie.title || movie.name || movie.original_name}`);
  };

  return (
    <div
      className="bg-black cursor-pointer h-[13rem] md:h-[15rem] lg:h-72"
      onClick={handleClick}
    >
      <div className="relative h-28 min-w-[56px] transition duration-200 ease-out md:h-32 md:min-w-[64px] lg:h-44 lg:min-w-[88px]">
        <Image
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt="thumbnail image"
          className=" rounded-sm object-cover md:rounded"
          fill
          sizes="h-28 min-w-[56px] md:h-32 md:min-w-[64px] lg:h-44 lg:min-w-[88px] "
        />
      </div>
      <p className="text-xs md:text-sm lg:text-2xl mt-4 mx-2">
        {movie.title || movie.name || movie.original_name}
      </p>
    </div>
  );
};

export default Thumbnail;
