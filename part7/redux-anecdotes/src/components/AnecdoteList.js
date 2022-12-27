import React from "react";
import { connect } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";
import styles from "./AnecdoteList.module.css";
import { Table, Button } from "react-bootstrap";
const AnecdoteList = ({ filter, anecdotes, voteAnecdote, setNotification }) => {
  const anecdotesToShow = () => {
    if (filter.filter === "") return anecdotes;

    return anecdotes
      .filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.filter.toLowerCase())
      )
      .sort((a, b) => (a.votes > b.votes ? -1 : 1));
  };

  const vote = (votedAnecdote) => {
    voteAnecdote(votedAnecdote);

    setNotification(`You voted ${votedAnecdote.content}`, 5);
  };
  return (
    <>
      <Table striped>
        <tbody>
          {anecdotesToShow()
            .sort((a, b) => (a.votes > b.votes ? -1 : 1))
            .map((anecdote) => (
              <tr>
                <div className={styles.anecdoteContainer} key={anecdote.id}>
                  <td>
                    <div>{anecdote.content}</div>
                  </td>
                  <div className={styles.voteContainer}>
                    <td>
                      <span className={styles.numVotes}>
                        has {anecdote.votes}
                      </span>
                    </td>
                    <Button onClick={() => vote(anecdote)}>vote</Button>
                  </div>
                </div>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

const mapStateToProps = ({ anecdotes, filter }) => {
  return {
    anecdotes,
    filter,
  };
};

const ConnectedAnecdoteList = connect(mapStateToProps, {
  voteAnecdote,
  setNotification,
})(AnecdoteList);
export default ConnectedAnecdoteList;
