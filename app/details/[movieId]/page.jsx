"use client";
import useDetails from "@hooks/useDetails";
import genres from "@constants/genres.json";
import Row from "@components/Row";
import { ClockIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/20/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { connectToDB } from "@utils/database";
import { useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function convertGenreIdToString(idArray, genres) {
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

const Details = async () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  const jsonDataString = useDetails((state) => state.jsonData);
  const jsonData = JSON.parse(jsonDataString || "");
  await connectToDB();
  const description = jsonData.overview;
  const name = jsonData.title || jsonData.name || jsonData.original_name;
  const posterPath = `https://image.tmdb.org/t/p/w500${
    jsonData.backdrop_path || jsonData.poster_path
  }`;
  const vote_count = jsonData.vote_count;
  const vote_average = jsonData.vote_average;
  const release_date = jsonData.release_date;
  let currentGenres = [];
  const media_type = jsonData.media_type;

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";

  async function getSimilarMovieData() {
    const movieId = jsonData.id;

    const [similarMovie] = await Promise.all([
      fetch(
        `${BASE_URL}/movie/${movieId}/similar?api_key=${API_KEY}&language=en-US`
      ).then((res) => res.json()),
    ]);

    return {
      props: {
        similarMovies: similarMovie.results,
      },
    };
  }

  async function getSimilarSeriesData() {
    const seriesId = jsonData.id;

    const [similarSeries] = await Promise.all([
      fetch(
        `${BASE_URL}/tv/${seriesId}/similar?api_key=${API_KEY}&language=en-US`
      ).then((res) => res.json()),
    ]);

    return {
      props: {
        similarSeries: similarSeries.results,
      },
    };
  }

  const genreIdArray = jsonData.genre_ids;
  const movieGenres = genres.MOVIE;
  const seriesGenres = genres.TV_SHOW;
  let similar;

  if (media_type === "movie") {
    currentGenres = convertGenreIdToString(genreIdArray, movieGenres);
    const data = await getSimilarMovieData();
    similar = data.props.similarMovies;
  } else {
    currentGenres = convertGenreIdToString(genreIdArray, seriesGenres);
    const data = await getSimilarSeriesData();
    similar = data.props.similarSeries;
  }

  async function onClickWatchLater() {
    try {
      const res = await fetch("/api/lists/new-watch-later", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user?.id,
          movie: jsonData,
        }),
      });

      if (res.ok) {
        toast.success("Added to watch later list!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  async function onClickFavourites() {
    try {
      const res = await fetch("/api/lists/new-favourites", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user?.id,
          movie: jsonData,
        }),
      });

      if (res.ok) {
        toast.success("Added to favourites list!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  async function onClickViewed() {
    try {
      const res = await fetch("/api/lists/new-watched", {
        method: "POST",
        body: JSON.stringify({
          userId: session?.user?.id,
          movie: jsonData,
        }),
      });

      if (res.ok) {
        toast.success("Added to watched list!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error(`${error}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <div className="mx-4 mt-4">
      {jsonData ? (
        <div className="container mx-auto py-6">
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
                {currentGenres.map((genre) => (
                  <p>{genre}</p>
                ))}

                <p>{vote_average}</p>

                <p>{vote_count} votes</p>
                {session?.user ? (
                  <>
                    <div className="group flex flex-col">
                      <ClockIcon
                        className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                        onClick={onClickWatchLater}
                      />
                      <span className="ml-1 text-gray-400 opacity-0 group-hover:opacity-100 w-4">
                        Watch Later
                      </span>
                    </div>
                    <div className="group flex flex-col">
                      <HeartIcon
                        className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                        onClick={onClickFavourites}
                      />

                      <span className="ml-1 text-gray-400 opacity-0 group-hover:opacity-100 w-4">
                        Favourites
                      </span>
                    </div>
                    <div className="group flex flex-col">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                        onClick={onClickViewed}
                      />

                      <span className="ml-1 text-gray-400 opacity-0 group-hover:opacity-100 w-4">
                        Watched
                      </span>
                    </div>
                  </>
                ) : (
                  <></>
                )}
              </div>
              <h2 className="text-xl md:text-xl lg:text-2xl">{description}</h2>
            </div>
          </div>

          <Row title="You May Also Like" movies={similar} />
        </div>
      ) : (
        <div>No further information found</div>
      )}
    </div>
  );
};

export default Details;
