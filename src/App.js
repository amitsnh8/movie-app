import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Header';
import Footer from './components/Footer';
import Main from './components/Layout';
import MovieDetail from "./components/MovieDetails";
import Home from "./components/Home";

function App() {
  return (
    <><Router>
    
   <Navbar />
      

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/moviedetail/:id">
          <MovieDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    
   <Footer />
  </Router>
    </>
  );
}

export default App;
