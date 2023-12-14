import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import EspNavbar from "components/Navbars/EspNavbar";
import HeroEspanol from "views/IndexSections/HeroEspanol";
import EspFooter from "components/Footers/EspFooter";

class PlaneEsp extends React.Component {
  render() {
    return (
      <>
      <EspNavbar/>
      <HeroEspanol/>
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
                    Aviones
                    </h4>
                    <p className="lead text-italic text-white">
                    Contamos con cobertura nacional e internacional, y para ello,
                      Establecemos alianzas con empresas de transporte.
                      aerolíneas más reconocidas del mercado, con el fin de atender a nuestros
                      clientes y sus necesidades más críticas. Este servicio es
                      ofrecido estratégicamente para cumplir con nuestros
                      clientes en la entrega de carga extremadamente urgente en el menor tiempo posible.
                      tiempo posible y considerando largas distancias (Low
                      Transit time - LTM).
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-settings" />
                  </div>
                  <h3>Seguridad primero</h3>
                  <p className="lead">
                  La seguridad es una prioridad absoluta en ABBA Logistics,
                    especialmente cuando se trata de transporte aéreo de carga.
                    Los aviones se mantienen en las mejores condiciones y pasan
                    mediante inspecciones periódicas para garantizar que siempre estén
                    listo para volar.
                  </p>
                  <br />
                  <h3>Servicio personalizado</h3>
                  <p>
                  En ABBA Logistics creemos que cada cliente es único. Y
                    Por eso ofrecemos soluciones personalizadas para satisfacer
                    a sus necesidades específicas de transporte de carga.
                  </p>
                  <p>
                  Elija ABBA Logistics para todas sus necesidades de envío
                    transporte de carga y experimente la diferencia que un servicio
                    la calidad puede hacerlo. Contáctenos hoy para
                    conozca más sobre nuestros servicios. Estamos ansiosos por
                    ¡trabajar contigo!
                  </p>
                  <a
                    className="font-weight-bold text-warning mt-5"
                    href="/esp/contact"
                  >
                    Contáctenos
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <EspFooter/>
      </>
    );
  }
}

export default PlaneEsp;
