import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "reactstrap";

class TransportesEspanol extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          <section className="section pb-0 section-components" id="services">
            <Row xs={1} md={2} className="g-4">
              <Col className="card-lift--hover">
                <a href="/esp/truck">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://i.imgur.com/7nf3k1r.jpeg"
                    />
                    <Card.Body>
                      <Card.Title>Camiones</Card.Title>
                      <Card.Text>
                        ABBA Logística es una empresa especializada en ofrecer
                        Soluciones de transporte de carga eficientes y
                        confiables. Nuestros socios tienen...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>

              <Col className="card-lift--hover">
                <a href="/esp/plane">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/aviones.webp?alt=media&token=7d48d137-310e-4d72-a208-16b64bb982a7"
                    />
                    <Card.Body>
                      <Card.Title>Aviones</Card.Title>
                      <Card.Text>
                        Contamos con cobertura nacional e internacional, y para
                        ello, Establecemos alianzas con empresas de transporte.
                        Aerolíneas más reconocidas en...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>

              <Col className="card-lift--hover">
                <a href="/esp/ship">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/ship_1.jpg?alt=media&token=c3df4e27-832b-4f89-ab5b-11c748ef25be"
                    />
                    <Card.Body>
                      <Card.Title>Buques</Card.Title>
                      <Card.Text>
                        ABBA Logistics se enorgullece de anunciar su cobertura
                        red global estratégica, que permite la entrega de carga
                        y a cualquier parte de...
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

export default TransportesEspanol;
