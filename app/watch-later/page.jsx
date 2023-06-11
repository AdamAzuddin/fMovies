"use client";

import { useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";
import Thumbnail from "@components/Thumbnail";

const WatchLaterPage = async () => {
  
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        `/api/users/${session?.user.id}/watch-later`
      );
      const res = await response.json();

      const jsonArray = [];
      for (let index = 0; index < res.length; index++) {
        const element = res[index];
        const dataElement = JSON.parse(element.data);
        jsonArray.push(dataElement);
      }

      setList(jsonArray);
    };

    if (session?.user.id) {
      fetchPosts();
    }
  }, [session?.user.id]);

  return (
    <div>
      <h1>Watch Later</h1>
      {session?.user ? (
        <>
          <div className="flex space-x-4">
            {list.map((item, index) => (
              <div key={index}>
                <Thumbnail movie={item}/>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>Sign in to view your watch later list</div>
      )}
    </div>
  );
};

export default WatchLaterPage;
