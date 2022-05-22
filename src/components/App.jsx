import SectionContainer from './SectionContainer';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useState } from 'react';
import * as API from '../services/api';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const addContact = async values => {
    setIsLoading(true);
    const contact = await API.addContact(values);
    console.log(contact);
    setContacts(prevState => [contact, ...prevState]);
    setIsLoading(false);
  };

  return (
    <SectionContainer>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </SectionContainer>
  );
}
