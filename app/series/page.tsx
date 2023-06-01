import "@styles/globals.css";
import Row from "@components/Row";
import requests from "@utils/requests";
import series from "@utils/requests/series"

async function getData() {
  const [
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
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

const SeriesPage = async() => {
    const data = await getData();
    const trendingNow = data.props.trendingNow;
    const topRated = data.props.topRated;
    const actionMovies = data.props.actionMovies;
    const comedyMovies = data.props.comedyMovies;
    const horrorMovies = data.props.horrorMovies;
    const romanceMovies = data.props.romanceMovies;
    const documentaries = data.props.documentaries;

    const seriesData = await series.fetchTopRatedSeriesData()
  
    return (
      <div className="container mx-auto py-6">
  
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={seriesData.results} />
          <Row title="Action Thrillers" movies={actionMovies} />
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Horror" movies={horrorMovies} />
          <Row title="Romance" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </div>
    );
}

export default SeriesPage