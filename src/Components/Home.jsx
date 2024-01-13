import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row, Container, Form, Button, Card } from "react-bootstrap";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((response) => {
        const recipelist = response.data;
        setRecipes(recipelist.recipes);
        console.log(recipelist);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Row className="ms-5 mt-5">
        {recipes.length > 0 ? (
          recipes.map((recipe, index) => (
            <Col key={index} className="mb-5" sm={12} md={6} lg={4} xl={3}>
              <Card style={{ width: "18rem" }}>
                <Card.Img height={"200px"} variant="top" src={recipe.image} />
                <Card.Body>
                  <Card.Title>{recipe.name}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-danger">Nothing to display</p>
        )}
      </Row>
    </>
  );
}

export default Home;
