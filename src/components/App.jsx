import SectionContainer from './SectionContainer';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
// import { useAddContactMutation } from 'redux/contactsApiSlice';
// import Notiflix from 'notiflix';

export default function App() {
  return (
    <SectionContainer>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </SectionContainer>
  );
}
