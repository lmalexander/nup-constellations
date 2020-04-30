import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Home from "./pages/Home";
import LoveChilds from "./pages/LoveChilds"


function App() {
  return (
    <Router>
      <Container>
        <div className="main">
          {/* <Header /> */}
          {/* <Navbar />
           <Route exact path="/" component={Home} />
          <Route exact path="/lovechilds" component={LoveChilds} /> */}
         </div> 
      </Container>  
    </Router>
  );
}

export default App;
