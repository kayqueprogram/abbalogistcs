import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { Helmet } from "react-helmet";
import DemoNavbar from "components/Navbars/DemoNavbar"
import Hero from "views/IndexSections/Hero"
import CardsFooter from "components/Footers/CardsFooter"

class Plane extends React.Component {
  render() {
    return (
      <>
       <Helmet>
          <title>Aviões - Abba Logistics</title>
        </Helmet>
      <DemoNavbar/>
      <Hero/>
        <section className="section bg-secondary">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg
                    alt="..."
                    src="https://i.imgur.com/GUg8EOn.jpg"
                    top
                  />
                  <blockquote className="card-blockquote">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="svg-bg"
                      preserveAspectRatio="none"
                      viewBox="0 0 583 95"
                    >
                      <polygon
                        className="fill-default"
                        points="0,52 583,95 0,95"
                      />
                      <polygon
                        className="fill-default"
                        opacity=".2"
                        points="0,42 583,95 683,0 0,95"
                      />
                    </svg>
                    <h4 className="display-3 font-weight-bold text-white">
                      Aviões
                    </h4>
                    <p className="lead text-italic text-white">
                      Temos cobertura nacional e internacional, e para isso,
                      estabelecemos parcerias com as empresas de transporte
                      aéreo mais renomadas do mercado, a fim de atender nossos
                      clientes e suas necessidades mais críticas. Este serviço é
                      oferecido de forma estratégica para atender nossos
                      clientes na entrega de cargas de extrema urgência no menor
                      tempo possível e considerando longas distâncias (Low
                      Transit Time - LTM).
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-settings" />
                  </div>
                  <h3>Segurança em Primeiro Lugar</h3>
                  <p className="lead">
                    A segurança é uma prioridade absoluta na ABBA Logistics,
                    especialmente quando se trata de transporte de carga aérea.
                    Os aviões são mantidos nas melhores condições e passam
                    por inspeções regulares para garantir que estejam sempre
                    prontos para o voo.
                  </p>
                  <br />
                  <h3>Serviço Personalizado</h3>
                  <p>
                    Na ABBA Logistics, acreditamos que cada cliente é único. É
                    por isso que oferecemos soluções personalizadas para atender
                    às suas necessidades específicas de transporte de carga.
                  </p>
                  <p>
                    Escolha a ABBA Logistics para todas as suas necessidades de
                    transporte de carga e experimente a diferença que um serviço
                    de qualidade pode fazer. Entre em contato conosco hoje para
                    saber mais sobre nossos serviços. Estamos ansiosos para
                    trabalhar com você!
                  </p>
                  <a
                    className="font-weight-bold text-warning mt-5"
                    href="/contact"
                  >
                    Contate - nos
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <CardsFooter/>
      </>
    );
  }
}

export default Plane;
