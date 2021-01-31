import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Head from "next/head";
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
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <main className="pt-2">
        <h1 className="title mb-2">{contentContact.title}</h1>
        <div
          className="text-center"
          dangerouslySetInnerHTML={{ __html: contentContact.contentHtml }}
        />
        <div className="container-fluid">
          <Form id="form">
            <Form.Group controlId="nom">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Nom" />
            </Form.Group>
            <Form.Group controlId="prenom">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="text" placeholder="Prénom" />
            </Form.Group>
            <Form.Group controlId="objet">
              <Form.Label>Sujet de la demande</Form.Label>
              <Form.Control type="text" placeholder="Sujet de la demande" />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="dark" type="submit">
              Envoyer
            </Button>
          </Form>
        </div>
      </main>
    </>
  );
}
