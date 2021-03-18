import { css } from "@emotion/core";

export const todo = ({ theme }) =>
  css`
    position: relative;
    /* flex: 1 0 auto; */
    text-align: center;
    min-height: 34px;
    margin: 16px 0 0;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    border-bottom: 1px solid ${theme.color.primary.black};
  `;

export const todoText = ({ theme, isCompleted }) =>
  css`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    text-decoration: ${isCompleted ? "line-through" : "initial"};
    color: ${theme.color.primary.black};
    height: 50px;
  `;
