import React, { useEffect, useState } from "react";

import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ children }) => {
  return (
    <Navbar className="sticky-top bg-info">
      <Link href={`/`}>
        <a className="text-white navbar-brand">
          <img src="/cocktail.png" style={{ width: "2rem" }} className="mr-2" />
          {`CocktailsCards`}
        </a>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link href={`/`}>
            <a className="text-white nav-link">{`Accueil`}</a>
          </Link>
          <Link href={`/posts/list`}>
            <a className="text-white nav-link">{`Posts`}</a>
          </Link>
          <Link href={`/contact`}>
            <a className="text-white nav-link">{`Contact`}</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
