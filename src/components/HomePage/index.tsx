import React from "react";
import {
  StyledDiv,
  Button,
  Container,
  Picture,
  Feature,
  Region,
} from "./styles";
import image from "../../assets/HomePgImage/Picture → zh-homev2-banner.webp.png";
import zoho from "../../assets/HomePgImage/billing-logo.svg.svg";
import mail from '../../assets/HomePgImage/mail.png';
import book from '../../assets/HomePgImage/books.png';
import desk from '../../assets/HomePgImage/desk.png'
import creator from '../../assets/HomePgImage/creator.png'
import girl from "../../assets/HomePgImage/Link → zh-announcement-billing.png.png";
import crm from '../../assets/HomePgImage/crm.png';
import Navbar from "../Navbar/Navbar";


// import Redux from "../../Redux";
// import { CheckRedux } from "../../CheckRedux";

function HomePage() {
  return (
    <>
      <Navbar />
      <Container className="container">
        <div className="main_left">
          <StyledDiv className="text">
            <h2>
              Your life&apos;s work, <br /> powered by our life&apos;s work
            </h2>
            <p>
              A unique and powerful software suite to transform the <br /> way
              you work. Designed for businesses of all sizes, built <br /> by a
              company that values your privacy{" "}
            </p>
            <Button>
              Get Started For Free <br />
              <img src="" alt="" />{" "}
            </Button>
          </StyledDiv>
          <Picture>
            <img src={image} alt="" />
          </Picture>
          <Region className="region">
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <li>
                <img src={zoho} alt="" />
              </li>
              <li>
                <p>A complete solution for every billing requirement.</p>
                <br />
                <button>Try now</button>
              </li>
              <li>
                <img src={girl} alt="" />
              </li>
            </ul>
          </Region>
        </div>
        <Feature className="main_right">
          {" "}
          <div className="feature">
            <p style={{ marginTop: "20px", marginLeft: "50px" }}>FEATURED APPS</p>
            <ul style={{ listStyle: "none", margin: "20px 20px 20px 50px" }}>
              <li style={{display:"flex", flexDirection: "row", marginBottom: "50px"}}>
                <img src={crm} alt="" />
                 <span><b>CRM</b><br />
                   Comprehensive CRM platform<br /> for customer-facing teams.</span>
              </li>

              <li style={{display:"flex", flexDirection: "row",marginBottom: "50px"}}>
                <img src={mail}  alt="" />
                <span><b>Desk</b> <br />
                Helpdesk software to deliver <br />
                great customer support.</span>
              </li>

              <li style={{display:"flex", flexDirection: "row",marginBottom: "50px"}}>
                <img src={book} alt="" />
                <span><b>Mail</b> <br /> Secure email service for your <br /> business.</span>
              </li>

              <li style={{display:"flex", flexDirection: "row", marginBottom: "50px"}}>
                <img src={desk} alt="" />
                <span><b>Books</b> <br />
                Powerful financial platform for <br /> growing businesses.</span>
              </li>

              <li style={{display:"flex", flexDirection: "row", marginBottom: "50px"}}>
                <img src={creator} alt="" />
                <span><b>Assist </b><br />
                Remote support and <br /> unattended remote access <br />{" "}
                software.</span>
              </li>
              <hr />
              <h4 style={{marginTop: "30px", color: "#056cb8", fontFamily:"sans-serif"}}>EXPLORE ALL PRODUCTS</h4>
            </ul>
          </div>
        </Feature>
      </Container>
    </>
  );
}

export default HomePage;
