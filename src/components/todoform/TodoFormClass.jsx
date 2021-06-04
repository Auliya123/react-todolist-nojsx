import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";
import styled from "@emotion/styled";

import Button from "../button/ButtonClass";
import Container from "../../layout/Container";
import Item from "../../layout/Item";

const StyledInput = styled.input`
  background: unset;
  border: unset;
  padding: 10px;
  flex: 1;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.red};
  outline: unset;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  text-transform: lowercase;
`;

const StyledSection = styled.section`
  padding: 16px;
`;

class TodoForm extends React.Component {
  state = {
    value: ""
  };

  handleSubmit = (e) => {
    const { value } = this.state;
    const { addTodo } = this.props;

    e.preventDefault();

    if (!value) {
      alert("no blank todo");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text !");
      this.setState({
        value: ""
      });
      return; //Mencegah ke proses selanjutnya, jadi balik ke if lagi
    }

    addTodo(value);
    this.setState({
      value: ""
    });
  };

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { showAdd, theme } = this.props;
    if (showAdd) {
      return (
        <StyledSection className="todoform">
          <form onSubmit={this.handleSubmit}>
            <Container alignItems="flex-start">
              <StyledInput
                theme={theme}
                type="text"
                value={this.state.value}
                onChange={this.handleOnChange}
              />
              <Button text="Add" />
            </Container>
          </form>
        </StyledSection>
      );
    } else {
      return null;
    }
  }

  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.func.isRequired
  };
}

export default withTheme(TodoForm);
