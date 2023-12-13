// eslint-disable-next-line
import React from "react";
import { Helmet } from "react-helmet"

// reactstrap components
import { Container } from "reactstrap";

// index page sections
import EspNavbar from "components/Navbars/EspNavbar.js";
import HeroEspanol from "./IndexSections/HeroEspanol.js";
import CardsEspanol from "./IndexSections/CardsEspanol.js";
import EspFooter from "components/Footers/EspFooter.js";
import Cards from "./IndexSections/Cards.js";
import TransportesEspanol from "./IndexSections/TransportesEspanol.js";
//import Carousel from "./IndexSections/Carousel.js";

class IndexEspanol extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <Helmet>
          <title> Home - Abba Logistics </title>
          <meta name='description' content='página principal - Abba Logistics' />
        </Helmet>
        <EspNavbar/>
        <HeroEspanol/>
        <main ref="main">
          <Container>
          <CardsEspanol />
          <TransportesEspanol />
          </Container>
      
        </main>
        <EspFooter/>
      </>
    );
  }
}

export default IndexEspanol;
