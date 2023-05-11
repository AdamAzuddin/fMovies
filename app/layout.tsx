"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faBell,
  faSearch,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
  title: "fMovie",
  description: "Find and save movies to watch with friends and family",
};

const Layout = ({ children }: any) => {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-jf4P7V+5K5nYV5aH97tbJ5X9GZ4+FX8Vp4uAfFK4Zl7yB6vI8WfALGJDT1Bjs9ZcPHzZ/vW7wJ6zfvU6x1h3mw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className="bg-primary-background text-white">
        <header className="flex py-4">
          <div className="sm:hidden ml-4">
            <button className="flex items-center justify-center hover:bg-gray-500">
              <FontAwesomeIcon icon={faBars} style={{ fontSize: '1.3em' }}  />
            </button>
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
            <div className="flex items-center justify-center space-x-4">
              <button className="flex items-center justify-center hover:bg-gray-500">
                <FontAwesomeIcon icon={faSearch} style={{ fontSize: '1.3em' }}  />
              </button>
              <div>
                <button className="full flex items-center justify-center hover:bg-gray-500">
                  <FontAwesomeIcon icon={faBell} style={{ fontSize: '1.3em' }}  />
                </button>
              </div>
              <div className="rounded-full w-10 h-10 overflow-hidden">
                <img
                  src="/profile.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
