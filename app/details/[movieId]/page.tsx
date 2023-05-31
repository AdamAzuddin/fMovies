"use client"
import useDetails from "@hooks/useDetails";
import genres from "@constants/genres.json";

async function getData(name: string) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${name}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface Props {
  params: { movieId: string };
}

interface GenreType {
  [key: string]: number;
}

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

const Details = async ({ params }: Props) => {
  //TODO: Check params in link, whether it's a movie or tv show
  const jsonDataString = useDetails((state)=> state.jsonData)
  const jsonData = JSON.parse(jsonDataString)
  console.log(jsonData.title)
  const id = params.movieId;
  let data = await getData(id);
  data = data.results[0];
  let name:string='';
  let description:string='';
  let posterPath:string='';
  let vote_count:number=0;
  let vote_average:number=0;
  let release_date:string='';
  let currentMovieGenres:string[]=[];
  if (data) {
    console.log(data);
    name = data && (data.title || data.name || data.original_name);
    description = data.overview;
    posterPath = `https://image.tmdb.org/t/p/w500${
      data.backdrop_path || data.poster_path
    }`;
    vote_count = data.vote_count;
    vote_average = data.vote_average;
    release_date = data.release_date;
    const genreIdArray = data.genre_ids;
    console.log(genreIdArray);
    const movieGenres = genres.MOVIE;
    const seriesGenres = genres.TV_SHOW;
    //TODO: If movie, change currentMovieGenres var value, vice versa

    currentMovieGenres = convertGenreIdToString(
      genreIdArray,
      movieGenres
    );
    const currentSeriesGenres = convertGenreIdToString(
      genreIdArray,
      movieGenres
    );
  } 
  return (
    <div className="mx-4 mt-4">
      {data ? (
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
              {currentMovieGenres.map((genre) => (
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
