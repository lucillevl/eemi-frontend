import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Row from "react-bootstrap/Row";
import Truncate from "react-truncate";
import { getAllPosts } from "../../lib/post";
import { motion } from "framer-motion";
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
        <Row className="mt-5">
          <CardGroup>
            {data.map(
              ({ idDrink, strInstructions, strDrink, strDrinkThumb }) => (
                <Col sm={4} key={idDrink}>
                  <Link href={`/posts/list/${idDrink}`}>
                    <a>
                      <motion.div
                        className="divCardsList mb-5"
                        whileHover={
                          ({ rotateX: 10000 },
                          { rotateY: 10000 },
                          { scale: 1.1 })
                        }
                      >
                        <Card>
                          <Card.Img variant="top" src={strDrinkThumb} />
                          <Card.Body className="dark-text">
                            <Card.Title>{strDrink}</Card.Title>
                            <Card.Text lines="3" ellipsis={<span>...</span>}>
                              <Truncate>{strInstructions}</Truncate>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </motion.div>
                    </a>
                  </Link>
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
