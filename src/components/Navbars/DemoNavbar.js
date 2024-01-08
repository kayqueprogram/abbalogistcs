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

class DemoNavbar extends React.Component {
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
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img
                  alt="..."
                  height="850px"
                  src="https://cdn.discordapp.com/attachments/995485098336067675/1193934715397345351/ABBA_drive__1___1_-removebg-preview.png?ex=65ae855a&is=659c105a&hm=1f635c5e14f798f37caddfe7babcc3adf105f3c2364c79ae1e432cc364180452&"
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
                      <Link to="/">
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
                      <span className="nav-link-inner--text">Serviços +</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href="/truck"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <PiTruckThin />
                          </div>
                          <Media body className="ml-3">
                            <h6 className="heading text-primary mb-md-1">
                              Transporte de carga
                            </h6>
                            <p className="description d-none d-md-inline-block mb-0">
                              Entregamos sua carga com rapidez e segurança.
                              Transportamos sua carga para todo o Brasil.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/plane"
                        >
                          <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                            <FaPlaneDeparture />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-danger mb-md-1">
                              Transporte Aéreo
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Possuímos cobertura nacional e internacional para
                              o transporte de sua carga.
                            </p>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href="/ship"
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <FaShip />
                          </div>
                          <Media body className="ml-3">
                            <h5 className="heading text-warning mb-md-1">
                              Transporte Marítmo
                            </h5>
                            <p className="description d-none d-md-inline-block mb-0">
                              Com nossas parcerias, transportamos sua carga para
                              qualquer parte do mundo.
                            </p>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>


                  <NavLink href="/who-we-are">
                  <i className="ni ni-collection d-lg-none mr-1" />
                    <span className="nav-link-inner--text ">Quem somos?</span>
                  </NavLink>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                    <UncontrolledDropdown group>
                      <DropdownToggle caret color="secondary">
                        Idioma
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem
                          href="/"
                          
                        >
                          Português <GiBrazilFlag />
                        </DropdownItem>
                        <DropdownItem
                          href="/esp"
                          
                        >
                          Español
                        </DropdownItem>
                        <DropdownItem
                          href="/eng"
                          
                        >
                          English
                        </DropdownItem>
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

export default DemoNavbar;
