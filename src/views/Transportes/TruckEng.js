import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { Helmet } from "react-helmet";
import EngNavbar from "components/Navbars/EngNavbar";
import HeroEnglish from "views/IndexSections/HeroEnglish";
import EngFooter from "components/Footers/EngFooter";

class TruckEng extends React.Component {
  render() {
    return (
      <>
      <Helmet>
        <title>
          Trucks - Abba Logistics
        </title>
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
                    src="https://i.imgur.com/7nf3k1r.jpg"
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
                      Trucks
                    </h4>
                    <p className="lead text-italic text-white">
                    ABBA Logistics is a company specialized in offering
                      efficient and reliable cargo transport solutions.
                      Our partners have a fleet of modern and well-maintained trucks, which guarantees
                      ensure that your goods reach their destination safely and
                      one-off.
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
                  Safety is our number one priority at ABBA Logistics.
                    The drivers are highly trained and the trucks
                    are regularly inspected to ensure they are in good condition
                    perfect working conditions.
                  </p>
                  <br/>
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
                    Contact Us
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

export default TruckEng;
