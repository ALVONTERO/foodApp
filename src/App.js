import Navbars from "./components/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dummy from "./components/Dummy";
import { useState } from "react";
import Card from "./components/Card";
import { Col, Row } from "react-bootstrap";
function App() {
  const [Counter, setCounter] = useState(0);
  const [dummyItems, setDummyItems] = useState([
    { dummyItem: "Dummy1", price: `50$` },
    { dummyItem: "Dummy2", price: `40$` },
    { dummyItem: "Dummy3", price: `30$` },
    { dummyItem: "Dummy4", price: `80$` },
  ]);
  console.log();
  return (
    <div className="App">
      <Navbars counter={Counter} />
      <Dummy />
      <Card>
        
          <h4 className="me-3 text-white text-center">Shop items</h4>
        
        {dummyItems.map((item, i) => {
          return (
            <Row className="w-100 text-center" key={i}>
              <Row className="p-4 mb-4 mt-2 align-items-center">
                <Col lg={6} className="col-md-4">
                  <p className=" text-white">{item.dummyItem}</p>
                </Col>
                <Col lg={6} className="ms-auto col-md-4">
                  <button className="me-auto rounded py-2 px-3">
                    Add
                    <div className="text-black-50 mx-2 p-0">{item.price}</div>
                  </button>
                </Col>
              </Row>
              <Row>
                <div className="after-item" key={Math.random()}></div>
              </Row>
            </Row>
          );
        })}
      </Card>
    </div>
  );
}

export default App;
