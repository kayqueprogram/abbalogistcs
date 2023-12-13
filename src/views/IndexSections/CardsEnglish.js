
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



class CardsEnglish extends React.Component {
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
                  <FcAbout />     <span>Abba Logistics  -  Transportation and logistics</span>
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
                          We value our customers
                          </h6>
                          <p className="description mt-3">
                          Abba Logistics has personalized service for you! 
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                            appreciation
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            speed
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            efficiency
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
                          24 hours a day, 7 days a week.
                          </h6>
                          <p className="description mt-3">
                          Abba Logistics has support for questions and contact 24 hours a day, 7 days a week.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              support
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                            service
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                            24 hours
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
                          Benefits
                          </h6>
                          <p className="description mt-3">
                          Abba Logistics has benefits and discounts for VIP customers.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                            benefits
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                            discounts
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
                  <BsTruckFrontFill />    <span>Abba Logistics  - Means of transport</span>
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

export default CardsEnglish;
