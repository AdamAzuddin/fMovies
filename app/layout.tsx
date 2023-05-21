"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "@styles/globals.css";
import NavHeader from "@components/NavHeader";
import Provider from "@components/Provider";

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
        <Provider session={undefined}>
          <main className="app">
            <NavHeader />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
