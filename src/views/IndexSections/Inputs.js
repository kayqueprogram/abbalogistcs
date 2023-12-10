
import React from "react";


import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from "reactstrap";

class Inputs extends React.Component {
  state = {};
  render() {
    return (
      <>
        <Container>
          <section className="section pb-0 section-components">
            <Row xs={1} md={2} className="g-4">
              <Col className="card-lift--hover">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://cdn.discordapp.com/attachments/995485098336067675/1182533708704649306/hero.jpg?ex=65850b56&is=65729656&hm=574f7456b408f1b718c011bc6dc01826dbcdbfd3bed18f2fb809239ee59e92f5&"
                  />
                  <Card.Body>
                    <Card.Title>Caminhão</Card.Title>
                    <Card.Text>
                      Temos uma frota moderna e eficiente para atender a todo o
                      tipo de necessidade.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="card-lift--hover">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://cdn.discordapp.com/attachments/995485098336067675/1182750896199827548/frota_de_onibus_cropped_1.jpg?ex=6585d59c&is=6573609c&hm=0901cec55e8387a6e6e24742e8f490884cae95052457e12cf1f1bffb62c8e28a&"
                  />
                  <Card.Body>
                    <Card.Title>Ônibus (viagens/excursões)</Card.Title>
                    <Card.Text>
                      Temos desde simples ônibus para pequenas excursões, até
                      ônibus para grandes viagens.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="card-lift--hover">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://cdn.discordapp.com/attachments/995485098336067675/1182753818832814140/plane_cropped.jpg?ex=6585d854&is=65736354&hm=838a140a9e59da9a0b6a13000a247cb4a44dec21dc83ce10634dfd38f14d7a8f&"
                  />
                  <Card.Body>
                    <Card.Title>Aviões</Card.Title>
                    <Card.Text>
                      Possuímos aviões para vôos comerciais, de primeira e
                      segunda classe, e aviões cargueiros, para transportar o
                      que nossos clientes precisam com o mais importante:
                      segurança
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="card-lift--hover">
                <Card>
                  <Card.Img
                    variant="top"
                    src="https://cdn.discordapp.com/attachments/995485098336067675/1182758993978998784/ship_1.jpg?ex=6585dd26&is=65736826&hm=6e81498f45db41f24821340f0c2b2ce6e8915afc00202238fc45a232c7ad7c57&"
                  />
                  <Card.Body>
                    <Card.Title>Navios</Card.Title>
                    <Card.Text>
                      Temos navios cargueiros de todos os tamanhos. Atravessamos
                      o oceano para entregar sua carga.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </Container>
      </>
    );
  }
}

export default Inputs;
