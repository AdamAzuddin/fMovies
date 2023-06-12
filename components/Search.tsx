import { useState } from "react";
import Suggestions from "@components/Suggestions" 
import theMovieDb from "@lib/themoviedb";
import { ChangeEvent } from "react";
import { toast } from "react-toastify";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleResetSuggestion = () => {
    setSuggestions([]);
  };


  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
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

  function successCB(data:string) {
    const searchArray=JSON.parse(data).results
    setSuggestions(searchArray)
  };
          
  function errorCB(data: String) {
            toast.error(`${data}`, {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
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
      </div>
      <div className="absolute top-12 overflow-y-auto max-h-40 !scrollbar-track-transparent !scrollbar-thumb-slate-700 !scrollbar-thin w-full">
        <Suggestions jsonArray={suggestions} resetSuggestion={handleResetSuggestion}/>
      </div>
    </div>
  );
}
