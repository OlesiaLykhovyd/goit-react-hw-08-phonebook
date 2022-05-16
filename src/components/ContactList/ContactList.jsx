import React from "react";
import css from "./ContactList.module.css";
import ContactItem from "components/ContactItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContacts, getFilter } from "redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  const dispatch = useDispatch();
  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactListItem}>
          <ContactItem
            name={name}
            number={number}
            onDeleteContact={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
}
