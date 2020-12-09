import React from "react";
import './App.css';
import { Link, Route } from "react-router-dom";
import Home from './components/Home';
import Category from './components/Category';
import Contact from './components/Contact';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="">
      <div className="header">
        <h1>A project by SivaRam - Full stack portfolio project </h1>
      </div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/category">Catrgory</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>

      </Navbar>
      <div className="main-section">
        <h1>React Project with Client side routing</h1>


        <Route exact path="/" component={Home}></Route>
        <Route path="/category" component={Category}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
      <div className="footer">
        @copyright 2020
     </div>
    </div>

  );
}

export default App;
