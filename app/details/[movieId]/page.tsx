"use client";
import useDetails from "@hooks/useDetails";
import genres from "@constants/genres.json";
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

export default Details;
