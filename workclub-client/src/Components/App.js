import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import ContactCreator from './ContactCreator';
import Contact from './Contact';
import EditContact from './EditContact';

import {
  addContactToStore,
  deleteContactFromStore,
  toggleActive,
} from '../actions';

const App = ({
  addContactToStore,
  deleteContactFromStore,
  contacts,
  toggleActive,
  active,
}) => {
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
        <button onClick={handleSignOut} className='btn btn-danger bottom'>
          Sign Out
        </button>
      </React.Fragment>
    );
  };
  const handleSignOut = () => {
    // localStorage.setItem('access', 'denied');
    toggleActive(false);
    return <Redirect to='/' />;
  };
  {
    /* <Link to='/'>
          If you tried Entering through the url area, you need to sign in. Or if
          you signed out, you need to sign in.
        </Link> */
  }
  return (
    <React.Fragment>
      {!active ? <Redirect to='/' /> : displayContent()}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
    active: state.active,
  };
};

export default connect(mapStateToProps, {
  addContactToStore,
  deleteContactFromStore,
  toggleActive,
})(App);
