import { useState } from "react";
import requests from "@utils/requests";
import theMovieDb from "@lib/themoviedb";
import { error } from "console";

async function getSearchResults() {
  const [search] = await Promise.all([
    fetch(`${requests.fetchSearchResults}`).then((res) => res.json()),
  ]);

  return {
    props: {
      searchResults: search.results,
    },
  };
}

function successCB(data:any) {
	console.log("Success callback: " + data);
};
        
function errorCB(data:any) {
        	console.log("Error callback: " + data);
    };

export default async function Search() {
  theMovieDb.search.getMulti(
    { query: "mario" },
    successCB,
    errorCB
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  /* 
  const data=await getSearchResults();
  const suggestionArray=data.props.searchResults */

  const suggestionList = [
    "Suggestion 1",
    "Suggestion 2",
    "Suggestion 3",
    "Suggestion 1",
    "Suggestion 2",
    "Suggestion 3",
    "Suggestion 1",
    "Suggestion 2",
    "Suggestion 3",
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Filter the suggestion list based on the search term
    const filteredSuggestions = suggestionList.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  return (
    <div className="relative items-center">
      <div className="flex space-x-1">
        <input
          type="text"
          className="block w-full px-4 py-1 border rounded-full focus:outline-none text-sm md:text-xl text-black"
          placeholder="Search for anything"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button className="px-4 text-white rounded-full ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="header-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <div className="absolute top-12 overflow-y-auto max-h-40 !scrollbar-track-transparent !scrollbar-thumb-slate-700 !scrollbar-thin w-full">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="text-xs md:text-xl lg:text-2xl flex">
            <img src="http://goo.gl/vyAs27" alt="image" />
            <p>{suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
