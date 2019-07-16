import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import axios from '../../api/config';

import { GlobalContext } from '../globalState';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

let initialTodoState = {
  category: '',
  dueDate: '',
  dateCreated: ''
}

const Dashboard = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [newTodo, setNewTodo] = useState(initialTodoState);


  const handleChange = event => {
    setNewTodo({
      ...newTodo,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { category, dueDate, dateCreated } = newTodo;

    // need form validation

    try {
      let response = await axios.post('http://localhost:4000/api/todos', {
        category,
        dueDate,
        dateCreated
      });

      setNewTodo(initialTodoState)
    } catch (err) {
      console.log('Error', err);
    }
  };

  console.log('state from dashboard', state)

  return (
    <>
      <h1>Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <TextField name="category" label="Category" value={newTodo.category} onChange={handleChange} />
        <TextField name="dueDate" label="Due Date" value={newTodo.dueDate} onChange={handleChange} />
        <TextField
          name="dateCreated"
          label="Date Created"
          value={newTodo.dateCreated}
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
