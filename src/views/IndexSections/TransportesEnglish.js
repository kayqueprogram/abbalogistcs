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
          <section className="section pb-0 section-components">
            <Row xs={1} md={2} className="g-4">
              <Col className="card-lift--hover">
                <a href="/eng/truck">
                  <Card>
                    <Card.Img
                      variant="top"
                      src="https://cdn.discordapp.com/attachments/995485098336067675/1182533708704649306/hero.jpg?ex=65850b56&is=65729656&hm=574f7456b408f1b718c011bc6dc01826dbcdbfd3bed18f2fb809239ee59e92f5&"
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
                      src="https://cdn.discordapp.com/attachments/995485098336067675/1182753818832814140/plane_cropped.jpg?ex=6585d854&is=65736354&hm=838a140a9e59da9a0b6a13000a247cb4a44dec21dc83ce10634dfd38f14d7a8f&"
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
                      src="https://cdn.discordapp.com/attachments/995485098336067675/1182758993978998784/ship_1.jpg?ex=6585dd26&is=65736826&hm=6e81498f45db41f24821340f0c2b2ce6e8915afc00202238fc45a232c7ad7c57&"
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
