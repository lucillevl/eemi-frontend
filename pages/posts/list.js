import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Head from "next/head";
import React from "react";
import { getAllPosts } from "../../lib/post";
require("../../mocks");

export default function List({ data }) {
  return (
    <>
      <Head>
        <title>Liste Posts</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="d-flex container">
        <CardGroup>
          {data.map(({ idDrink, strInstructions, strDrink, strDrinkThumb }) => (
            <div className="row row-cols-12" key={idDrink}>
              <Card style={{ width: "18rem" }} className="">
                <Card.Img variant="top" src={strDrinkThumb} />
                <Card.Body>
                  <Card.Title>{strDrink}</Card.Title>
                  <Card.Text>{strInstructions}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      </main>
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
