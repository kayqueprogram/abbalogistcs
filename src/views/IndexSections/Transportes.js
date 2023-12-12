import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "reactstrap";

class Transportes extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          <section className="section pb-0 section-components">
            <Row xs={1} md={2} className="g-4">
              <Col className="card-lift--hover">
                <a href="/truck">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://cdn.discordapp.com/attachments/995485098336067675/1182533708704649306/hero.jpg?ex=65850b56&is=65729656&hm=574f7456b408f1b718c011bc6dc01826dbcdbfd3bed18f2fb809239ee59e92f5&"
                    />
                    <Card.Body>
                      <Card.Title>Caminhões</Card.Title>
                      <Card.Text>
                      A ABBA Logistics é uma empresa especializada em oferecer
                      soluções de transporte de carga eficientes e confiáveis.
                      Nossos parceiros possuem...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>

              <Col className="card-lift--hover">
                <a href="/plane">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://cdn.discordapp.com/attachments/995485098336067675/1182753818832814140/plane_cropped.jpg?ex=6585d854&is=65736354&hm=838a140a9e59da9a0b6a13000a247cb4a44dec21dc83ce10634dfd38f14d7a8f&"
                    />
                    <Card.Body>
                      <Card.Title>Aviões</Card.Title>
                      <Card.Text>
                      Temos cobertura nacional e internacional, e para isso,
                      estabelecemos parcerias com as empresas de transporte
                      aéreo mais renomadas do...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>

              <Col className="card-lift--hover">
                <a href="/ship">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://cdn.discordapp.com/attachments/995485098336067675/1182758993978998784/ship_1.jpg?ex=6585dd26&is=65736826&hm=6e81498f45db41f24821340f0c2b2ce6e8915afc00202238fc45a232c7ad7c57&"
                    />
                    <Card.Body>
                      <Card.Title>Navios</Card.Title>
                      <Card.Text>
                      A ABBA Logistics tem orgulho de anunciar sua cobertura
                      global estratégica, permitindo a entrega de cargas de e
                      para qualquer parte do...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default Transportes;
