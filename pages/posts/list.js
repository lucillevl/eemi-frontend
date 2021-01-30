import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import React from "react";
import Head from "next/head";

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
          {data.map(({ id, date_add, title, picture }) => (
            <div className="row row-cols-12">
              <Card style={{ width: "18rem" }} key={id} className="">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>{date_add}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </CardGroup>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch("http://localhost:3000/posts");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };
}
