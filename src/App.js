import './App.css';
import React from 'react';
import { Route, HashRouter } from "react-router-dom";
import Home from "./components/home/Home";
 

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
    </HashRouter>
  );
}

export default App;
