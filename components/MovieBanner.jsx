
const MovieBanner = ({ imageUrl, title, description }) => {
  return (
    <div className="relative h-96 w-full">
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-r from-transparent to-black"></div>
      <img
        src={imageUrl}
        alt={title}
        className="object-cover h-full w-full"
      />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default MovieBanner;
