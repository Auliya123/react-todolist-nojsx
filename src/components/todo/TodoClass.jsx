import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "emotion-theming";
import styled from "@emotion/styled";

const StyledTodo = styled.div`
  position: relative;
  /* flex: 1 0 auto; */
  text-align: center;
  min-height: 34px;
  margin: 16px 0 0;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  border-bottom: 1px solid ${(props) => props.theme.color.primary.black};
`;

const StyledTodoText = styled.span`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  text-decoration: ${(props) =>
    props.isCompleted ? "line-through" : "initial"};
  color: ${(props) => props.theme.color.primary.black};
  height: 50px;
`;

class Todo extends React.Component {
  render() {
    const { text, completeTodo, index, isCompleted, theme } = this.props;
    return (
      <StyledTodo theme={theme} onClick={() => completeTodo(index)}>
        <StyledTodoText theme={theme} isCompleted={isCompleted}>
          {text}
        </StyledTodoText>
      </StyledTodo>
    );
  }
  static propTypes = {
    text: PropTypes.string.isRequired,
    completeTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    isCompleted: PropTypes.bool.isRequired
  };
}

export default withTheme(Todo);
