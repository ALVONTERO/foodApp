import { Col, Row } from "react-bootstrap";

function CartMarket(props) {
  return (
    <Row className={`mb-2 mt-4 ${props.className}`}>
      <Col className="cart d-flex justify-content-center">
        <h5 className="text-white">{props.dummyItem}</h5>
        <input className="w-25 h-50 mx-2 p-3 border-0 rounded " type={"text"} readOnly disabled value={props.itemCounter} />
      </Col>
      <Col className="cart d-flex justify-content-center">
        <h5 className="text-white">{props.price}</h5>
        <button
          value={props.item}
          onClick={(e) => props.remove(e)}
          className="m-auto mb-3 rounded py-2 px-3"
        >
          Remove
        </button>
      </Col>
    </Row>
  );
}

export default CartMarket;
