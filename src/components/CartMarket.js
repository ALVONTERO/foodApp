import { Col, Row } from "react-bootstrap";

function CartMarket(props) {
  return (
    <Row>
      <Col className="cart d-flex justify-content-center">
        <h5 className="text-white">{props.dummyItem}</h5>
      </Col>
      <Col className="cart d-flex justify-content-center">
        <h5 className="text-white">{props.price}</h5>
      </Col>
    </Row>
  );
}

export default CartMarket;
