"use client";

import {
  useSession,
  getProviders,
} from "next-auth/react";
import { useState, useEffect } from "react";
import Thumbnail from "@components/Thumbnail";

const WatchLaterPage = async () => {
  //TODO: Fetch data from api and pass an array of strings as props to List
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [list, setList] = useState([]);
  
  let jsonArray = [];


  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/watch-later`);
      const data = await response.json();

      setList(data);
      console.log(data)
    };

    if (session?.user.id) fetchPosts();

  }, [session?.user.id]);
  
  return (
    <div>
      {session?.user ? 
        <>
         <div>
          {list}
         </div>
        </> 
        : 
        <div>
          Sign in to view your watch later list
        </div>}
    </div>
  )
};

export default WatchLaterPage;
