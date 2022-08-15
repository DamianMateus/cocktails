import React from "react";
import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const CoktailDetail = () => {
  const drinks = useSelector((state) => state.drinks);
  const { strDrink, strDrinkThumb, idDrink } = drinks;

  var drink = Object.keys(drinks).map(function (key) {
    return [Number(key), drinks[key]];
  });
  const renderList = drink.map((value, index) => {
    return (
      <Col key={index}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={value[1].strDrinkThumb} />
          <Card.Body>
            <Card.Title>{value[1].strDrink}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Container>
      <Row xs={1} md={3} className="g-4">
        {renderList}
      </Row>
    </Container>
  );
};

export default CoktailDetail;
