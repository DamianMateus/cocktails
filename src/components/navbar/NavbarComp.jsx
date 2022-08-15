import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "bootstrap";
import { fetchCocktails } from "../../redux/actions/ingredientAction";
import navbar from "../navbar/navbar.css";

export default function NavbarComp() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const cocktailLink = useNavigate();
  const ingredients = useSelector((state) => state.allIngredients.ingredients);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(fetchCocktails(term));
    setTerm("");
    cocktailLink(`/cocktail/${term}`);
  };

  const changeHandler = (e) => {
    setTerm(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setTerm(searchTerm);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Cocktails App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/ingredients">Ingredients</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={submitHandler}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={term}
                onChange={changeHandler}
              ></Form.Control>
              <Button variant="outline-success" type="submit">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="dropdown">
        {ingredients
          .filter((item) => {
            const searchTerm = term.toLocaleLowerCase();
            const strIngredient1 = item.strIngredient1.toLocaleLowerCase();
            return (
              searchTerm &&
              strIngredient1.startsWith(searchTerm) &&
              strIngredient1 !== searchTerm
            );
          })
          .slice(0, 10)
          .map((ingredient, index) => (
            <div
              onClick={() => onSearch(ingredient.strIngredient1)}
              className="dropdown-row"
              key={index}
            >
              {ingredient.strIngredient1}
            </div>
          ))}
      </div>
    </>
  );
}
