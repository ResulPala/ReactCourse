import React, { Component } from "react";
import {Nav, NavItem, NavLink } from 'reactstrap';


export default class CustomNavbar extends Component{

    render(){
        return(
        <Nav>
            <NavItem>
                <NavLink href='#'>Link</NavLink>
            </NavItem>
            <NavItem>
                {cart.map((product) => (
                    <h1> isim {product.product.productName} - adet {product.quantity}</h1>
                ))}
            </NavItem>
        </Nav>
        )
    }
}