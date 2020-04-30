import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';


class Header extends Component {

    render() {
        return(
            <Navbar variant="light">
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/../assets/images/"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              React Bootstrap
            </Navbar.Brand>
          </Navbar>  
        )
    }
}

export default Header;