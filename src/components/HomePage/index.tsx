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
import girl from "../../assets/HomePgImage/Link → zh-announcement-billing.png.png";
import Navbar from "../Navbar/Navbar";

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
            <p style={{ marginTop: 20 }}>FEATURED APPS</p>
            <ul style={{ listStyle: "none" }}>
              <li>
                <img src="" alt="" />
                CRM <br /> Comprehensive CRM platform for customer-facing teams.
              </li>
              <li>
                <img src="" alt="" />
                Desk <br />
                Helpdesk software to deliver <br />
                great customer support.
              </li>
              <li>
                <img src="" alt="" />
                Mail <br /> Secure email service for your <br /> business.
              </li>
              <li>
                <img src="" alt="" />
                Books <br />
                Powerful financial platform for <br /> growing businesses.
              </li>
              <li>
                <img src="" alt="" />
                Assist <br />
                Remote support and <br /> unattended remote access <br />{" "}
                software.
              </li>
            </ul>
          </div>
        </Feature>
      </Container>
    </>
  );
}

export default HomePage;
