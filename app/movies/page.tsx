import "@styles/globals.css";
import Row from "@components/Row";
import movie from "@utils/requests/movie"

const MoviesPage = async() => {
  const trending = await movie.fetchTrending()
  const topRated = await movie.fetchTopRated()
  const action = await movie.fetchActionMovies()
  const comedy = await movie.fetchComedyMovies()
  const horror = await movie.fetchHorrorMovies()
  const documentaries = await movie.fetchDocumentaries()
  const upcoming = await movie.fetchUpcoming() 
  
    return (
      <div className="container mx-auto py-6">
  
        <section className="md:space-y-24">
          <Row title="Trending" movies={trending.results}/>
          <Row title="Top Rated" movies={topRated.results}/>
          <Row title="Coming Soon" movies={upcoming.results}/>
          <Row title="Action" movies={action.results}/>
          <Row title="Comedy" movies={comedy.results}/>
          <Row title="Horror" movies={horror.results}/>
          <Row title="Documentaries" movies={documentaries.results}/>
        </section>
      </div>
    );
}

export default MoviesPage