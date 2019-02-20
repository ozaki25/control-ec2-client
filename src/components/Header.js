import React from 'react';
import { Navbar } from '@blueprintjs/core';

function Header() {
  return (
    <Navbar className="bp3-dark">
      <Navbar.Group>
        <Navbar.Heading>EC2 Manager</Navbar.Heading>
        <Navbar.Divider />
      </Navbar.Group>
    </Navbar>
  );
}

export default Header;
