import Head from "next/head";
import Layout from "../components/Layout";
import { getContentData } from "../lib/content";

export async function getStaticProps() {
  const contentHomePage = await getContentData("index");
  return {
    props: {
      contentHomePage,
    },
  };
}

export default function Home({ contentHomePage }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">{contentHomePage.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: contentHomePage.contentHtml }}
        />
      </main>
    </div>
  );
}
