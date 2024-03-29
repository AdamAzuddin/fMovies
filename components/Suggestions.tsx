import Image from "next/image";
import { useRouter } from "next/navigation";
import useDetails from "@hooks/useDetails";
import {SuggestionProps } from "@typings";

function Suggestion({ jsonArray, resetSuggestion }: SuggestionProps) {
  const router = useRouter();
  // access setJsonDara function from the useDetails Hook
  const setJsonData = useDetails((state)=> state.setJsonData)

  return (
    <div className="bg-primary-background">
      {jsonArray.map((movie) => (
        
        <div
          key={movie.id}
          className="text-xs md:text-xl lg:text-2xl flex my-2"
          onClick={() => {
            const jsonString = JSON.stringify(movie)
            setJsonData(jsonString)
            resetSuggestion()
            router.push(
              `/details/${movie.title || movie.name || movie.original_name}`
            );
          }}
        >
          <div className="relative h-20 min-w-[40px] transition duration-200 ease-out  md:h-28 md:min-w-[56px] lg:h-36 lg:min-w-[72px]">
            <Image
              src={`https://image.tmdb.org/t/p/w500${
                movie.backdrop_path || movie.poster_path
              }`}
              alt="thumbnail image"
              className=" rounded-sm object-cover md:rounded"
              fill
            />
          </div>

          <p className="ml-2">
            {movie.title || movie.name || movie.original_name}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Suggestion;
