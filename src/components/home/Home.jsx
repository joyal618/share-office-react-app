import React from 'react';
import "./Home.css";
import NavBar from "../nav-bar/NavBar";
import HomePage from "../home-page/HomePage";
import Footer from "../footer/Footer";
import Customers from "../customers/Customers";
import CoWorker from "../co-worker/CoWorker";
import WorkSpace from "../work-space/WorkSpace";

function Home() {
  return (
    <div className="home">
        <NavBar />
        <HomePage />
        <WorkSpace />
        <CoWorker />
        <Customers />
        <Footer />
    </div>
  );
}

export default Home;