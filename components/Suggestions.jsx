import React from "react";

function JsonArrayDivs({ jsonArray }) {
  return (
    <div>
      {jsonArray.map((movie) => (
        <div key={movie.id} className="text-xs md:text-xl lg:text-2xl flex">
          {movie.title || movie.name || movie.original_name}
        </div>
      ))}
    </div>
  );
}

export default JsonArrayDivs;
