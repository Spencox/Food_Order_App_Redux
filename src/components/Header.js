import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router";

const Header = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;
  console.log(userInfo)
  const handleSignOut = (event) => {
    console.log("Inside signout Function");
    event.preventDefault();
    dispatch(logout());
  };

  const navigate = useNavigate()

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else if (userInfo && userInfo.isAdmin) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, []);


  return (
    <header>
      <Navbar
        bg="info"
        navbar="light"
        variant="dark"
        expand="lg"
        collapseOnSelect
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Food Order App</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="mr-auto">
              {userInfo && (<LinkContainer to="/profile">
                <Nav.Link>
                  <i className="bi bi-bucket-fill"> Profile</i>
                </Nav.Link>
              </LinkContainer>
              )}

              {!userInfo && (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="bi bi-box-arrow-in-right"> Log In</i>
                  </Nav.Link>
                </LinkContainer>
              )}

              {userInfo && userInfo.isAdmin && (
                <LinkContainer to="/admin">
                  <Nav.Link>
                    <i className="bi bi-gear"> AdminDashboard</i>
                  </Nav.Link>
                </LinkContainer>
              )}
              {userInfo && (
                <LinkContainer to="/login" onClick={handleSignOut}>
                  <Nav.Link>
                    <i className="bi bi-box-arrow-in-right"> Sign Out</i>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
