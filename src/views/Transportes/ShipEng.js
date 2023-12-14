import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import EngNavbar from "components/Navbars/EngNavbar";
import HeroEnglish from "views/IndexSections/HeroEnglish";
import EngFooter from "components/Footers/EngFooter";

class ShipEng extends React.Component {
  render() {
    return (
      <>
      <EngNavbar/>
      <HeroEnglish/>
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
                      Ships
                    </h4>
                    <p className="lead text-italic text-white">
                    ABBA Logistics is proud to announce its coverage
                      strategic global network, allowing the delivery of cargo and
                      to any part of the globe. This is possible thanks to
                      our partnerships with the most recognized companies in the
                      maritime transport market. These partnerships guarantee the
                      collection and delivery of cargo in an agile and reliable manner.
                    </p>
                  </blockquote>
                </Card>
              </Col>
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                    <i className="ni ni-settings" />
                  </div>
                  <h3>Commitment</h3>
                  <p className="lead">
                    Our commitment to the quality and competitiveness of
                    pricing ensures your logistics needs are
                    served in an efficient and economical manner. Trust ABBA
                    Logistics for your shipping needs. Us
                    We strive to exceed your expectations.
                  </p>
                  <br />
                  <h3>Personalized service</h3>
                  <p>
                  We offer a wide catalog of services, including
                    customs broker, collection/loading business methods and
                    download, and all formats for making available
                    container. ABBA Logistics guides and offers this service
                    for large volume loads, which due to their size and weight
                    require to be transported using this service.
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
                    href="/contact"
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

export default ShipEng;
