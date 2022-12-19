import React from "react";
import layoutStyles from "../styles/Layout.module.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Meta from "./Meta";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Meta />
      <Navbar />
      <div className={layoutStyles.container}>
        <main className={layoutStyles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
