import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import ContactCreator from './ContactCreator';
import Contact from './Contact';

import { addContactToStore, deleteContactFromStore } from '../actions';

const App = ({ addContactToStore, deleteContactFromStore, contacts }) => {
  const addContact = (contact) => addContactToStore(contact);

  const deleteContact = (email) => {
    deleteContactFromStore(email);
  };

  const editContact = (index) => {
    console.log(index);
  };
  console.log(contacts);

  return (
    <React.Fragment>
      <Header />
      <ContactCreator onAdd={addContact} />
      {contacts.map((contact, index) => {
        if (contact) {
          const { firstName, lastName, email, phoneNumber } = contact;
          return (
            <Contact
              key={index}
              index={index}
              editing={contact.editing}
              firstName={firstName}
              lastName={lastName}
              email={email}
              phoneNumber={phoneNumber}
              onDelete={deleteContact}
              onEdit={editContact}
            />
          );
        }
      })}
      <Footer />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
  };
};

export default connect(mapStateToProps, {
  addContactToStore,
  deleteContactFromStore,
})(App);
