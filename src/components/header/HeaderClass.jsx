import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";
import styled from "@emotion/styled";

import Button from "../button/ButtonNoJSX";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 3.6rem;
  font-family: "Montserrat", sans-serif;
  text-transform: lowercase;
  color: ${(props) => props.theme.color.primary.black};
`;

class Header extends React.Component {
  render() {
    const { showAddToggle, showAdd, clearTodos, theme } = this.props;
    console.log("theme", theme);
    return (
      <section className="header-component">
        <Container alignItems="flex-start">
          <Item flex={1}>
            <Button text={showAdd ? "Finish" : "Add"} onClick={showAddToggle} />
          </Item>
          <Item flex={2}>
            <StyledH1 theme={theme}>Todo Lists</StyledH1>
          </Item>
          <Item flex={1} align="right">
            <Button text="Clear" onClick={clearTodos} color="red" />
          </Item>
        </Container>
      </section>
    );
  }
  static propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodos: PropTypes.func.isRequired
  };
}

export default withTheme(Header);
