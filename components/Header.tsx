"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import { faBars, faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  signIn,
  signOut,
  useSession,
  getProviders,
  LiteralUnion,
  ClientSafeProvider,
} from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

const Header = () => {
  const isUserLoggedIn = false;

  const [providers, setProviders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>(null);
  const [toggleDropdown, settoggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const response = await getProviders();
      setProviders(response);
    })();
  }, []);

  return (
    <header className="flex py-4 items-start">
      <div className="sm:hidden ml-4">
        <button
          className="flex flex-col items-center justify-center hover:bg-gray-500"
          onClick={() => settoggleDropdown((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "1.3em" }} />
        </button>
        {toggleDropdown && (
            <div className="dropdown text-black p-0 m-0">Hi</div>
          )}
      </div>
      <div className=" justify-start logo ml-4">
        <img src="/logo.svg" alt="Logo" className="h-8" />
      </div>

      <nav className=" space-x-4 justify-end ml-5 nav-links">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          Movies
        </a>
        <a href="#" className="hover:text-gray-300">
          TV Shows
        </a>
        <a href="#" className="hover:text-gray-300">
          My List
        </a>
      </nav>
      <div className="flex  space-x-4 justify-end ml-auto mr-4">
        <div className="flex space-x-4">
          <button className="flex hover:bg-gray-500">
            <FontAwesomeIcon icon={faSearch} style={{ fontSize: "1.3em" }} />
          </button>
          {isUserLoggedIn ? (
            <>
              <div>
                <button className="full flex items-center justify-center hover:bg-gray-500">
                  <FontAwesomeIcon
                    icon={faBell}
                    style={{ fontSize: "1.3em" }}
                  />
                </button>
              </div>
              <div className="rounded-full w-10 h-10 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
