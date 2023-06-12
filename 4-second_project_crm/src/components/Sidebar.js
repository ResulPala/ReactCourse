import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';


function Sidebar() {
    return (

        <div className="sidebar">
            <ListGroup>
                <ListGroupItem>      <NavLink to="/products"  >Ürünler</NavLink>
                </ListGroupItem>
                <ListGroupItem>      <NavLink to="/categories" >Kategoriler</NavLink>
                </ListGroupItem>
                <ListGroupItem>      <NavLink to="/customers" >Müşteriler</NavLink>
                </ListGroupItem>
                <ListGroupItem>      <NavLink to="/orders" >Sipariş & Fatura</NavLink>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default Sidebar;
