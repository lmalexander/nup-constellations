import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
import NUPLogo from "../../assets/images/arch-reverse-on-black-2.jpg";
import "./style.css"


class Header extends Component {

    render() {
        return(
            <Navbar>
            <Navbar.Brand href="#home" className="navbar" bg="dark" variant="dark" >
              <img
                alt=""
                src={NUPLogo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              constellations
            </Navbar.Brand>
          </Navbar>  
        )
    }
}

export default Header;