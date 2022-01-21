// Core types
import React, { useRef, useState } from "react";

// Local components
import { Container, Row, Column } from "../../Components/Grid";
import { Text } from "../../Components/Text";

// Vendors
import styled, { css } from "styled-components";
import emailjs from "@emailjs/browser";

const Wrapper = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    width: 100%;
    color: ${colors.white};

    padding: 20px 30px;
  `}
`;

const Form = styled.form`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background-color: white;
    border-radius: 5px;
    padding: 30px 0;

    h4 {
      color: black;
      padding: 20px 0;
    }
  `}
`;

const InfoGroup = styled.form`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    margin: 50px 0;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  `}
`;

const Input = styled.input`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    padding: 5px 10px;
    width: 85%;
    outline: none;

    margin: 20px auto;
    padding: 15px 10px;
    border: 2px solid ${colors.primary};
    border-radius: 5px;

    font-family: inherit;

    &:focus {
      border: 2px solid ${colors.secondary};
    }
  `}
`;

const Textarea = styled.textarea`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    padding: 5px 10px;
    width: 85%;
    outline: none;

    font-family: inherit;
    margin: 20px auto;
    padding: 10px;
    border: 2px solid ${colors.primary};
    border-radius: 5px;

    &:focus {
      border: 2px solid ${colors.secondary};
    }
  `}
`;

export const Button = styled.button`
  border-width: 1px;
  border-style: solid;
  text-decoration: none;
  display: inline-flex;
  cursor: pointer;
  ${({ theme: { colors, defaultRadius, defaultGutter } }) => css`
    border-color: ${colors["secondary"]};
    padding: ${defaultGutter / 1.5}rem ${defaultGutter}rem;
    background-color: ${colors["secondary"]};
    color: ${colors["white"]};
    border-radius: ${defaultRadius}px;
    &:hover {
      background-color: transparent;
      color: ${colors["secondary"]};
    }
  `}
`;

