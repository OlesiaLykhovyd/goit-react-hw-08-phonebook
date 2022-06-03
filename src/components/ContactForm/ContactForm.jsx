import React, { useState } from 'react';
// import { nanoid } from 'nanoid';
// import css from './ContactForm.module.css';
import { FormContainer } from './ContactForm.styled';
import { useGetContactsQuery } from 'redux/contactsApiSlice';
import { useAddContactMutation } from 'redux/contactsApiSlice';
import { Report } from 'notiflix';
import Notiflix from 'notiflix';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Form from 'react-bootstrap/Form';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleNameChange = event => setName(event.target.value);
  const handleNumberChange = event => setNumber(event.target.value);

  const handleAddContact = async values => {
    try {
      await addContact(values);
      Notiflix.Notify.success('Contact added');
    } catch (error) {
      Notiflix.Notify.failure('Oops, something goes wrong');
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    data.some(contact => contact.name === name)
      ? Report.warning(
          `${name} is already in contacts`,
          'Please enter another name'
        )
      : handleAddContact({ name, number });

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter your name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleNameChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            placeholder="Enter email"
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleNumberChange}
          />
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Add Contact
        </Button>
      </Form>
    </FormContainer>
  );
}
