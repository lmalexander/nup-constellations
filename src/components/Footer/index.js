import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';
// import NUPSeal from "../../assets/images/NUPress_lockup.jpg";
import "./style.css";


class Footer extends Component {

    render() {
        return(
            <Navbar fixed="bottom" className="footer" variant="dark">
            <Navbar.Brand href="#home">
              Copyright 2020 by Northwestern University Press {' '}
              {/* <img
                alt=""
                src={NUPSeal}
                width="200"
                height="40"
                className="d-inline-block align-top"
              /> */}
            </Navbar.Brand>
          </Navbar>  
        )
    }
}

export default Footer;