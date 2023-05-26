import "@styles/globals.css";
import MovieBanner from "@components/MovieBanner";
import Row from "@components/Row";
import requests from "@utils/requests";

async function getData() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
    //TODO:Add fetch exciting series too
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
}

const Home = async () => {
  const data = await getData();
  const netflixOriginals = data.props.netflixOriginals;
  const trendingNow = data.props.trendingNow;
  const topRated = data.props.topRated;
  const actionMovies = data.props.actionMovies;
  const comedyMovies = data.props.comedyMovies;
  const horrorMovies = data.props.horrorMovies;
  const romanceMovies = data.props.romanceMovies;
  const documentaries = data.props.documentaries;

  return (
    <div className="container mx-auto py-6">
      <MovieBanner netflixOriginals={netflixOriginals} />

      <section className="md:space-y-24">
        <Row title="Trending Now" movies={trendingNow} />
        <Row title="Top Rated" movies={topRated} />
        <Row title="Action Thrillers" movies={actionMovies} />
        {/* My List component */}

        <Row title="Comedies" movies={comedyMovies} />
        <Row title="Scary Movies" movies={horrorMovies} />
        <Row title="Romance Movies" movies={romanceMovies} />
        <Row title="Documentaries" movies={documentaries} />
      </section>
    </div>
  );
};

export default Home;
