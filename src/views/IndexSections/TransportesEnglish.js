import React from "react";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "reactstrap";



class TransportesEnglish extends React.Component {
  state = {};
  render() {
    return (
      <>
  
        <Container>
          <section className="section pb-0 section-components" id="services">
            <Row xs={1} md={2} className="g-4">
              <Col className="card-lift--hover">
                <a href="/eng/truck">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://i.imgur.com/7nf3k1r.jpeg"
                    />
                    <Card.Body>
                      <Card.Title>Trucks</Card.Title>
                      <Card.Text>
                      ABBA Logistics is a company specialized in offering
                      efficient and reliable cargo transport solutions.
                      Our partners have...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>

              <Col className="card-lift--hover">
                <a href="/eng/plane">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/aviones.webp?alt=media&token=7d48d137-310e-4d72-a208-16b64bb982a7"
                    />
                    <Card.Body>
                      <Card.Title>Planes</Card.Title>
                      <Card.Text>
                      We have national and international coverage, and for that,
                      We establish partnerships with transport companies
                      most renowned airlines in...
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </a>
              </Col>

              <Col className="card-lift--hover">
                <a href="/eng/ship">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/ship_1.jpg?alt=media&token=c3df4e27-832b-4f89-ab5b-11c748ef25be"
                    />
                    <Card.Body>
                      <Card.Title>Ships</Card.Title>
                      <Card.Text>
                      ABBA Logistics is proud to announce its coverage
                      strategic global network, allowing the delivery of cargo and
                      to any part of...
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

export default TransportesEnglish;
