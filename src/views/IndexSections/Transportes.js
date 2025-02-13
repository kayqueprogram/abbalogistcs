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
          <section className="section pb-0 section-components" id="services">
            <Row xs={1} md={2} className="g-4">
              <Col className="card-lift--hover">
                <a href="/truck">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://i.imgur.com/7nf3k1r.jpeg"
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
                      src="https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/aviones.webp?alt=media&token=7d48d137-310e-4d72-a208-16b64bb982a7"
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
                      src="https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/ship_1.jpg?alt=media&token=c3df4e27-832b-4f89-ab5b-11c748ef25be"
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
