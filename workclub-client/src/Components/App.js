import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import ContactCreator from './ContactCreator';
import Contact from './Contact';
import EditContact from './EditContact';

import { addContactToStore, deleteContactFromStore } from '../actions';

const App = ({ addContactToStore, deleteContactFromStore, contacts }) => {
  const addContact = (contact) => addContactToStore(contact);

  const deleteContact = (email) => {
    deleteContactFromStore(email);
  };

  const displayContent = () => {
    return (
      <React.Fragment>
        <Header />
        <ContactCreator onAdd={addContact} />
        {contacts.map((contact, index) => {
          if (contact) {
            const {
              firstName,
              lastName,
              email,
              phoneNumber,
              editing,
              id,
              status,
            } = contact;
            if (!editing) {
              return (
                <Contact
                  id={id}
                  status={status}
                  key={index}
                  index={index}
                  firstName={firstName}
                  lastName={lastName}
                  email={email}
                  phoneNumber={phoneNumber}
                  onDelete={deleteContact}
                />
              );
            } else {
              return <EditContact key={id} id={id} editing={editing} />;
            }
          }
        })}
        <Footer />
      </React.Fragment>
    );
  };
  console.log(localStorage.getItem('access'));

  return (
    <React.Fragment>
      {localStorage.getItem('access') === 'denied' ? (
        <Link to='/'>
          If you tried Entering through the url area, you need to sign in.
        </Link>
      ) : (
        displayContent()
      )}
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
