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
                  height="850px"
                  src="https://firebasestorage.googleapis.com/v0/b/abbalogistics-31f3a.appspot.com/o/ABBA_drive__1___1_-removebg-preview_resized.png?alt=media&token=1243a947-9007-4138-bd2a-c003ac5fc0bf"
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
                          src="https://firebasestorage.googleapis.com/v0/b/abbalogistics-31f3a.appspot.com/o/ABBA_drive__1___1_-removebg-preview_resized.png?alt=media&token=1243a947-9007-4138-bd2a-c003ac5fc0bf"
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
                          href="/esp/truck"
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
                  <NavLink href="/esp/who-we-are" >
                  <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text ">Quienes somos</span>
                  </NavLink>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
 

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
