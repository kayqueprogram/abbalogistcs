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

// index page sections


import HeroEnglish from "./IndexSections/HeroEnglish";
import EngFooter from "components/Footers/EngFooter";
import EngNavbar from "components/Navbars/EngNavbar";

class WhoWeAreEng extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <EngNavbar />
        <HeroEnglish />
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
                      <h4 className="display-3 text-white">Who we are?</h4>
                      <p className="text-white">
                      Abba Logistics is known for providing
                        High-quality international freight forwarding.
                        We have a team of experienced professionals who
                        work to ensure that the needs of our
                        customers are served.
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
                          Personalized service
                          </h5>
                          <p>
                          Abba Logistics believes that every customer has
                            unique needs and therefore offers solutions
                            customized to meet those needs. The
                            Company strives to ensure that every customer
                            receive exceptional service and that your
                            needs are met efficiently and efficiently.
                            effective.
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
                          Commitment to the customer
                          </h5>
                          <p>
                          The Abba Logistics team works closely
                            collaboration with your customers to understand their
                            needs and provide customized solutions.
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
                      <h3 className="text-white">How can we help you?</h3>
                      <p className="lead text-white mt-3">
                      If you are looking for a transport company and
                         logistics that offers solutions in all modes, Abba
                         Logistics is the right choice for you. We offer air, sea and road transport, in addition to
                         of an extreme urgency service(Hotline), which
                         guarantees delivery of cargo within 8 hours at any
                         place in the country. The company also works with
                         best partners, to meet the
                         customer needs, aiming for speed,
                         quality and safety in collections and deliveries.
                      </p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                      <Button
                        
                        className="btn-white"
                        color="default"
                        href="/eng/contact"
                        size="lg"
                      >
                        Contact Us
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <EngFooter />
      </>
    );
  }
}

export default WhoWeAreEng;
