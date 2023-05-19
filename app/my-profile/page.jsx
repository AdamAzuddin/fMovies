"use client";
import { signOut, useSession, getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

const MyProfilePage = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    /* Authenticated User */

    /* Guest User */
    <div className="flex flex-col items-center justify-center w-full h-screen text-white sm:p-0">
      {session?.user ? (
        <>
          <div className="flex flex-col items-center justify-start w-full max-w-screen-sm h-full px-4 py-6">
            <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center">
              <div className="relative flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 overflow-hidden rounded-full bg-gray-300 sm:my-0 sm:block">
                <img
                  src={session?.user.image}
                  alt="Profile Picture"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col items-center justify-center w-full sm:pl-16">
                <h1 className="text-2xl font-bold mb-4">
                  {session?.user.name}
                </h1>
                <p className="text-lg font-mediummy-2">{session?.user.email}</p>
              </div>
            </div>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-5"
              onClick={() => {
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </>
      ) : (
        <>{providers && <h1>Please Sign In</h1>}</>
      )}
    </div>
  );
};

export default MyProfilePage;
