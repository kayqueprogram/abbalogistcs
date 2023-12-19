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

class ThanksEnglish extends React.Component {
  render() {
    return (
      <>
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
                <h5 className="title text-success">Thank you very much for contacting us!</h5>
                <p>
                Abba Logistics thanks you for contacting us, we will respond to you shortly
!
                </p>
                <a
                  className="text-success"
                  href="/eng"
                  
                >
                  Return to main page
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

export default ThanksEnglish;
