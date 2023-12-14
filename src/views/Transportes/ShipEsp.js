import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import EspNavbar from "components/Navbars/EspNavbar";
import HeroEspanol from "views/IndexSections/HeroEspanol";
import EspFooter from "components/Footers/EspFooter";

class ShipEsp extends React.Component {
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
                    Buques
                    </h4>
                    <p className="lead text-italic text-white">
                    ABBA Logistics se enorgullece de anunciar su cobertura
                      red global estratégica, que permite la entrega de carga y
                      a cualquier parte del globo. Esto es posible gracias a
                      nuestras alianzas con las empresas más reconocidas del sector
                      mercado del transporte marítimo. Estas asociaciones garantizan la
                      recogida y entrega de carga de forma ágil y confiable.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-settings" />
                  </div>
                  <h3>Compromiso</h3>
                  <p className="lead">
                  Nuestro compromiso con la calidad y competitividad de
                    El precio garantiza que sus necesidades logísticas sean
                    servido de manera eficiente y económica. Confía en ABBA
                    Logística para sus necesidades de envío. A nosotros
                    Nos esforzamos por superar sus expectativas.
                  </p>
                  <br />
                  <h3>Servicio personalizado</h3>
                  <p>
                  Ofrecemos un amplio catálogo de servicios, incluyendo
                    agente de aduanas, métodos comerciales de recogida/carga y
                    descargar y todos los formatos para poner a disposición
                    envase. ABBA Logística guía y ofrece este servicio
                    para cargas de gran volumen, que por su tamaño y peso
                    requieren ser transportados utilizando este servicio.
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

export default ShipEsp;
