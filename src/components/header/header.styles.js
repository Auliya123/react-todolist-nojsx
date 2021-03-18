import { css } from "@emotion/core";

export const header = () =>
  css`
    /* display: flex;
    align-items: flex-start; */
  `;

export const headerTitle = (theme) =>
  css`
    /* width: 52%; */
    text-align: center;
    font-size: 3.6rem;
    font-family: "Montserrat", sans-serif;
    text-transform: lowercase;
    color: ${theme.color.primary.black};
  `;
