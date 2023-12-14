import React from "react";
import { Helmet } from "react-helmet";
import { GrContact } from "react-icons/gr";
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
  Col,
  Row,
} from "reactstrap";
import classnames from "classnames";
import EspNavbar from "components/Navbars/EspNavbar"
import HeroEspanol from "views/IndexSections/HeroEspanol"
import EspFooter from "components/Footers/EspFooter"

class ContactEsp extends React.Component {
  state = {};

  render() {
    return (
      <>
      <EspNavbar/>
      
      <Helmet>
        <title> Contacto - Abba Logistics</title>
      </Helmet>
      <HeroEspanol/>
        <section className="section section-lg bg-gradient-default">
          <section className="section" >
          <Row className="text-center justify-content-center">
            <Col lg="'10">
              <h2 className="mb-5 display-3 text-white">
                <GrContact /> Contáctenos
              </h2>
            </Col>
          </Row>
          </section>
          <br />
          <br /><br />
          <br /><br />
         

        
          <section className="section section-lg  ">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Haz tu presupuesto</h4>
                      <p className="mt-0">
                      Ponte en contacto con nosotros. Haga sus preguntas y haga sus sugerencias. ¡Solo tienes que rellenar el formulario y nos pondremos en contacto contigo en breve!
                      </p>
                      <FormGroup
                        className={classnames("mt-5", {
                          focused: this.state.nameFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-user-run" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Te llamas"
                            type="text"
                            onFocus={(e) =>
                              this.setState({ nameFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ nameFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup
                        className={classnames({
                          focused: this.state.emailFocused,
                        })}
                      >
                        <InputGroup className="input-group-alternative">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Dirección de correo electrónico"
                            type="email"
                            onFocus={(e) =>
                              this.setState({ emailFocused: true })
                            }
                            onBlur={(e) =>
                              this.setState({ emailFocused: false })
                            }
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup className="mb-4">
                        <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Escribe un mensaje..."
                          rows="4"
                          type="textarea"
                        />
                      </FormGroup>
                      <div>
                        <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                        >
                          Enviar mensaje
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <EspFooter/>
      </>
    );
  }
}

export default ContactEsp;
