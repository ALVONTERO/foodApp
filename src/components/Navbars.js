import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbars.css";

function Navbars(props) {
  return (
    <div>
      <Navbar fixed="top" bg="dark" expand="md">
        <Container>
          <Navbar.Brand className="text-white">React Meals</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="ms-auto">
              <Button
                onClick={(e) => props.click(e)}
                className="cart-btn align-items-center"
              >
                <ShoppingCartIcon />
                Your Cart
                <div className="counter text-white ms-3 p-2 bg-primary rounded-circle">
                  {props.counter}
                </div>
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