export default function Contact() {
  const form: any = useRef(null);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    //Reset after submit
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_6o6e1ai",
        "template_wu6y9pm",
        form.current,
        "user_yyoT4Ti1co5BxQdmJNz4D"
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
  };

  const information = [
    {
      info: "smiljanicjovan9@gmail.com",
      img: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M448 64H64V448H448V64Z" fill="#ECEFF1" />
          <path d="M256 296.384L448 448V148.672L256 296.384Z" fill="#CFD8DC" />
          <path
            d="M464 64H448L256 215.616L64 64H48C21.504 64 0 85.504 0 112V400C0 426.496 21.504 448 48 448H64V148.672L256 296.352L448 148.64V448H464C490.496 448 512 426.496 512 400V112C512 85.504 490.496 64 464 64Z"
            fill="#F44336"
          />
        </svg>
      ),
    },
    {
      info: "Ljubljana, Slovenija",
      img: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.9905 37.1629L36.848 19.8495C36.8167 19.6767 36.7095 19.527 36.5559 19.4416L28.6464 15.0424C28.5437 14.9852 28.4287 14.9625 28.3156 14.9712L29.7546 33.5344L29.7064 33.5559L39.1723 37.8026C39.2494 37.837 39.3312 37.8541 39.4127 37.8541C39.5417 37.8541 39.6695 37.8116 39.7746 37.7294C39.9463 37.5953 40.0294 37.3772 39.9905 37.1629Z"
            fill="#44C868"
          />
          <path
            d="M20 19.248L11.9106 15.0347C11.8136 14.9841 11.7061 14.9635 11.6002 14.9706C11.6283 14.9689 11.6565 14.9691 11.6845 14.9712L10.2455 33.5344L19.7596 37.8027C19.8364 37.837 19.9184 37.8541 20 37.8541V19.248Z"
            fill="#44C868"
          />
          <path
            d="M11.6844 14.9713C11.5713 14.9626 11.4562 14.9853 11.3536 15.0424L3.44397 19.4416C3.29038 19.527 3.18319 19.6766 3.15187 19.8495L0.00944356 37.1629C-0.0294627 37.3771 0.0536623 37.5952 0.225303 37.7295C0.330537 37.8117 0.458272 37.8541 0.587178 37.8541C0.668662 37.8541 0.750615 37.8372 0.827569 37.8027L10.2419 33.5791L11.6844 14.9713Z"
            fill="#4CE166"
          />
          <path
            d="M28.3155 14.9709C28.2377 14.977 28.1608 14.9977 28.0895 15.0348L20 19.2481V37.8542C20 37.8542 20 37.8542 20.0001 37.8542C20.0817 37.8542 20.1638 37.8372 20.2405 37.8027L29.7546 33.5345L28.3155 14.9709Z"
            fill="#4CE166"
          />
          <path
            d="M2.19952 25.0963L1.56116 28.6134L11.0138 23.6208L11.2333 20.7896L11.2697 20.3201L2.19952 25.0963Z"
            fill="#FFDB56"
          />
          <path
            d="M11.0989 22.523L11.0138 23.6208L1.56116 28.6134L0.00944356 37.1629C-0.0294627 37.3771 0.0536623 37.5952 0.225303 37.7295C0.330537 37.8117 0.458272 37.8541 0.587178 37.8541C0.668662 37.8541 0.750615 37.8372 0.827569 37.8027L10.2419 33.5791L11.0989 22.523Z"
            fill="#A8EEFC"
          />
          <path
            d="M20.0023 21.5687L11.2697 20.3201L11.0138 23.6208L20 37.2676V32.3052L14.6377 23.8616L20.0023 24.5033V21.5687Z"
            fill="#FFBB24"
          />
          <path
            d="M35.9333 19.0954L32.1337 16.982L28.5366 17.8225L28.5816 18.4034L28.7593 20.6952L35.9333 19.0954Z"
            fill="#FFBB24"
          />
          <path
            d="M29.0783 24.8106L28.7376 20.4162L28.5366 17.8225L20.0023 21.5687V24.5033L25.577 22.0791L29.0783 24.8106Z"
            fill="#FFDB56"
          />
          <path
            d="M39.9905 37.1629L39.2012 32.814L28.7593 20.6952L29.0783 24.8106L39.7869 37.7185C39.9497 37.5836 40.0284 37.3717 39.9905 37.1629Z"
            fill="#FFBB24"
          />
          <path
            d="M20.0376 2.1457C15.5092 2.1457 11.8251 5.8268 11.8251 10.3515C11.8251 13.1504 13.1539 16.1554 15.7748 19.2829C17.6997 21.58 19.5984 23.0574 19.6784 23.1192C19.7841 23.201 19.9109 23.2419 20.0377 23.2419C20.1644 23.2419 20.2912 23.201 20.3969 23.1192C20.4768 23.0574 22.3756 21.58 24.3005 19.2829C26.9214 16.1554 28.2502 13.1505 28.2502 10.3515C28.2501 5.8268 24.5659 2.1457 20.0376 2.1457ZM23.079 10.3514C23.079 12.0297 21.7173 13.3903 20.0376 13.3903C18.3579 13.3903 16.9962 12.0298 16.9962 10.3514C16.9962 8.67305 18.3579 7.3125 20.0376 7.3125C21.7173 7.3125 23.079 8.67312 23.079 10.3514Z"
            fill="#FF4A4A"
          />
          <path
            d="M20.0376 2.1457C19.6787 2.1457 19.3251 2.16898 18.9783 2.21383C23.0082 2.73469 26.1316 6.18539 26.1316 10.3515C26.1316 13.1504 24.8027 16.1554 22.1819 19.2829C20.944 20.7601 19.7178 21.8975 18.9784 22.5383C19.3888 22.8939 19.6499 23.0972 19.6783 23.1192C19.7841 23.201 19.9108 23.2419 20.0376 23.2419C20.1644 23.2419 20.2912 23.201 20.3969 23.1192C20.4768 23.0574 22.3756 21.58 24.3005 19.2829C26.9214 16.1554 28.2502 13.1505 28.2502 10.3515C28.2501 5.8268 24.5659 2.1457 20.0376 2.1457Z"
            fill="#E7343F"
          />
          <path
            d="M20.2405 37.8027L23.7784 36.2155L20 32.3052V37.8541C20 37.8541 20 37.8541 20.0001 37.8541C20.0817 37.8541 20.1637 37.8372 20.2405 37.8027Z"
            fill="#FFDB56"
          />
          <path
            d="M36.848 19.8495C36.8166 19.6767 36.7095 19.527 36.5559 19.4416L35.9332 19.0953L28.7592 20.6951L39.2011 32.8139L36.848 19.8495Z"
            fill="#1EA4E9"
          />
          <path
            d="M19.9999 37.8541C20 37.8541 20 37.8541 19.9999 37.8541V37.2676L11.0138 23.6208L10.2453 33.5345L19.7594 37.8027C19.8362 37.8372 19.9182 37.8541 19.9999 37.8541Z"
            fill="#1EA4E9"
          />
        </svg>
      ),
    },
    {
      info: "+386 30 760 375",
      img: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
            fill="#6AAF50"
          />
          <path
            d="M135.693 102.206L135.685 102.21C106.046 117.674 93.611 153.432 107.191 183.98C126.738 227.955 152.984 268.178 184.659 303.403L208.598 327.342L367.671 486.415C407.491 467.08 441.534 437.725 466.547 401.632L407.85 342.935C405.588 339.601 402.681 336.636 399.169 334.254L177.747 112.833C168.453 99.138 150.365 94.55 135.693 102.206Z"
            fill="#4D8538"
          />
          <path
            d="M349.593 300.614C341.401 295.055 330.639 295.083 322.477 300.685L310.725 308.751C297.635 317.735 280.227 317.247 267.645 307.564C255.787 298.437 244.469 288.651 233.721 278.281C223.35 267.533 213.565 256.216 204.438 244.357C194.754 231.776 194.267 214.368 203.251 201.277L211.317 189.525C216.918 181.363 216.947 170.601 211.388 162.409L177.748 112.834C168.455 99.14 150.367 94.552 135.694 102.207L135.685 102.211C106.046 117.675 93.611 153.433 107.191 183.981C126.738 227.956 152.984 268.179 184.659 303.404L208.598 327.343C243.824 359.017 284.047 385.264 328.021 404.811C358.57 418.391 394.327 405.956 409.791 376.317L409.795 376.308C417.45 361.636 412.863 343.547 399.168 334.254L349.593 300.614Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <Container
      id="contact"
      justifyContent="center"
      alignItems="center"
      height="80"
      backgroundColor="dark"
      color="white"
    >
      <Wrapper>
        <Row justifyContent="center" alignItems="center">
          <Column responsivity={{ md: 4 }}>
            {information &&
              information.map(info => (
                <InfoGroup key={info.info}>
                  {info.img}
                  <p>{info.info}</p>
                </InfoGroup>
              ))}
          </Column>
          <Column responsivity={{ md: 8 }}>
            <Form ref={form} onSubmit={sendEmail}>
              <Text as="h4">Get a quote</Text>
              <Input
                type="text"
                name="user_name"
                value={name}
                placeholder="Full name*"
                onChange={e => setName(e.target.value)}
                required
              />

              <Input
                type="email"
                name="user_email"
                placeholder="Email*"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />

              <Textarea
                rows={8}
                name="message"
                placeholder="Message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
              />
              <Button color="Secondary" type="submit">
                Send
              </Button>
            </Form>
          </Column>
        </Row>
      </Wrapper>
    </Container>
  );
}
