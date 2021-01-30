import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState, useEffect } from "react";

const NavBar = ({ children }) => {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Navbar.Brand href="/">MagicCards</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Accueil</Nav.Link>
        <Nav.Link href="/posts/list">Liste des postes</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
