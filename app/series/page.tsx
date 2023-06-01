import "@styles/globals.css";
import Row from "@components/Row";
import series from "@utils/requests/series"

const SeriesPage = async() => {

    const topRated = await series.fetchTopRatedSeriesData()
    const trending = await series.fetchTrendingSeriesData()
    const actionAndAdventure = await series.fetchActionAdventureSeriesData()
    const animation = await series.fetchAnimationeSeriesData()
    const comedy = await series.fetchComedySeriesData()
    const drama = await series.fetchDramaSeriesData()
    const family = await series.fetchFamilySeriesData()

    return (
      <div className="container mx-auto py-6">

        <section className="md:space-y-24">
          <Row title="Trending Today" movies={trending.results}/>
          <Row title="Top Rated" movies={topRated.results} />
          <Row title="Action & Adventure" movies={actionAndAdventure.results} />
          <Row title="Animation" movies={animation.results} />
          <Row title="Comedy" movies={comedy.results} />
          <Row title="Drama" movies={drama.results} />
          <Row title="Family" movies={family.results} />
        </section>
      </div>
    );
}

export default SeriesPage