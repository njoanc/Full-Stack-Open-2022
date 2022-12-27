import React from "react";
import Filter from "./Filter";
import AnecdoteList from "./AnecdoteList";
const Form = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <AnecdoteList />
    </div>
  );
};

export default Form;
