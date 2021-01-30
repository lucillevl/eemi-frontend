import Layout from "../../components/Layout";
import React from "react";

require("../../mocks");

export default function List({ data }) {
  return (
    <>
      {data.map(({ id, date_add, title, picture }) => (
        <div key={id}>
          <h2>{title}</h2>
          <p>{date_add}</p>
          <img src={picture} />
        </div>
      ))}
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
