import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <Navbar className="nav-bar" expand="md">
        <Navbar.Brand>
          <Link to="/" className="title">
            {" "}
            SB
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <Link to="/" className="nav-item">
                {" "}
                Board{" "}
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/backlog" className="nav-item">
                {" "}
                Backlog{" "}
              </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              <Link to="/user-story" className="nav-item">
                {" "}
                User Story{" "}
              </Link>
            </Nav.Link>

            <Nav.Link href="#link">
              <Link to="/sprint" className="nav-item">
                {" "}
                Sprint{" "}
              </Link>
            </Nav.Link>
          </Nav>
          <Form inline>
            <Nav.Link href="#link">
              <Link to="/login" className="nav-item">
                {" "}
                <Button variant="outline-info" className="nav-button">
                  Sign In
                </Button>
              </Link>
            </Nav.Link>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
