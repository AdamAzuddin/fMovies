"use client";

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
