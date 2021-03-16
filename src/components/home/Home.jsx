import React from 'react';
import "./Home.css";
import NavBar from "../nav-bar/NavBar";
import HomePage from "../home-page/HomePage";

function Home() {
  return (
    <div className="home">
        <NavBar />
        <HomePage />

    </div>
  );
}

export default Home;