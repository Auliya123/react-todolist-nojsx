import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { useTheme } from "emotion-theming";

import * as styles from "./button.styles";

const StyledButton = styled.button`
  font-size: 1.8rem;
  font-family: "Bungee", sans-serif;
  color: ${textColor};

  /* width: 24%; */
  padding: 16px;
  cursor: pointer;
  background: unset;
  border: unset;
  outline: unset;
  text-align: ${align};
`;

class Button extends React.Component {
  render() {
    const { text, onClick, color, align } = this.props;

    return <StyledButton></StyledButton>;
  }

  static defaultProps = {
    text: "Button",
    color: "black",
    align: "left"
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["left", "right"])
  };
}

export default Button;
