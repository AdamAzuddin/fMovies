import "@styles/globals.css";
import MovieRow from "@components/MovieRow";
import MovieBanner from "@components/MovieBanner";

const Home = () => {
  const movieBannerData = {
    imageUrl: "https://example.com/banner.jpg",
    title: "Movie Title",
    description: "This is a movie description.",
  };

  const movieRowData = [
    {
      id: 1,
      poster: "https://via.placeholder.com/300x450",
      title: "Movie 1",
    },
    {
      id: 2,
      poster: "https://via.placeholder.com/300x450",
      title: "Movie 2",
    },
    {
      id: 3,
      poster: "https://via.placeholder.com/300x450",
      title: "Movie 3",
    },
    {
      id: 4,
      poster: "https://via.placeholder.com/300x450",
      title: "Movie 4",
    },
    {
      id: 5,
      poster: "https://via.placeholder.com/300x450",
      title: "Movie 5",
    },
    {
      id: 6,
      poster: "https://via.placeholder.com/300x450",
      title: "Movie 6",
    },
    {
      id: 7,
      poster: "https://via.placeholder.com/300x450",
      title: "Movie 7",
    },
    {
      id: 8,
      poster: "https://via.placeholder.com/300x450",
      title: "Movie 8",
    },
  ];

  return (
    <div className="container mx-auto py-6">
      <MovieBanner
        imageUrl={movieBannerData.imageUrl}
        title={movieBannerData.title}
        description={movieBannerData.description}
      />
      <MovieRow title="Action Movies" movies={movieRowData} />
    </div>
  );
};

export default Home;
