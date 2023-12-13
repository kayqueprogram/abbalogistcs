
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



class CardsEspanol extends React.Component {
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
                  <FcAbout />     <span>Abba Logistics  -  Transporte y logística</span>
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
                          Valoramos a nuestros clientes
                          </h6>
                          <p className="description mt-3">
                          ¡Abba Logistics tiene un servicio personalizado para ti!
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                            apreciación
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            velocidad
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            eficiencia
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
                          Las 24 horas del día, los 7 días de la semana.
                          </h6>
                          <p className="description mt-3">
                          Abba Logistics cuenta con soporte para dudas y contacto las 24 horas del día, los 7 días de la semana.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                            soporte
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                            servicio
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
                            
                          </h6>
                          <p className="description mt-3">
                            A Abba Logistics possui benefícios e descontos para clientes Vip.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                            beneficios
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                            descuentos
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
                  <BsTruckFrontFill />    <span>Abba Logistics  -  Medios de transporte</span>
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

export default CardsEspanol;
