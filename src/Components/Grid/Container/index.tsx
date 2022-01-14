// Types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

interface Props {
  fluid?: boolean;
  height?: string;
  alignItems?: string;
  justifyContent?: string;
  backgroundColor?: string;
  color?: string;
  [key: string]: any;
}

const Container = styled.div<Props>`
  width: 100%;
  display: flex;
  // flex-direction: column;
  // flex-wrap: wrap;
  margin-left: auto;
  margin-right: auto;

  ${({
    alignItems,
    justifyContent,
    height,
    fluid,
    theme: { defaultGutter, breakpoints, colors },
  }) => css`
    padding-left: ${defaultGutter}rem;
    padding-right: ${defaultGutter}rem;

    ${fluid
      ? `
    max-width: 100%;
    `
      : `    
    @media (min-width: ${breakpoints.md}px) {
      max-width: ${breakpoints.md - 30}px;
    }

    @media (min-width: ${breakpoints.lg}px) {
      max-width: ${breakpoints.lg - 30}px;
    }
    `}

    ${height &&
    `
      min-height: ${height}vh;
    `}


    ${alignItems &&
    `
    
      align-items: ${alignItems};
      `}
      ${justifyContent &&
    `
      justify-content: ${justifyContent};
      `}
  `}
`;

const Wrapper = styled.div<{ backgroundColor: string; textColor: string }>`
  width: 100%;
  position: relative;

  ${({ backgroundColor, textColor, theme: { colors } }) => `

  ${
    backgroundColor &&
    `
    background-color: ${colors[backgroundColor]};
    `
  }

  ${
    textColor &&
    `
    color: ${colors[textColor]};
  `
  }
`}
`;

const index: FC<Props> = ({
  color,
  style,
  backgroundColor,
  children,
  ...props
}) => {
  return (
    <Wrapper
      backgroundColor={backgroundColor ? backgroundColor : ""}
      textColor={color ? color : ""}
      {...props}
    >
      <Container
        alignItems={props.alignItems}
        justifyContent={props.justifyContent}
        height={props.height}
        fluid={props.fluid}
      >
        {children}
      </Container>
    </Wrapper>
  );
};

export default index;
