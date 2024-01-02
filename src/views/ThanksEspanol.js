import React from "react";
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
import { Helmet } from "react-helmet";

class ThanksEspanol extends React.Component {
  render() {
    return (
      <>
      <Helmet>
        <title>¡Abba Logistics le agradece que se ponga en contacto con nosotros! :)</title>
      </Helmet>
        <Container>
        <br/><br/><br/><br/><br/>
        <Card className="shadow shadow-lg--hover mt-5">
          <CardBody>
            <div className="d-flex px-3">
              <div>
                <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                  <i className="ni ni-satisfied" />
                </div>
              </div>
              <div className="pl-4">
                <h5 className="title text-success">¡Muchas gracias por contactarnos!</h5>
                <p>
                Abba Logistics le agradece que se ponga en contacto con nosotros, le responderemos en breve
!
                </p>
                <a
                  className="text-success"
                  href="/esp"
                  
                >
                  Regresar a la página principal
                </a>
              </div>
            </div>
          </CardBody>
        </Card>
        </Container>
      </>
    );
  }
}

export default ThanksEspanol;
