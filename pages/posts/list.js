import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Head from "next/head";
import { motion } from "framer-motion";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import { getAllPosts } from "../../lib/post";
require("../../mocks");

export default function List({ data }) {
  return (
    <>
      <Head>
        <title>Liste Posts</title>
        <link rel="icon" type="image/png" href="/cocktail.png" />
      </Head>
      <motion.main
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 3 }}
        className="d-flex container"
      >
        <Row>
          <CardGroup>
            {data.map(
              ({ idDrink, strInstructions, strDrink, strDrinkThumb }) => (
                <Col sm={4}>
                  <motion.div
                    className="divCardsList mb-5"
                    whileHover={
                      ({ rotateX: 10000 }, { rotateY: 10000 }, { scale: 1.1 })
                    }
                  >
                    <Card key={idDrink}>
                      <Card.Img variant="top" src={strDrinkThumb} />
                      <Card.Body>
                        <Card.Title>{strDrink}</Card.Title>
                        <Card.Text>{strInstructions}</Card.Text>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              )
            )}
          </CardGroup>
        </Row>
      </motion.main>
    </>
  );
}

export async function getStaticProps() {
  const data = await getAllPosts();
  return {
    props: {
      data,
    },
  };
}
