import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";

const NavBar = ({ children }) => {
  return (
    <Navbar className="sticky-top bg-info">
      <Navbar.Brand href="/" className="text-white">
        CocktailsCards
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/" className="text-white">
          Accueil
        </Nav.Link>
        <Nav.Link href="/posts/list" className="text-white">
          Liste des postes
        </Nav.Link>
        <Nav.Link href="/contact" className="text-white">
          Contact
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
