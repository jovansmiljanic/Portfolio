import React from "react";

import logo from "../../assets/logo.svg";
import { Container, Row, Column } from "../Grid";

// import { ReactComponent as Email } from "../../assets/gmail.svg";
// import { ReactComponent as Map } from "../../assets/map.svg";
// import { ReactComponent as Phone } from "../../assets/phone.svg";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Column>
          <div>
            <img src={logo} alt="logo" />
          </div>
        </Column>
        <Column>
          <div>Home About Projects Contact</div>
        </Column>
        <Column>
          <div>
            <div>
              {/* <Email /> */}
              <p>smiljanicjovan9@gmail.com</p>
            </div>
            <div>
              {/* <Map /> */}
              <p>Ljubljana, Slovenija</p>
            </div>
            <div>
              {/* <Phone /> */}
              <p>+386 30 760 375</p>
            </div>
          </div>
        </Column>
      </Row>
    </Container>
  );
}
