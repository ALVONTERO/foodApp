import Navbars from "./components/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Dummy from "./components/Dummy";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import CartMarket from "./components/CartMarket";
import blackImg from "./assets/images/black.webp";
import { Col, Row } from "react-bootstrap";
function App() {
  const [Counter, setCounter] = useState(0);
  const [dummyItems, setDummyItems] = useState([
    { dummyItem: "Dummy1", price: `50$` },
    { dummyItem: "Dummy2", price: `40$` },
    { dummyItem: "Dummy3", price: `30$` },
    { dummyItem: "Dummy4", price: `80$` },
  ]);
  const [Cart, setCart] = useState([]);
  const [Show, setShow] = useState(false)
  useEffect(() => {
    console.log(Cart);

    return () => {};
  }, [Counter, Cart]);

  const onSubmit = (e) => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };
  const cartClicked = (e) => { 
    e.preventDefault();
    return setShow(!Show)
   }
  return (
    <div className="App">
      <div onClick={cartClicked} className={`d-${Show?"block":"none"} bg-images`}>
        <img className="w-100 float-center  " src={blackImg} />
      </div>
      <Navbars click={cartClicked} counter={Counter} />
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
                <Col
                  lg={6}
                  onClick={() => {
                    setCart((prevState) => {
                      return [
                        ...prevState,
                        { dummyItem: item.dummyItem, price: item.price },
                      ];
                    });
                  }}
                  className="ms-auto col-md-4"
                >
                  <button
                    onClick={onSubmit}
                    className="me-auto rounded py-2 px-3"
                  >
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
      {Cart.map((item, i) => {
        return (
          <CartMarket key={i} dummyItem={item.dummyItem} price={item.price} />
        );
      })}
    </div>
  );
}

export default App;
