import React, { useEffect, useState } from "react";

import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ children }) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand className="text-white" href="/">
        <img src="/cocktail.png" style={{ width: "2rem" }} className="mr-2" />
        {`CocktailsCards`}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link href={`/`} passHref>
            <Nav.Link>{`Accueil`}</Nav.Link>
          </Link>
          <Link href={`/posts/list`} passHref>
            <Nav.Link>{`Cocktails`}</Nav.Link>
          </Link>
          <Link href={`/contact`} passHref>
            <Nav.Link href="/contact">{`Contact`}</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
