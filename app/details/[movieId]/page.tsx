import Image from "next/image";
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
  const id = params.movieId;
  let data = await getData(id);
  data = data.results[0];
  const name = data.title || data.name || data.original_name;
  const description = data.overview;
  const posterPath = `https://image.tmdb.org/t/p/w500${
    data.backdrop_path || data.poster_path
  }`;
  const vote_count = data.vote_count;
  const vote_average = data.vote_average;
  const release_date = data.release_date;
  const genreIdArray = data.genre_ids;
  console.log(genreIdArray);
  const movieGenres = genres.MOVIE; // {action:12, Animation:28}
  const seriesGenres = genres.TV_SHOW;

  const currentMovieGenres = convertGenreIdToString(genreIdArray, movieGenres);
  const currentSeriesGenres = convertGenreIdToString(genreIdArray, movieGenres);

  return (
    <div className="mx-3">
      <Image src={posterPath} alt="Poster Image" width={100} height={500} />
      <div>
        <h1 className="text-2xl  font-bold md:text-4xl lg:text-7xl">{name}</h1>
        <p className="text-xs md:text-lg lg:text-2xl">{description}</p>
        <p>Vote count: {vote_count}</p>
        <p>Vote average: {vote_average}</p>
        <p>Release date: {release_date}</p>
        {currentMovieGenres.map((genre) => (
          <p>{genre}</p>
        ))}
      </div>
    </div>
  );
};

export default Details;
