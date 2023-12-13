// eslint-disable-next-line
import React from "react";
import { Helmet } from "react-helmet"

// reactstrap components
import { Container } from "reactstrap";

// index page sections
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Hero from "./IndexSections/Hero.js"; 
import CardsFooter from "components/Footers/CardsFooter.js";
import Cards from "./IndexSections/Cards.js";
import Transportes from "./IndexSections/Transportes.js";
//import Carousel from "./IndexSections/Carousel.js";

class Index extends React.Component {
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
        <DemoNavbar />
        <Hero/>
        <main ref="main">
          <Container>
          <Cards />
          <Transportes />
          </Container>
      
        </main>
        <CardsFooter/>
      </>
    );
  }
}

export default Index;
