"use client";
import useDetails from "@hooks/useDetails";
import genres from "@constants/genres.json";
import { ClockIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/20/solid";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { GenreType } from "@typings";


function convertGenreIdToString(idArray: [number], genres: GenreType) {
  let results = [];
  for (let index = 0; index < idArray.length; index++) {
    const currentId = idArray[index];
    for (const genre in genres) {
      if (genres[genre] === currentId) {
        results.push(genre);
      }
    }
  }
  return results;
}


const Details = () => {
  const jsonDataString: any = useDetails((state) => state.jsonData);
  const jsonData = JSON.parse(jsonDataString);
  console.log(jsonData);
  const description = jsonData.overview;
  const name = jsonData.title || jsonData.name || jsonData.original_name;
  const posterPath = `https://image.tmdb.org/t/p/w500${
    jsonData.backdrop_path || jsonData.poster_path
  }`;
  const vote_count: number = jsonData.vote_count;
  const vote_average: number = jsonData.vote_average;
  const release_date: string = jsonData.release_date;
  let currentGenres: string[] = [];
  const media_type: string = jsonData.media_type;

  const genreIdArray = jsonData.genre_ids;
  console.log(genreIdArray);
  const movieGenres = genres.MOVIE;
  const seriesGenres = genres.TV_SHOW;

  if (media_type === "movie") {
    
  currentGenres = convertGenreIdToString(genreIdArray, movieGenres);
  } else{
    
  currentGenres = convertGenreIdToString(genreIdArray, seriesGenres);

  }

  return (
    <div className="mx-4 mt-4">
      {jsonData ? (
        <div className="flex">
          <img
            src={posterPath}
            alt="Poster image"
            className="h-[150px] w-[220px] md:h-[160px] md:w-[320px] lg:h-[400px] lg:w-[800px]"
          />
          <div className="ml-5">
            <div className="flex">
              <h1
                className="text-2xl  font-bold md:text-4xl lg:text-7xl"
                style={{ marginTop: "0px" }}
              >
                {name}
              </h1>
              <p className="ml-auto">{release_date}</p>
            </div>

            <div className="flex space-x-7 text-xs md:text-sm lg:text-2xl">
              {currentGenres.map((genre:string) => (
                <p>{genre}</p>
              ))}

              <p>{vote_average}</p>

              <p>{vote_count} votes</p>
            </div>
            <h2 className="text-xl md:text-xl lg:text-2xl">{description}</h2>
          </div>
        </div>
      ) : (
        <div>No further information found</div>
      )}
    </div>
  );
};

/* watch later(Outline): <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
Watch Later(Solid):<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clipRule="evenodd" />
</svg>

 */
/*Favourites(Outline): <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>
Favourites(Solid): <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>

 */
/* Watched(Outline): <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
watched (Solid): <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
</svg>

 */
export default Details;
