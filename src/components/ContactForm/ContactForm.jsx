import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact, getContacts } from 'redux/contactsSlice';
import css from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(getContacts);

  const inputNameId = nanoid();
  const inputNumberId = nanoid();

  const handleNameChange = event => setName(event.target.value);
  const handleNumberChange = event => setPhone(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();

    contacts.some(contact => contact.name === name)
      ? alert(`${name} is already in contacts`)
      : onSubmit({ name, phone });
    // : dispatch(addContact({ name, number }));

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.contactForm} onSubmit={handleSubmit}>
      <label htmlFor={inputNameId}>Name</label>
      <input
        className={css.contactFormInput}
        id={inputNameId}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleNameChange}
      />

      <label htmlFor={inputNumberId}>Number</label>
      <input
        className={css.contactFormInput}
        id={inputNumberId}
        value={phone}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleNumberChange}
      />
      <button className={css.contactFormButton} type="submit">
        Add Contact
      </button>
    </form>
  );
}
