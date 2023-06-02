import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

const NavbarComponent = () => {
  return (
    <Navbar color="dark" >
      <Nav>
        <NavItem>
          <NavLink href="/">Ana Sayfa</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/kategori">Kategori</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/sepet">Sepet</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
