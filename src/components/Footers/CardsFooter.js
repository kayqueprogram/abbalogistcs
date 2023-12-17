import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardImg,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

const SocialButton = ({ color, icon, link }) => (
  <Button
    className="btn-icon-only rounded-circle ml-1"
    color={color}
    href={link}
    target="_blank"
  >
    <span className="btn-inner--icon">
      <i className={`fab fa-${icon}`} />
    </span>
  </Button>
);

class CardsFooter extends React.Component {
  render() {
    return (
      <footer className="footer ">
        <Container>
          <Row className="align-items-center">
            <Col lg="6" className="mb-3 mb-lg-0">
              <h4 className="font-weight-light">
                Siga-nos em nossas redes sociais
              </h4>
            </Col>
            <Col lg="6" className="text-lg-center">
              <Col className="text-lg-center btn-wrapper" lg="6">
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="#"
                  id="tooltip475038074"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-twitter" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip475038074">
                  Siga-nos
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="facebook"
                  href="#"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Siga-nos
                </UncontrolledTooltip>
                <Button
                  className="btn-icon-only rounded-circle ml-1"
                  color="dribbble"
                  href="#"
                  id="tooltip829810202"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-dribbble" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip829810202">
                  Siga-nos
                </UncontrolledTooltip>
              </Col>
            </Col>
          </Row>
          <hr className="my-4" />
          <Row className="justify-content-between">
            <Col md="4">
              Fale conosco
              <br />
              <br />
              <ul className="list-unstyled small">
                <li>
                  <strong>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="12"
                      viewBox="0 0 384 512"
                    >
                      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                    </svg>{" "}
                    Endereço:
                  </strong>{" "}
                  Rua Exemplo de Setembro, 123, São Paulo, SP, Brasil
                </li>
                <br />
                <li>
                  <strong>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>{" "}
                    Email:
                  </strong>{" "}
                  contato@empresa.com.br
                </li>
                <br />
                <li>
                  <strong>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="16"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                    </svg>{" "}
                    Telefone:
                  </strong>{" "}
                  (11) 1234-5678
                </li>
                <br />
                <li>
                  <strong>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="12"
                      viewBox="0 0 384 512"
                    >
                      <path d="M32 0C14.3 0 0 14.3 0 32S14.3 64 32 64V75c0 42.4 16.9 83.1 46.9 113.1L146.7 256 78.9 323.9C48.9 353.9 32 394.6 32 437v11c-17.7 0-32 14.3-32 32s14.3 32 32 32H64 320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V437c0-42.4-16.9-83.1-46.9-113.1L237.3 256l67.9-67.9c30-30 46.9-70.7 46.9-113.1V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 64 32zM288 437v11H96V437c0-25.5 10.1-49.9 28.1-67.9L192 301.3l67.9 67.9c18 18 28.1 42.4 28.1 67.9z" />
                    </svg>{" "}
                    Horário de Funcionamento:
                  </strong>{" "}
                  Seg-Sex, 7h-00h
                </li>
                <br />
              </ul>
            </Col>
            <Col md="4">
              Navegação
              <br />
              <br />
              <ul className="list-unstyled small">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Serviços</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Quem somos</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Diferencial</Link>
                </li>
                <br />
                <li>
                  <Link to="/">Contato</Link>
                </li>
                <br />
              </ul>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Col md="4">
              <div className="text-muted small">
                © 2023 <Link to="/"> Abba Logistics</Link> | Todos os direitos
                reservados
              </div>
            </Col>
            <Col md="4">
              <div className="text-muted small">
                <strong>Desenvolvido por </strong>
                <Link to="https://siriusdevxls.vercel.app/">
                  Kayque de Jesus
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default CardsFooter;
