import Layout from "../components/Layout";
import { getContentData } from "../lib/content";

export async function getStaticProps() {
  const contentContact = await getContentData("contact");
  return {
    props: {
      contentContact,
    },
  };
}
export default function Contact({ contentContact }) {
  return (
    <Layout>
      <main>
        <h1 className="title">{contentContact.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contentContact.contentHtml }} />
      </main>
    </Layout>
  );
}
