import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class Book extends Component {

    render() {
        return(
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Book Title</Card.Title>
              
              <Button variant="light">replace with nupLink comp</Button>
            </Card.Body>
          </Card> 
        )
    }
}

export default Book;