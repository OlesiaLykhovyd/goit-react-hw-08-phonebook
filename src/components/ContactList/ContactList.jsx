import React, { useEffect, useMemo } from 'react';
// import css from './ContactList.module.css';
import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsApiSlice';
import { getFilter } from 'redux/filterSlice';

import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ContactList() {
  const filter = useSelector(getFilter);

  const { data, error, isLoading, refetch } = useGetContactsQuery();

  useEffect(() => {
    refetch();
  }, [refetch]);

  const filteredContacts = useMemo(() => {
    return (
      data?.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, data]);

  return (
    <>
      <ListGroup variant="flush">
        {error && <p>Oops, something goes wrong, please reload this page</p>}
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          filteredContacts.map(({ id, name, number }) => (
            <ListGroup.Item key={id}>
              <ContactItem name={name} number={number} id={id} />
            </ListGroup.Item>
          ))
        )}
      </ListGroup>
    </>
  );
}
