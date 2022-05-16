import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

export default function ContactItem({ name, number, onDeleteContact }) {
  return (
    <>
      <span>
        - {name}: {number}
      </span>
      <button
        className={css.contactListItemButton}
        type="button"
        onClick={onDeleteContact}
      >
        Delete
      </button>
    </>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
