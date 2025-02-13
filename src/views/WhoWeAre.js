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
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "./IndexSections/Download";

import Hero from "./IndexSections/Hero";

class WhoWeAre extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <Hero />
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
                      <h4 className="display-3 text-white">Quem somos nós?</h4>
                      <p className="text-white">
                        A Abba Logistics é conhecida por fornecer serviços de
                        encaminhamento de frete internacional de alta qualidade.
                        Temos uma equipe de profissionais experientes que
                        trabalham para garantir que as necessidades de nossos
                        clientes sejam atendidas.
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
                            Atendimento personalizado
                          </h5>
                          <p>
                            A Abba Logistics acredita que cada cliente possui
                            necessidades únicas e, por isso, oferece soluções
                            personalizadas para atender a essas necessidades . A
                            empresa se esforça para garantir que cada cliente
                            receba um serviço excepcional e que suas
                            necessidades sejam atendidas de maneira eficiente e
                            eficaz .
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
                            Compromisso com o cliente
                          </h5>
                          <p>
                            A equipe da Abba Logistics trabalha em estreita
                            colaboração com seus clientes para entender suas
                            necessidades e fornecer soluções personalizadas.
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
                      <h3 className="text-white">Como podemos te ajudar?</h3>
                      <p className="lead text-white mt-3">
                        Se você está procurando uma empresa de transporte e
                        logística que ofereça soluções em todos os modais, a Abba
                        Logistics é a escolha certa para você. Oferecemos transporte aéreo, marítimo e rodoviário, além
                        de um serviço de extrema urgência(Hotline), que
                        garante a entrega da carga em até 8 horas em qualquer
                        lugar do país. A empresa também trabalha com os
                        melhores parceiros, para atender às
                        necessidades dos clientes, visando a velocidade,
                        qualidade e segurança nas coletas e entregas.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        
                        className="btn-white"
                        color="default"
                        href="/contact"
                        size="lg"
                      >
                        Contate-nos
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default WhoWeAre;
