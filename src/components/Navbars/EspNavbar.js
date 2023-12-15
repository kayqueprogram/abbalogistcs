/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { PiTruckThin } from "react-icons/pi";
import { FaShip } from "react-icons/fa";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPersonCircleCheck } from "react-icons/fa6";
import { GiBrazilFlag } from "react-icons/gi";

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

class EspNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  }
  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/esp" tag={Link}>
                <img
                  alt="..."
                  height="750px"
                  src="https://cdn.discordapp.com/attachments/995485098336067675/1182487946310471760/ABBA_drive-removebg-preview_2.png?ex=6584e0b7&is=65726bb7&hm=95d16864d94e54b19c9dc124dbb52df3320e62df20785c1fb06efb9133b2973e&"
                />
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/esp">
                        <img
                          alt="..."
                          src="https://cdn.discordapp.com/attachments/995485098336067675/1182487946310471760/ABBA_drive-removebg-preview_2.png?ex=6584e0b7&is=65726bb7&hm=95d16864d94e54b19c9dc124dbb52df3320e62df20785c1fb06efb9133b2973e&"
                        />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Servicios +</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="/truck/esp"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <PiTruckThin />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Tráfico de mercancías
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Entregamos su carga de forma rápida y segura.
                              Transportamos su carga por todo Brasil.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/esp/plane"
                        >
                          <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                            <FaPlaneDeparture />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-danger mb-md-1">
                              Transporte aereo
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Contamos con cobertura nacional e internacional
                              para transportando su carga.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/esp/ship"
                          
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <FaShip />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              Transporte maritimo
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Con nuestras asociaciones, transportamos su carga
                              a cualquier parte del mundo.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />
                      <span className="nav-link-inner--text">
                        Quienes somos
                      </span>
                    </DropdownToggle>
                  </UncontrolledDropdown>

                  <NavLink href="#" target="_blank">
                    <FaPersonCircleCheck className="d-lg-none mr-1" />
                    <span className="nav-link-inner--text ">Diferencial</span>
                  </NavLink>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#"
                      id="tooltip333589074"
                      target="_blank"
                    >
                      <i className="fa fa-facebook-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip333589074">
                      Síguenos en Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#"
                      id="tooltip356693867"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip356693867">
                      Síguenos en Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="#"
                      id="tooltip184698705"
                      target="_blank"
                    >
                      <i className="fa fa-twitter-square" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Twitter
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip184698705">
                      Síganos en Twitter
                    </UncontrolledTooltip>
                  </NavItem>

                  <UncontrolledDropdown group>
                    <DropdownToggle caret color="secondary">
                     Idioma
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem href="/">
                        Português <GiBrazilFlag />
                      </DropdownItem>
                      <DropdownItem href="/esp">Español</DropdownItem>
                      <DropdownItem href="/eng">English</DropdownItem>
                      <DropdownItem divider />
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default EspNavbar;
