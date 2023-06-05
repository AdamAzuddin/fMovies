"use client";

import {
  useSession,
  getProviders,
  ClientSafeProvider,
  LiteralUnion,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";
import { useState, useEffect } from "react";

const WatchLaterPage = async () => {
  //TODO: Fetch data from api and pass an array of strings as props to List
  const { data: session } = useSession();
  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  return (
    <div>
      {session?.user ? 
        <></> 
        : 
        <div>
          Sign in to view your watch later list
        </div>}
    </div>
  )
};

export default WatchLaterPage;
