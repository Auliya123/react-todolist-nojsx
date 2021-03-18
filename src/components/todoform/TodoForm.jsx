/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useTheme } from "emotion-theming";
import React from "react";
import PropTypes from "prop-types";

// import styles from "./todoform.module.css";

import * as styles from "./todoform.styles";
import Container from "../../layout/Container";

const TodoForm = ({ addTodo, showAdd }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("no blank todo");
      return;
    }

    if (value.length > 40) {
      alert("Please create a shorter todo text !");
      setValue("");
      return; //Mencegah ke proses selanjutnya, jadi balik ke if lagi
    }

    addTodo(value);
    setValue("");
  };

  if (showAdd) {
    return (
      <section css={styles.add}>
        <form css={styles.addForm} onSubmit={handleFormSubmit}>
          <Container alignItems="flex-start">
            <input
              type="text"
              css={styles.addInput({ theme })}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button css={styles.addBtn({ theme })}>Add</button>
          </Container>
        </form>
      </section>
    );
  } else {
    return null;
  }
};

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired
};
export default TodoForm;
