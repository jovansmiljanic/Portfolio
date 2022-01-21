// Types
import type { FC } from "react";

// Vendors
import styled, { css } from "styled-components";

interface Roww {
  padding?: { [key: string]: number };
  children: any;
  alignItems?: string;
  justifyContent?: string;
}

const Row = styled.div<Roww>`
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  ${({ padding, theme: { spaces } }) => css`
    ${padding &&
    Object.entries(padding).map(
      ([key, val]): any => `padding-${key}: ${spaces[val as number]}px;`
    )}
  `}

  ${({
    alignItems,
    justifyContent,
    theme: { breakpoints, defaultGutter, spaces },
  }) => css`
    margin-left: -${defaultGutter}rem;
    margin-right: -${defaultGutter}rem;

    @media (max-width: ${breakpoints.sm}px) {
      flex-wrap: wrap;
    }

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

const index: FC<Roww> = ({
  alignItems,
  justifyContent,
  children,
  ...props
}) => {
  return (
    <Row {...props} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </Row>
  );
};

export default index;
