import "@styles/globals.css";
import MovieBanner from "@components/MovieBanner";
import movie from "@utils/requests/movie"
import series from "@utils/requests/series"
import Row from "@components/Row";
import requests from "@utils/requests";

async function getData() {
  const [
    netflixOriginals
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
    },
  };
}

const Home = async () => {
  const data = await getData();
  const netflixOriginals = data.props.netflixOriginals;
  const trendingNow = await movie.fetchTrending();
  const topRated = await movie.fetchTopRated();
  const actionMovies = await movie.fetchActionMovies();
  const comedyMovies = await movie.fetchComedyMovies();
  const animationSeries = await series.fetchAnimationeSeriesData()
  const horrorMovies = await movie.fetchHorrorMovies();
  const romanceMovies = await movie.fetchRomanceMovies();
  const documentaries = await movie.fetchDocumentaries();

  return (
    <div className="container mx-auto py-6">
      <MovieBanner netflixOriginals={netflixOriginals} />

      <section className="md:space-y-24">
      <Row title="Trending Now" movies={trendingNow.results} />
      <Row title="Top Rated Movies" movies={topRated.results} />
      <Row title="Action Thrillers" movies={actionMovies.results} />
      <Row title="Comedies" movies={comedyMovies.results} />
      <Row title="Animation Series" movies={animationSeries.results} />
      <Row title="Scary Movies" movies={horrorMovies.results} />
      <Row title="Romance Movies" movies={romanceMovies.results} />
      <Row title="Documentaries" movies={documentaries.results} /> 
      </section>
    </div>
  );
};

export default Home;
