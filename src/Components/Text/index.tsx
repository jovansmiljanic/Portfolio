// Vendors
import styled, { css } from "styled-components";

interface TextTypes {
  as: string;
  weight?: string;
  dark?: boolean;
  padding?: { [key: string]: number };
  textAlign?: { [key: string]: string };
}

const Headings = ({ as, def }: any) => {
  switch (as) {
    case "h1":
      return 36;
    case "h2":
      return 32;
    case "h3":
      return 28;
    case "h4":
      return 24;
    case "h5":
      return 20;
    case "h6":
      return 16;
    case "p":
      return 16;
    default:
      return def;
  }
};

export const Text = styled.h1<TextTypes>`
  ${({
    as,
    weight,
    color,
    textAlign,
    dark,
    padding,
    theme: { colorDark, font, colors, spaces, breakpoints },
  }) => css`
    ${padding &&
    Object.entries(padding).map(
      ([key, val]) => `padding-${key}: ${spaces[val]}px;`
    )}
    ${as &&
    `
        font-size: ${as ? Headings({ as, def: font.size }) : font.size}px;
        line-height: ${
          as ? Headings({ as, def: font.size }) * 1.35 : font.size * 1.35
        }px;
        ${
          as === "p"
            ? `
        line-height: ${
          as ? Headings({ as, def: font.size }) * 1.5 : font.size * 1.5
        }px;
        `
            : ""
        }
    `};
    // Dynamic text
    ${textAlign &&
    Object.entries(textAlign).map(
      ([key, val]): any =>
        `
        @media (${key === "sm" ? "max" : "min"}-width: ${breakpoints[key]}px) {
          text-align: ${val};
        }
      `
    )}
    ${weight &&
    `
    font-weight: ${font.weight[weight]};
    `}
    ${dark &&
    `
    color: ${colorDark};
    `}
    ${color &&
    `
    color: ${colors[color]};
    `}
  `}
`;

// export { Text };
