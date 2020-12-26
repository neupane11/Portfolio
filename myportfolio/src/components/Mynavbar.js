import React from "react";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//import logo from '../assets/img/logoo.webp'

const Mynavbar = () => {
  const [navbar, setMynavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setMynavbar(true);
    } else {
      setMynavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div className="nav">
      <Navbar
        className={navbar ? "navbar active" : "navbar"}
        collapseOnSelect
        expand="lg"
        fixed="top"
      >
        <Navbar.Brand className="brand" href="#home">
          Sandip Neupane
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Mynavbar;
