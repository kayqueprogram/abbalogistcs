import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { GrContact } from "react-icons/gr";
import { FcServices } from "react-icons/fc";



class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
         
          <section className="section section-hero section-shaped">
            
            <div className="shape shape-style-1 hero-background">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <img
                      alt="..."
                      className="img-fluid"
                      src="https://cdn.discordapp.com/attachments/995485098336067675/1182487946310471760/ABBA_drive-removebg-preview_2.png?ex=6584e0b7&is=65726bb7&hm=95d16864d94e54b19c9dc124dbb52df3320e62df20785c1fb06efb9133b2973e&"
                      style={{ width: "200px" }}
                    />
                    <p className="lead text-white">
                    Since 2023 creating logistics solutions for you!
                    </p>
                    <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white btn-icon mb-3 mb-sm-0"
                        color="default"
                        href="/contact/eng"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                        <GrContact />
                        </span>
                        <span className="btn-inner--text">Contact us</span>
                      </Button>{" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="#"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                        <FcServices />
                        </span>
                        <span className="btn-inner--text">
                          Discover our
                          <span className="text-warning mr-1"> services</span>
                        </span>
                      </Button>
                    </div>
                    
                  </Col>
                </Row>
              </div>
            </Container>
            
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
        </div>
      </>
    );
  }
}

export default Hero;
