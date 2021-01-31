import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import { getAllPosts, getOnePost } from "../../../lib/post";

require("../../../mocks");

export default function Post({ data }) {
  const mesures = [];
  const ingredients = [];

  Object.entries(data)
    .filter(([key]) => key.includes("Ingredient"))
    .map(([key, value]) => {
      ingredients.push(<div key={key}>{value}</div>);
    });

  Object.entries(data)
    .filter(([key]) => key.includes("Measure"))
    .map(([key, value]) => {
      mesures.push(<div key={key}>{value}</div>);
    });

  return (
    <Container>
      <Row>
        <Col md={4}>
          <img
            className="w-100"
            src={data.strDrinkThumb}
            alt="thumb cocktail"
          />
        </Col>
        <Col md={8}>
          <h1 id="cocktailName">{data.strDrink}</h1>
          <p>
            <span className="bold">Catégorie :</span> {data.strCategory}
          </p>
          <p>
            <span className="bold">Alcolisé :</span> {data.strAlcoholic}
          </p>
          <p>
            <span className="bold">Type de verre :</span> {data.strGlass}
          </p>
        </Col>
      </Row>
      <Row className="w-100 mt-3 mb-3">
        <Accordion className="w-100">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <h2>Instructions</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{data.strInstructions}</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              <h2>Ingrédients et mesures</h2>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <table className="table table-bordered">
                  <tbody>
                    <tr>
                      <td>{ingredients}</td>
                      <td>{mesures}</td>
                    </tr>
                  </tbody>
                </table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Row>
      <style jsx>{`
        .bold {
          font-weight: 700;
        }
      `}</style>
    </Container>
  );
}

export async function getStaticPaths() {
  let data = await getAllPosts();
  const paths = data.map((data) => ({
    params: { id: data.idDrink },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const data = await getOnePost(params.id);
  return {
    props: {
      data,
    },
  };
}
