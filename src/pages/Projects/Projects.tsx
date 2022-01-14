// Core
import React, { useState } from "react";

// Local components
import { Container, Row } from "src/components/grid";
import { Text } from "src/components/text";

// Vendors
import styled, { css } from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
// Import Swiper React components
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Button = styled.button`
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
    border-radius: ${defaultGutter * 2}px;
    margin: 0 10px;

    &:hover {
      background-color: transparent;
      color: ${colors["secondary"]};
    }
  `}
`;

const SlideWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 50px 0;
  width: 80%;
  margin: auto;
`;

const Links = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding: 20px 10px;
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

export default function Projects() {
  const myProjects = [
    {
      name: "Game over shop",
      desc: "E commerce store made with ReactJS. Technologies used to create the application are React Context API Firebase...",
      github: "https://github.com/jovansmiljanic/GameOver_Shop",
      liveLink: "https://game-over-shop.vercel.app/",
      imagePath:
        "https://ik.imagekit.io/benntsopnyab/tr:w-300/gameovershop_quHkMJemv.jpg?updatedAt=1633106247785",
      tags: "react",
    },
    {
      name: "Facebook clone",
      desc: "Full-stack Facebook clone made with react, express, graphql...",
      github: "https://github.com/jovansmiljanic/Facebook_Clone",

      imagePath:
        "https://ik.imagekit.io/benntsopnyab/tr:w-300/facebook_Kwi4cyJOvb.png?updatedAt=1633106247605",
      tags: "react",
    },

    {
      name: "Natours Travel",
      desc: "Traveling agency landing page",
      github: "https://github.com/jovansmiljanic/Natours_Travel",
      liveLink: "https://advanced-css-natours.netlify.app/",
      imagePath:
        "https://ik.imagekit.io/benntsopnyab/tr:w-300/natours_U2R-3bjyIC.png?updatedAt=1641465509877",
      tags: "html",
    },
    {
      name: "Nexter RealEstate",
      desc: "Real Estate landing page.",
      github: "https://github.com/jovansmiljanic/Nexter_RealEstate",
      liveLink: "https://nexter-css.netlify.app/",
      imagePath:
        "https://ik.imagekit.io/benntsopnyab/tr:w-300/nexter_kuEkGFrgl.png?updatedAt=1642172420687",
      tags: "html",
    },

    {
      name: "Trillo Hotels",
      desc: "Hotel review landing page. Custom css-flex-box practise.",
      github: "https://github.com/jovansmiljanic/Trillo_Hotels",
      liveLink: "https://trillo-flex-box-css.netlify.app/",
      imagePath:
        "https://ik.imagekit.io/benntsopnyab/tr:w-300/trilo_ID1Oq4hu1f3.png?updatedAt=1642172657962",
      tags: "html",
    },
    {
      name: "Cookbook",
      desc: "Next.JS app for adding and using recipes.",
      github: "https://github.com/jovansmiljanic/CookBook",
      liveLink: "https://cook-book-six.vercel.app/",
      imagePath:
        "https://ik.imagekit.io/benntsopnyab/tr:w-300/cookbook_hyAQ5eO-Z.png?updatedAt=1642173392868",
      tags: "react",
    },

    {
      name: "Cocktails",
      desc: "Next.JS app for making cocktails.",
      github: "https://github.com/jovansmiljanic/Cocktail_Recipes",

      imagePath:
        "https://ik.imagekit.io/benntsopnyab/tr:w-300/cocktails_Z4mji43ok.png?updatedAt=1642173594749",
      tags: "react",
    },
  ];

  const params = {
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  };

  SwiperCore.use([Autoplay]);

  const [projects, setProjects] = useState(myProjects);

  const allProjects = myProjects;
  const htmlProjects = myProjects.filter(project => project.tags === "html");
  const reactProjects = myProjects.filter(project => project.tags === "react");

  return (
    <>
      <Container id="projects" justifyContent="center" alignItems="center">
        <Row justifyContent="center" alignItems="center">
          <Button onClick={() => setProjects(allProjects)}>All</Button>
          <Button onClick={() => setProjects(htmlProjects)}>HTML / CSS</Button>
          <Button onClick={() => setProjects(reactProjects)}>
            React / Next.js
          </Button>
        </Row>
      </Container>

      <Swiper {...params}>
        {projects &&
          projects.map((project, i) => (
            <SwiperSlide key={i}>
              <SlideWrap>
                <Text as="h4" padding={{ top: 3, bottom: 1 }}>
                  {project.name}
                </Text>
                {project.liveLink ? (
                  <a href={`${project.liveLink}`}>
                    <img src={project.imagePath} alt={project.name} />
                  </a>
                ) : (
                  <img src={project.imagePath} alt={project.name} />
                )}
                <Text as="h6" textAlign={{ md: "center" }}>
                  {project.desc}
                </Text>
                <Links>
                  <a href={project.github}>Git</a>
                  {project.liveLink && <a href={project.liveLink}>Live</a>}
                </Links>
              </SlideWrap>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
