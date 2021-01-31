import { BsCheckCircle } from "react-icons/bs";
import Col from "react-bootstrap/Col";
import Head from "next/head";
import { getContentData } from "../lib/content";
import { motion } from "framer-motion";

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
        <link rel="icon" type="image/png" href="/cocktail.png" />
      </Head>
      <main className="pt-3">
        <h1 className="title pb-3">{contentHomePage.title}</h1>
        <Col>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              className="text-center font-weight-bold"
            >
              {contentHomePage.line1}
            </motion.p>
            <motion.p style={{ transform: "rotate(var(--rotate))" }}>
              {contentHomePage.line2}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line3}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line4}
            </motion.p>
            <motion.ul>
              <li style={{ transform: "rotate(var(--rotate))" }}>
                {contentHomePage.block1}
              </li>
              <li style={{ transform: "rotate(var(--rotate))" }}>
                {contentHomePage.block2}
              </li>
              <li style={{ transform: "rotate(var(--rotate))" }}>
                {contentHomePage.block3}
              </li>
              <li style={{ transform: "rotate(var(--rotate))" }}>
                {contentHomePage.block4}
              </li>
              <li style={{ transform: "rotate(var(--rotate))" }}>
                {contentHomePage.block5}
              </li>
            </motion.ul>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line5}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line6}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line7}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line8}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line9}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line10}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line11}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line12}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line13}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line14}
            </motion.p>
            <motion.p
              style={{ transform: "rotate(var(--rotate))" }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <BsCheckCircle className="mr-2" />
              {contentHomePage.line15}
            </motion.p>
          </motion.div>
        </Col>
      </main>
    </div>
  );
}
