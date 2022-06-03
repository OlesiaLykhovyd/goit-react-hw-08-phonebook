import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Container from 'components/Container';

export default function ContactsPage() {
  return (
    <>
      <Container title="Phonebook">
        <ContactForm />
      </Container>

      <Container title="Contacts">
        <Filter />
        <ContactList />
      </Container>
    </>
  );
}
