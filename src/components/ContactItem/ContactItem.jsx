import PropTypes from 'prop-types';
// import css from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsApiSlice';
import { Container } from './ContactItem.styled';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <Container>
      <span>
        - {name}: {number}
      </span>
      <Button
        type="button"
        variant="outline-danger"
        size="sm"
        disabled={isLoading}
        onClick={() => deleteContact(id)}
      >
        Delete
      </Button>
    </Container>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
