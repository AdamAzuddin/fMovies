"use client";

import "@styles/globals.css";
import NavHeader from "@components/NavHeader";
import Provider from "@components/Provider";
import { PropsWithChildren } from "react";  
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">

      <body className="bg-primary-background text-white">
        <Provider session={undefined}>
          <main className="app">
            <NavHeader />
            {children}
            <ToastContainer/>
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
