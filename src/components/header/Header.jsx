import React from 'react';
import "./header.css";
import Nav from 'react-bootstrap/Nav';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';

function Header() {
    return (
        <header>
            <div className="header">
                <a href="#" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo" />
                  <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                 <h2>Vite + React</h2> 
                <Nav defaultActiveKey="/home">
                   <Nav.Link eventKey="link-1">Sign Up</Nav.Link>
                   <Nav.Link eventKey="link-2">Login in</Nav.Link>
                </Nav>
            </div>
       </header>
    );
}

export default Header;