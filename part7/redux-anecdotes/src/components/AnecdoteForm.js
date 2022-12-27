import React from "react";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import { Form, Button } from "react-bootstrap";

const AnecdoteForm = ({ createAnecdote, setNotification }) => {
  const addAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = "";

    createAnecdote(content);

    setNotification(`Successfully added anecdote`, 5);
  };

  return (
    <div>
      <h2>Create New</h2>
      <Form onSubmit={addAnecdote}>
        <Form.Group>
          <Form.Label htmlFor="anecdote">Anecdote:</Form.Label>{" "}
          <Form.Control type="text" name="anecdote" />
          <br />
          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

const ConnectedAnecdoteForm = connect(null, {
  createAnecdote,
  setNotification,
})(AnecdoteForm);
export default ConnectedAnecdoteForm;
