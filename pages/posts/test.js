import Layout from "../../components/Layout";
import React from "react"

require('../../mocks')


export default function Test({ data }) {

  return (
    <Layout>
    {data.test}
    </Layout>
  )
}

export async function getStaticProps(context) {
    // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch('http://localhost:3000/posts')
  const data = await res.json()
  console.log(data, "-----------------")
  return {
    props: {
      data,
    },
  }
}