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
  const [itemCounter, setItemCounter] = useState(null);
  const [dummyItems, setDummyItems] = useState([
    { dummyItem: "Dummy1", price: `50$`, count: 0 },
    { dummyItem: "Dummy2", price: `40$`, count: 0 },
    { dummyItem: "Dummy3", price: `30$`, count: 0 },
    { dummyItem: "Dummy4", price: `80$`, count: 0 },
  ]);
  const [Cart, setCart] = useState([]);
  const [Show, setShow] = useState(false);
  useEffect(() => {
    console.log(Cart);

    return () => {};
  }, [Counter, Cart]);

  const handleAdd = (...items) => {
    let newCart = Cart.filter((item) => {
      return item.dummyItem === items[0];
    });
    const indexOfItem = Cart.indexOf(newCart.dummyItem);
    console.log(newCart);
    newCart.length === 0
      ? setCart((prevState) => {
          return [
            ...prevState,
            { dummyItem: items[0], price: items[1], count: items[2] },
          ];
        })
      : setCart((prevState) => {
          return [
            ...prevState,
            { dummyItem: items[0], price: items[1], count: items[2] + newCart.length },
          ];
        });
  };
  const onSubmit = (e) => {
    setCounter((prevState) => {
      return prevState + 1;
    });
  };
  const cartClicked = (e) => {
    e.preventDefault();
    return setShow(!Show);
  };
  const removeHandler = (e) => {
    e.preventDefault();
    setCounter(Counter - 1);
    const x = JSON.parse(e.target.value);
    let newCart = Cart.filter((i) => i.dummyItem != x[0]);
    setCart(newCart);
  };
  return (
    <div className="App">
      <div
        onClick={cartClicked}
        className={`d-${Show ? "block" : "none"} bg-images`}
      >
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
                  onClick={() =>
                    handleAdd(item.dummyItem, item.price, item.count)
                  }
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
      {Cart.length === 0 ? null : (
        <Card className={`d-${Show ? "block" : "none"} cartage`}>
          {Cart.map((item, i) => {
            return (
              <>
                <Row className="w-100 text-center" key={i}>
                  <CartMarket
                    key={i}
                    itemCounter={itemCounter}
                    className=""
                    item={JSON.stringify(Object.values(item))}
                    remove={removeHandler}
                    dummyItem={item.dummyItem}
                    price={item.price}
                  />
                  <Row>
                    <div className="after-item" key={Math.random()}></div>
                  </Row>
                </Row>
              </>
            );
          })}
        </Card>
      )}
    </div>
  );
}

export default App;
