"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import {
  faBars,
  faBell,
  faSearch,
  fas,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "@components/Header";
import NavHeader from "@components/NavHeader"

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
        <NavHeader/>

        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
