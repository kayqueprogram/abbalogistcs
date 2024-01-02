import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { Helmet } from "react-helmet";
import EngNavbar from "components/Navbars/EngNavbar";
import HeroEnglish from "views/IndexSections/HeroEnglish";
import EngFooter from "components/Footers/EngFooter";

class PlaneEng extends React.Component {
  render() {
    return (
      <>
      <Helmet>
        <title>Planes - Abba Logistics</title>
      </Helmet>
      <EngNavbar/>
      <HeroEnglish/>
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
                    Airplanes
                    </h4>
                    <p className="lead text-italic text-white">
                    We have national and international coverage, and for that,
                      We establish partnerships with transport companies
                      most renowned airlines on the market, in order to serve our
                      customers and their most critical needs. This service is
                      offered strategically to meet our
                      customers in the delivery of extremely urgent cargo in the shortest
                      possible time and considering long distances (Low
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
                  <h3>Safety first</h3>
                  <p className="lead">
                    Safety is an absolute priority at ABBA Logistics,
                    especially when it comes to air cargo transportation.
                    The planes are kept in the best conditions and pass
                    by regular inspections to ensure they are always
                    ready for flight.
                  </p>
                  <br />
                  <h3>Personalized service</h3>
                  <p>
                    At ABBA Logistics, we believe that each customer is unique. AND
                    That's why we offer customized solutions to meet
                    to your specific cargo transport needs.
                  </p>
                  <p>
                    Choose ABBA Logistics for all your shipping needs
                    cargo transport and experience the difference that a service
                    quality can do. Contact us today to
                    find out more about our services. We are looking forward to
                    work with you!
                  </p>
                  <a
                    className="font-weight-bold text-warning mt-5"
                    href="/eng/contact"
                  >
                    Contact us
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <EngFooter/>
      </>
    );
  }
}

export default PlaneEng;
