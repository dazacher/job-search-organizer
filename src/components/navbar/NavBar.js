import React from "react";
import { Nav, Navbar, Image, Col, Row } from "react-bootstrap";
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
      <div className="siteHeader">
        <Row>
          <Col xs={12} md={9} lg="auto" className="responsive">
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
          <Col xs={12} md={9} lg="auto" className="responsive row1">
            <div>
            <Row>
              <Col>
                <h3 className="align-top">Dee Ann Scanniello</h3>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={9} lg="auto">
                <h5>1901 W. Madison Street, #419</h5>
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={9} lg="auto">
                <h5> Phoenix, AZ  85009</h5>
              </Col>
            </Row>
            </div>
          </Col>
          <Col xs={12} md={9} lg="auto" className="jobSearch">
            <Row>
              <Col xs={12} md={9} lg="auto">
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
          </Col>
        </Row>
      </div >
      <Navbar className="navbar" responisve="true" variant="dark" expand="lg">

        <NavLink to="/">
          <Navbar.Brand>
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
          </Navbar.Brand>
        </NavLink>
      </Navbar>

    </>
  );
};

export default NavbarRx;