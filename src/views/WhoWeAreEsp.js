import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import EspNavbar from "components/Navbars/EspNavbar";


// index page sections



import HeroEspanol from "./IndexSections/HeroEspanol";
import EspFooter from "components/Footers/EspFooter";

class WhoWeAreEsp extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <EspNavbar />
        <HeroEspanol />
        <main ref="main">
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src="https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/telemarketing.jpg?alt=media&token=38bab34a-2dd7-40db-aeaa-42f9b3cce9fa"
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">¿Quienes somos?</h4>
                      <p className="text-white">
                      Abba Logistics se caracteriza por brindar servicios de logística
                         Transporte de carga internacional de alta calidad.
                         Contamos con un equipo de profesionales experimentados que
                         trabajar para garantizar que las necesidades de nuestros
                         los clientes son atendidos.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                          Atendimiento personalizado
                          </h5>
                          <p>
                          Abba Logistics cree que cada cliente tiene
                             necesidades únicas y, por tanto, ofrece soluciones
                             personalizado para satisfacer estas necesidades. A
                             La empresa se esfuerza por garantizar que cada cliente
                             recibir un servicio excepcional y que su
                             las necesidades se satisfacen de manera eficiente y
                             eficaz.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                          Compromiso con el cliente
                          </h5>
                          <p>
                          El equipo de Abba Logistics trabaja estrechamente
                             colaboración con sus clientes para comprender sus
                             necesidades y ofrecer soluciones personalizadas.
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">como podemos ayudarte?</h3>
                      <p className="lead text-white mt-3">
                      Si buscas una empresa de transporte y
                         logística que ofrece soluciones en todos los modos, Abba
                         La logística es la elección correcta para usted. Ofrecemos transporte aéreo, marítimo y terrestre, además de
                         de un servicio de extrema urgencia (Hotline), que
                         garantiza la entrega de la carga dentro de las 8 horas en cualquier
                         lugar en el país. La empresa también trabaja con
                         mejores socios, para satisfacer las
                         necesidades del cliente, buscando rapidez,
                         Calidad y seguridad en recogidas y entregas.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        
                        className="btn-white"
                        color="default"
                        href="/esp/contact"
                        size="lg"
                      >
                       Contáctenos
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <EspFooter />
      </>
    );
  }
}

export default WhoWeAreEsp;
