import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

function Header() {
  return (
    <Navbar color="dark" dark>
      <NavbarBrand href="/">EC2 Manager</NavbarBrand>
    </Navbar>
  );
}

export default Header;
