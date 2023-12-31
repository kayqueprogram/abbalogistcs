// eslint-disable-next-line
import React from "react";
import { Helmet } from "react-helmet";

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
          <title>Home - Abba Logistics</title>
          <meta
            name="description"
            content="Since 2023 creating logistics solutions for you!"
          />

          <meta property="og:url" content="https://abbalogistics.com.br/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Abba Logistics" />
          <meta
            property="og:description"
            content="Since 2023 creating logistics solutions for you!"
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
            content="Since 2023 creating logistics solutions for you!"
          />
          <meta
            name="twitter:image"
            content="https://cdn.discordapp.com/attachments/995485098336067675/1187822173981790248/abbaLogisticsLogo.jpg?ex=6598489a&is=6585d39a&hm=227ad73ee8739e48f7e825e897537e224e6d6686df095e4d79c539c991c9a586&"
          />
        </Helmet>
        <EngNavbar />
        <HeroEnglish />
        <main ref="main">
          <Container>
            <CardsEnglish />
            <TransportesEnglish />
          </Container>
        </main>
        <EngFooter />
      </>
    );
  }
}

export default IndexEnglish;
