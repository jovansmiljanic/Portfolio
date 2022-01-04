// Core
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

interface Props {
  padding?: { [key: string]: any };
  responsivity: { [key: string]: any };
  textAlign?: { [key: string]: any };
  order?: { [key: string]: any };
  style?: object;
  center?: boolean;
}

const Column = styled.div<Props>`
  ${({
    padding,
    center,
    responsivity,
    textAlign,
    order,
    theme: { breakpoints, defaultGutter, spaces },
  }) => css`
    padding-left: ${defaultGutter}rem;
    padding-right: ${defaultGutter}rem;
    flex: 1;

    // Margin auto alignment
    ${center &&
    css`
      margin-left: auto;
      margin-right: auto;
    `}

    // Default
    ${responsivity &&
    !responsivity.sm &&
    `@media (max-width: ${breakpoints.sm}px) {
      flex: 0 0
       100%;
    }`}

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

    // Dynamic order
    ${order &&
    Object.entries(order).map(
      ([key, val]): any =>
        `
        @media (${key === "sm" ? "max" : "min"}-width: ${breakpoints[key]}px) {
          order: ${val};
        }
      `
    )}

    // Dynamic padding
    ${padding &&
    Object.entries(padding).map(
      ([key, val]): any => `padding-${key}: ${spaces[val as number]}px;`
    )}

    // Dynamic responsivity
    ${responsivity &&
    Object.entries(responsivity).map(
      ([key, val]): any =>
        `
        @media (${key === "sm" ? "max" : "min"}-width: ${breakpoints[key]}px) {
          ${val ? `flex: 0 0 ${(val / 12) * 100}%;` : `flex: 1;`}
        }
      `
    )}
  `}
`;

const index: FC<Props> = ({ children, ...props }) => {
  return <Column {...props}>{children}</Column>;
};

export default index;
