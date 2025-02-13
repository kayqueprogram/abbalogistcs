import React from "react";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { GrContact } from "react-icons/gr";
import { FcServices } from "react-icons/fc";



class HeroEspanol extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
         
          <section className="section section-hero section-shaped">
            
          <div className="shape shape-style-1 hero-background"
                 style={{
                   backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/images-6adbb.appspot.com/o/AbbaHome%20(2).jpg?alt=media&token=782621fa-98a4-48f4-be3a-7fd7b11bcac4")',
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
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
                   
                    <p className="lead text-white">
                    ¡Desde 2023 creando soluciones logísticas para ti!
                    </p>
                    <div className="btn-wrapper mt-5">
                     {" "}
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="#services"
                        size="lg"
                        
                      >
                        <span className="btn-inner--icon mr-1">
                        <FcServices />
                        </span>
                        <span className="btn-inner--text">
                        Descubra nuestros
                          <span className="text-warning mr-1"> servicios</span>
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

export default HeroEspanol;
