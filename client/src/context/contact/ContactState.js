import React, { useReducer } from 'react';
//import { uuid } from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill1 Johnson',
        email: 'jill1@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Jill2 Johnson',
        email: 'jill2@gmail.com',
        phone: '222-111-1111',
        type: 'professional',
      },
      {
        id: 3,
        name: 'Jill3 Johnson',
        email: 'jill3@gmail.com',
        phone: '333-111-1111',
        type: 'personal',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Add contact
  const addContact = (contact) => {
    contact.id = 1234;
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter Contacts
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
