import PropTypes from 'prop-types';
import css from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsApiSlice';

export default function ContactItem({ name, number, id }) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <>
      <span>
        - {name}: {number}
      </span>
      <button
        className={css.contactListItemButton}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isLoading}
      >
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
