import React from 'react';
//import './App.css';
// import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
// import Footer from "./components/footer/Footer";
// import Skills from "./components/skills/Skills";
// import About from "./components/pages/Home";
// import Resume from "./components/pages/Resume";
import UserData from "./components/pages/UserData";
// import Portfolio from "./components/pages/Portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <NavBar />
      <Switch>
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route exact path="/portfolio" render={(props) => <Portfolio {...props} projects={this.state.projects} />} /> */}
      {/* <Route exact path="/jobs" component={Jobs} /> */}
      <Route exact path="/userData" component={UserData} />
      </Switch>
      {/* <Footer /> */}
      {/* <Skills /> */}
    </Router>
  
  );
}

export default App;
