import { useState } from "react";
import Suggestions from "@components/Suggestions" 
import theMovieDb from "@lib/themoviedb";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  
  let searchSuggestion=[]

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

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Filter the suggestion list based on the search term
    const filteredSuggestions = suggestionList.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    console.log(value)

    theMovieDb.search.getMulti(
      {
        query: value,
        page: 1,
        include_adult: false,
      },
      successCB,
      errorCB
    )
    
  };

  function successCB(data) {
    const searchArray=JSON.parse(data).results
    console.log(searchArray);
    setSuggestions(searchArray)
  };
          
  function errorCB(data) {
            console.log("Error callback: " + data);
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
        <Suggestions jsonArray={suggestions}/>
      </div>
    </div>
  );
}
