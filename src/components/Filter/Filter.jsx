import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, getFilter } from 'redux/filterSlice';

import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const filterChange = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <Form autoComplete="off">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Find contacts by name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            value={filter}
            onChange={filterChange}
          />
        </Form.Group>
      </Form>
    </>
  );
}
