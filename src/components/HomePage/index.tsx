import React from "react"
import {
  StyledDiv,
  Button,
  Picture,
  Feature,
  Region,
  Text,
  CustomNavlink,
} from "./stylesForHome"
import image from "../../assets/HomePgImage/Picture → zh-homev2-banner.webp.png"
import { ReactComponent as ZohoIcon } from "../../assets/HomePgImage/billing-logo.svg.svg"
import mail from "../../assets/HomePgImage/mail.png"
import book from "../../assets/HomePgImage/books.png"
import desk from "../../assets/HomePgImage/desk.png"
import creator from "../../assets/HomePgImage/creator.png"
import girl from "../../assets/HomePgImage/Link → zh-announcement-billing.png.png"
import crm from "../../assets/HomePgImage/crm.png"
import Navbar from "../Navbar"
import "./style.css"

function HomePage() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="main_left">
          <StyledDiv className="text">
            <Text
              style={{
                fontFamily: "sans-serif",
                marginBottom: "30px",
                fontSize: "50px",
              }}
            >
              Your life's work, <br /> powered by our life's work
            </Text>
            <p
              style={{
                marginBottom: "35px",
                fontFamily: "sans-serif",
                fontSize: "25px",
              }}
            >
              A unique and powerful software suite to transform the <br /> way
              you work. Designed for businesses of all sizes, built <br /> by a
              company that values your privacy{" "}
            </p>
            <Button>
              <p>Get Started For Free</p> <br />
              <img src="" alt="" />{" "}
            </Button>
          </StyledDiv>
          <Picture>
            <img src={image} alt="img" />
          </Picture>
          <Region className="region">
            <ul>
              <li className="coverr">
                <ZohoIcon />
              </li>
              <hr />
              <li className="cover">
                <p>A complete solution for every billing requirement.</p>
                <br />
                <CustomNavlink to="https://www.zoho.com/workplace/?ireft=nhome&src=home1">
                  <button>TRY NOW</button>
                </CustomNavlink>
              </li>
              <li className="covers">
                <img src={girl} alt="" />
              </li>
            </ul>
          </Region>
        </div>
        <Feature className="main_right">
          <div className="feature">
            <p>FEATURED APPS</p>
            <ul>
              <li>
                <img src={crm} alt="crm" />
                <span>
                  <b>CRM</b>
                  <br />
                  Comprehensive CRM platform
                  <br /> for customer-facing teams.
                </span>
              </li>

              <li>
                <img src={mail} alt="" />
                <span>
                  <b>Desk</b> <br />
                  Helpdesk software to deliver <br />
                  great customer support.
                </span>
              </li>

              <li>
                <img src={book} alt="" />
                <span>
                  <b>Mail</b> <br /> Secure email service for your <br />{" "}
                  business.
                </span>
              </li>

              <li>
                <img src={desk} alt="" />
                <span>
                  <b>Books</b> <br />
                  Powerful financial platform for <br /> growing businesses.
                </span>
              </li>

              <li>
                <img src={creator} alt="" />
                <span>
                  <b>Assist </b>
                  <br />
                  Remote support and <br /> unattended remote access <br />{" "}
                  software.
                </span>
              </li>
              <hr />
              <CustomNavlink
                to="https://www.zoho.com/all-products.html?ireft=nhome&src=home1"
                style={{ textDecoration: "none" }}
              >
                <h4>EXPLORE ALL PRODUCTS</h4>
              </CustomNavlink>
            </ul>
          </div>
        </Feature>
      </div>
    </div>
  )
}

export default HomePage
