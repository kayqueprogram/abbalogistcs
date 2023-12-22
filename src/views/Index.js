// eslint-disable-next-line
import React from "react";
import { Helmet } from "react-helmet";

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
          <title>Abba Logistics</title>
          <meta
            name="description"
            content="Desde 2023 criando soluções em logística para você!"
          />

          <meta property="og:url" content="https://abbalogistics.com.br/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Abba Logistics" />
          <meta
            property="og:description"
            content="Desde 2023 criando soluções em logística para você!"
          />
          <meta
            property="og:image"
            content="https://cdn.discordapp.com/attachments/995485098336067675/1187822173981790248/abbaLogisticsLogo.jpg?ex=6598489a&is=6585d39a&hm=227ad73ee8739e48f7e825e897537e224e6d6686df095e4d79c539c991c9a586&"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="abbalogistics.com.br" />
          <meta
            property="twitter:url"
            content="https://abbalogistics.com.br/"
          />
          <meta name="twitter:title" content="Abba Logistics" />
          <meta
            name="twitter:description"
            content="Desde 2023 criando soluções em logística para você!"
          />
          <meta
            name="twitter:image"
            content="https://cdn.discordapp.com/attachments/995485098336067675/1187822173981790248/abbaLogisticsLogo.jpg?ex=6598489a&is=6585d39a&hm=227ad73ee8739e48f7e825e897537e224e6d6686df095e4d79c539c991c9a586&"
          />
        </Helmet>
        <DemoNavbar />
        <Hero />
        <main ref="main">
          <Container>
            <Cards />
            <Transportes />
          </Container>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Index;
