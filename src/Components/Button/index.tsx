// Core
import React from "react";

// Core types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

interface Button {
  outline?: boolean;
}

const defaultStyle = `
  border-width: 1px;
  border-style: solid;
  text-decoration: none;
  display: inline-flex;
  cursor: pointer;
`;

/* Primary style */
export const Primary = styled.a<Button>`
  ${defaultStyle};

  ${({ theme: { colors, defaultRadius, defaultGutter } }) => css`
    border-color: ${colors["primary"]};

    padding: ${defaultGutter / 1.5}rem ${defaultGutter}rem;
    background-color: ${colors["primary"]};
    color: ${colors["white"]};
    border-radius: ${defaultRadius}px;

    &:hover {
      background-color: transparent;
      color: ${colors["primary"]};
    }
  `}

  ${({ outline, theme: { colors } }) =>
    outline &&
    css`
      color: ${colors["primary"]};
      background-color: transparent;
      &:hover {
        background-color: ${colors["primary"]};
        color: ${colors["white"]};
      }
    `};
`;

/* Secondary style */
export const Secondary = styled.a<Button>`
  ${defaultStyle};

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

  ${({ outline, theme: { colors } }) =>
    outline &&
    css`
      color: ${colors["secondary"]};
      background-color: transparent;
      &:hover {
        background-color: ${colors["secondary"]};
        color: ${colors["white"]};
      }
    `};
`;

/* White style */
export const White = styled.a<Button>`
  ${defaultStyle};

  ${({ theme: { colors, defaultRadius, defaultGutter } }) => css`
    border-color: ${colors["white"]};
    padding: ${defaultGutter / 1.5}rem ${defaultGutter}rem;
    background-color: ${colors["white"]};
    color: ${colors["dark"]};
    border-radius: ${defaultRadius}px;
    &:hover {
      background-color: transparent;
      color: ${colors["dark"]};
    }
  `}

  ${({ outline, theme: { colors } }) =>
    outline &&
    css`
      color: ${colors["white"]};
      background-color: transparent;
      &:hover {
        background-color: white;
        color: ${colors["dark"]};
      }
    `};
`;

const Components: { [key: string]: string } = {
  Primary,
  White,
};

interface Button {
  color: string;
  [key: string]: any;
}

const index: FC<Button> = ({ color, ...props }) => {
  switch (color) {
    case "Primary":
      return <Primary {...props}>{props.children}</Primary>;
    case "White":
      return <White {...props}>{props.children}</White>;
    case "Secondary":
      return <Secondary {...props}>{props.children}</Secondary>;
    default:
      return <a {...props}>{props.children}</a>;
  }
};

export { index as Button };
