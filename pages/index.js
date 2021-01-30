import Head from "next/head";
import { getContentData } from "../lib/content";
import Col from "react-bootstrap/Col";
import Footer from "../components/Footer";

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
        <title>Accueil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-3">
        <h1 className="title pb-3">{contentHomePage.title}</h1>
        <Col>
          <div
            dangerouslySetInnerHTML={{ __html: contentHomePage.contentHtml }}
          />
        </Col>
      </main>
    </div>
  );
}
