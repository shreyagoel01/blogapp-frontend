import React from "react";
import {BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import AllBlogs from "./components/AllBlogs";


function App() {
  return (
    <div className="App">
      
      
      
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/allblogs" component={AllBlogs} />
          <Route path="/" component={Home} />
        </Switch>
      
      </BrowserRouter>

      

      
    </div>
  );
}

export default App;
