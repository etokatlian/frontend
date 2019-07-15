import React, { useState } from 'react';
import { useTheme } from '@material-ui/styles';
import { Select, MenuItem } from '@material-ui/core';

const MuiSelect = () => {
  const theme = useTheme();

  const [values, setValues] = useState({
    age: '',
    name: 'Eric'
  });

  const handleChange = e => {
    setValues(old => ({
      ...old,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Select value={values.age} onChange={handleChange} name="age">
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  );
};

export default MuiSelect;
