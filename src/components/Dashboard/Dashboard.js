import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from '../../api/config';

import { GlobalContext } from '../globalState';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

const Dashboard = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [newTodo, setNewTodo] = useState({
    category: '',
    dueDate: '',
    dateCreated: ''
  });

  useEffect(() => {
    // console.log('user state: ', state);
  });

  const handleChange = event => {
    setNewTodo({
      ...newTodo,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { category, dueDate, dateCreated } = newTodo;

    try {
      let response = await axios.post('http://localhost:4000/api/todos', {
        category,
        dueDate,
        dateCreated
      });

      console.log({ response });
    } catch (err) {
      console.log('Error', err);
    }
  };

  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/dashboard">Dashboard</Link>
      <form onSubmit={handleSubmit}>
        <TextField name="category" label="Category" onChange={handleChange} />
        <TextField name="dueDate" label="Due Date" onChange={handleChange} />
        <TextField
          name="dateCreated"
          label="Date Created"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => dispatch({ type: 'user_login_successful' })}
        >
          Register
        </Button>
      </form>
    </>
  );
};

export default Dashboard;
