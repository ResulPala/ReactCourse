import React from 'react';
import { NavItem, Navbar, Nav,NavLink } from 'reactstrap';

function CustomNavbar({Links}) {
    return(
        <Navbar>
            <Nav>
                {Links.map((link, index) => (
                    <NavItem key={index}>
                        <NavLink href={link.url}>{link.title}</NavLink>
                    </NavItem>
                ))}
            </Nav>
        </Navbar>
    )
}

export default CustomNavbar;