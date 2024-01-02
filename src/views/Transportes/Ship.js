import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { Helmet } from "react-helmet";
import DemoNavbar from "components/Navbars/DemoNavbar"
import Hero from "views/IndexSections/Hero"
import CardsFooter from "components/Footers/CardsFooter"

class Ship extends React.Component {
  render() {
    return (
      <>
      <Helmet>
        <title>
          Navios - Abba Logistics
        </title>
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
                    src="https://i.imgur.com/9iGClq1.jpg"
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
                      Navios
                    </h4>
                    <p className="lead text-italic text-white">
                      A ABBA Logistics tem orgulho de anunciar sua cobertura
                      global estratégica, permitindo a entrega de cargas de e
                      para qualquer parte do globo. Isso é possível graças às
                      nossas parcerias com as empresas mais reconhecidas no
                      mercado de transporte marítimo. Essas parcerias garantem a
                      coleta e entrega de cargas de forma ágil e confiável.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-settings" />
                  </div>
                  <h3>Compromisso</h3>
                  <p className="lead">
                    Nosso compromisso com a qualidade e a competitividade de
                    preços garante que suas necessidades de logística sejam
                    atendidas de maneira eficiente e econômica. Confie na ABBA
                    Logistics para suas necessidades de transporte marítimo. Nós
                    nos esforçamos para superar suas expectativas.
                  </p>
                  <br />
                  <h3>Serviço Personalizado</h3>
                  <p>
                    Oferecemos um amplo catálogo de serviços, incluindo
                    despachante aduaneiro, métodos de negócio de coleta/carga e
                    descarga, e todos os formatos de disponibilização de
                    contêiner. A ABBA Logistics orienta e oferece este serviço
                    para cargas de grande volume, que por seu tamanho e peso
                    requerem ser transportadas por meio deste serviço.
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

export default Ship;
