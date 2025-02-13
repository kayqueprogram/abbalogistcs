
import React from "react";
import { FcAbout } from "react-icons/fc";
import { BsTruckFrontFill } from "react-icons/bs";
import {
  Badge,
 
  Card,
  CardBody,

  Container,
  Row,
  Col,
} from "reactstrap";



class BasicElements extends React.Component {
  render() {
    return (
      <>
        <section
          className="section section-components pb-0"
          id="section-components"
        >
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                
                <h2 className="mb-5">
                  <FcAbout />     <span>Abba Logistics  -  Transporte e Logística</span>
                </h2>
                </Col>
               </Row>
               <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Valorizamos nossos clientes
                          </h6>
                          <p className="description mt-3">
                            A Abba Logistics tem um atendimento personalizado para você! 
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              valorização
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              rapidez
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              eficiência
                            </Badge>
                          </div>
                         
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            24 horas por dia, 7 dias por semana.
                          </h6>
                          <p className="description mt-3">
                            A Abba Logistics possui suporte para dúvidas e contato 24 horas por dia, 7 dias por semana.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              suporte
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              atendimento
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              24 horas
                            </Badge>
                          </div>

                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Benefícios
                          </h6>
                          <p className="description mt-3">
                            A Abba Logistics possui benefícios e descontos para clientes Vip.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              benefícios
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              descontos
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              vip
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <br/>
                  <br/>
                  <h2 className="mb-5">
                  <BsTruckFrontFill />    <span>Abba Logistics  -  Meios de transporte</span>
                  </h2>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </>
    );
  }
}

export default BasicElements;
