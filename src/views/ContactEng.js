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
import EngNavbar from "components/Navbars/EngNavbar"
import HeroEnglish from "views/IndexSections/HeroEnglish"
import EngFooter from "components/Footers/EngFooter"

class ContactEng extends React.Component {
  state = {};

  render() {
    return (
      <>
      <EngNavbar/>
      
      <Helmet>
        <title> Contact - Abba Logistics</title>
      </Helmet>
      <HeroEnglish/>
        <section className="section section-lg bg-gradient-default">
          <section className="section" >
          <Row className="text-center justify-content-center">
            <Col lg="'10">
              <h2 className="mb-5 display-3 text-white">
                <GrContact /> Contact Us
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
                      <h4 className="mb-1">Make your budget</h4>
                      <p className="mt-0">
                      Get in touch with us. Ask your questions and make your suggestions. Just fill out the form and we'll be in touch shortly!
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
                            placeholder="Your name"
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
                            placeholder="Email Address"
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
                          placeholder="Write a message..."
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
                          Send Message
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </section>
        <EngFooter/>
      </>
    );
  }
}

export default ContactEng;
