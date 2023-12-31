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
import DemoNavbar from "components/Navbars/DemoNavbar"
import Hero from "views/IndexSections/Hero"
import CardsFooter from "components/Footers/CardsFooter"


class Contact extends React.Component {
  state = {};

  render() {
    return (
      <>
      <Helmet>
        <title>
          Contato - Abba Logistics
        </title>
       
      </Helmet>
        <DemoNavbar />


        <Hero />
        <section className="section section-lg bg-gradient-default">
          <section className="section" >
            <Row className="text-center justify-content-center">
              <Col lg="'10">
                <h2 className="mb-5 display-3 text-white">
                  <GrContact /> Contate-nos
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
                      <h4 className="mb-1">Faça seu orçamento</h4>
                      <p className="mt-0">
                        Entre em contato conosco. Tire suas dúvidas e faça suas sugestões. Basta preencher o formulário e logo entraremos em contato!
                      </p>
                      <form action="https://formsubmit.co/contato@abbalogistics.com.br" method="POST">
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
                              placeholder="Seu nome"
                              name="Nome"
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
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Número de telefone"
                              name="Telefone"
                              type="tel"
                              onFocus={(e) =>
                                this.setState({ emailFocused: true })
                              }
                              onBlur={(e) =>
                                this.setState({ emailFocused: false })
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
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Endereço de Email"
                              name="Email"
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
                        <FormGroup
                          className={classnames({
                            focused: this.state.emailFocused,
                          })}
                        >
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" /></svg>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Local"
                              name="Local"
                              type="text"
                              onFocus={(e) =>
                                this.setState({ emailFocused: true })
                              }
                              onBlur={(e) =>
                                this.setState({ emailFocused: false })
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
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"><path d="M88 216c81.7 10.2 273.7 102.3 304 232H0c99.5-8.1 184.5-137 88-232zm32-152c32.3 35.6 47.7 83.9 46.4 133.6C249.3 231.3 373.7 321.3 400 448h96C455.3 231.9 222.8 79.5 120 64z" /></svg>
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Qual o serviço desejado?"
                              name="Servico"
                              type="text"
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
                            name="Descrição do Serviço"
                            placeholder="Escreva uma mensagem..."
                            rows="4"
                            type="textarea"
                          />
                          <input type="hidden" name="_next" value="https://abbalogistcs.vercel.app/contact/thanks"></input>
                          <input type="hidden" name="_captcha" value="false"></input>
                        </FormGroup>
                        <div>
                          <Button
                           
                            className="btn-round"
                            color="default"
                            size="lg"
                            type="submit"
                          >
                            Enviar mensagem
                          </Button>
                        </div>

                      </form>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <CardsFooter />
      </>
    );
  }
}

export default Contact;
