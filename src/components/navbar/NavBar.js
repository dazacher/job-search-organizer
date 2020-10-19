import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav, Image, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import UserImage from "../../assets/images/Me.jpeg";
import JobSearchImage from "../../assets/images/Job_Search_Image.png";
//import Pdf from "../../assets/images/Dee_Ann_Scanniello_Resume_N.pdf";
import "./NavBar.css"



// const Size = ({ children }) => <Navbar.Brand style={{ fontSize: 'xx-large' }}>{children}</Navbar.Brand>
// const Bold = ({ children }) => <Navbar.Brand style={{ fontSize: 'bold' }}>{children}</Navbar.Brand>

const NavbarRx = () => {
  return (
    <>
    <Navbar className="navbar" responisve="true" variant="dark" expand="lg">

      <NavLink to="/">
        <Navbar.Brand>
          <Row>
            <Col xs={12} md={9} lg={3}>
              <Image
                src={UserImage}
                width="125px"
                height="150px"
                className="img-responsive mx-auto"
                roundedCircle
                id="deeannimg"
                alt="User Image"
              />
            </Col>
            <Col>
              <h1 className="align-top inline">Dee Ann Scanniello</h1>
              <Row>
                <Col>
                  <h4 className="inline">1901 W. Madison Street, #419</h4>
                  <h4 className="inline"> Phoenix, AZ  85009</h4>
                </Col>
              </Row>
            </Col>
          </Row>
        </Navbar.Brand>
      </NavLink>
      <div className="jobSearch">
        <Row>
    <Col  xs={12} md={9} lg={3}>
      <Image
                src={JobSearchImage}
                width="225px"
                height="200px"
                className="img-responsive2"
                id="jobsearch"
                alt="User Image"
              />
      
      </Col>
      </Row>
      </div>
    </Navbar >
    <Navbar className="navbar2">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav classsName="navbar2">
          <NavLink to="/" exact className="nav-link">
            Home
        </NavLink>
          <NavLink to="/jobs" className="nav-link">
            Jobs
        </NavLink>
          <NavLink to="/userData" className="nav-link">
            User
        </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </>
  );
};

export default NavbarRx;