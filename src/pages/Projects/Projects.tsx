import React, { useState } from "react";
import { Container, Row, Column } from "src/components/Grid";
import { Text } from "src/components/Text";

// Vendors
import styled, { css } from "styled-components";

const ProjectWrap = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    width: 100%;

    display: flex;
    justify-content: space-between;
    // flex-wrap: wrap;
    align-item: center;
  `}
`;

const ProjectContainer = styled.div`
  ${({ theme: { colors, defaultRadius, defaultGutter, font } }) => css`
    display: flex;
    flex-direction: column;
    margin: 0 10px;
  `}
`;

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
    border-radius: ${defaultRadius}px;
    &:hover {
      background-color: transparent;
      color: ${colors["secondary"]};
    }
  `}
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
      liveLink: "#",
      imagePath:
        "https://ik.imagekit.io/benntsopnyab/tr:w-300/facebook_Kwi4cyJOvb.png?updatedAt=1633106247605",
      tags: "html",
    },
  ];

  const [projects, setProjects] = useState(myProjects);

  const allProjects = myProjects;
  const htmlProjects = myProjects.filter(project => project.tags === "html");
  const reactProjects = myProjects.filter(project => project.tags === "react");

  return (
    <Container
      id="projects"
      justifyContent="center"
      alignItems="center"
      height="80"
    >
      <Row justifyContent="center" alignItems="center">
        <Column responsivity={{ md: 12 }} textAlign={{ md: "center" }}>
          <Button onClick={() => setProjects(allProjects)}>All</Button>
          <Button onClick={() => setProjects(htmlProjects)}>HTML / CSS</Button>
          <Button onClick={() => setProjects(reactProjects)}>
            React / Next.js
          </Button>
        </Column>

        <ProjectWrap>
          {projects &&
            projects.map(project => (
              <Column responsivity={{ md: 4 }} textAlign={{ md: "center" }}>
                <ProjectContainer key={project.name}>
                  <Text as="h4">{project.name}</Text>
                  <img src={project.imagePath} alt={project.name} />
                  <Text as="h6">{project.desc}</Text>
                  <a href={project.github}>Git</a>
                  <a href={project.liveLink}>Live</a>
                </ProjectContainer>
              </Column>
            ))}
        </ProjectWrap>
      </Row>
    </Container>
  );
}
