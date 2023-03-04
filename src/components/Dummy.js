import React from "react";
import { Container } from "react-bootstrap";
import FoodImage from "../assets/images/food-table.jfif";

function Dummy() {
  return (
    <div>
      {" "}
      <Container fluid className="px-0 bg-img">
        <img className="img w-100 img-fluid" src={FoodImage} alt="food-table" />
      </Container>
      <div className="open-qoute p-5 rounded text-white-50">
        <h3>Delicious Food, Delivered To You</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Dummy;
