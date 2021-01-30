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
    <main>
      <h1 className="title">{contentContact.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentContact.contentHtml }} />
      <div>
        <form action="#">
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Prénom" />
          <input type="text" placeholder="Sujet de la demande" />
          <textarea placeholder="Votre message"></textarea>
        </form>
      </div>
    </main>
  );
}
