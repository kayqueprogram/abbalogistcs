// eslint-disable-next-line
import React from "react";
import { Helmet } from "react-helmet"

// reactstrap components
import { Container } from "reactstrap";

// index page sections
import EngNavbar from "components/Navbars/EngNavbar.js";
import HeroEnglish from "./IndexSections/HeroEnglish.js";
import EngFooter from "components/Footers/EngFooter.js";
import TransportesEnglish from "./IndexSections/TransportesEnglish.js";
import CardsEnglish from "./IndexSections/CardsEnglish.js";


//import Carousel from "./IndexSections/Carousel.js";

class IndexEnglish extends React.Component {
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
        <EngNavbar/>
        <HeroEnglish />
        <main ref="main">
          <Container>
          <CardsEnglish />
          <TransportesEnglish />
          </Container>
      
        </main>
        <EngFooter/>
      </>
    );
  }
}

export default IndexEnglish;
