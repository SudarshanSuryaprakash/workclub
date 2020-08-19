import React from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

import { expandContact, contactInputChange, emptyFields } from '../actions';

const ContactCreator = ({
  isExpanded,
  contactInput,
  expandContact,
  contactInputChange,
  onAdd,
  emptyFields,
}) => {
  const { firstName, lastName, email, phoneNumber } = contactInput;

  const expand = () => {
    expandContact(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    contactInputChange(name, value);
  };

  const submitContact = (event) => {
    event.preventDefault();
    emptyFields();
    contactInput.editing = false;
    contactInput.id = new Date();
    contactInput.status = true;

    onAdd(contactInput);

    expandContact(false);
  };

  return (
    <div>
      <form autoComplete='off' className='create-contact'>
        <input
          name='firstName'
          onChange={handleChange}
          onClick={expand}
          value={firstName}
          placeholder='First Name'
        />

        {isExpanded && (
          <div>
            <hr></hr>
            <input
              name='lastName'
              onChange={handleChange}
              value={lastName}
              placeholder='Last Name'
            />
            <hr></hr>

            <input
              name='email'
              onChange={handleChange}
              value={email}
              placeholder='Email'
            />

            <hr></hr>
            <input
              name='phoneNumber'
              onChange={handleChange}
              value={phoneNumber}
              placeholder='Phone Number'
            />
          </div>
        )}

        <Zoom in={isExpanded}>
          <Fab onClick={submitContact}>
            <AddIcon className='workclub-dark-color' />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isExpanded: state.isExpanded,
    contactInput: state.contactInput,
  };
};

export default connect(mapStateToProps, {
  expandContact,
  contactInputChange,
  emptyFields,
})(ContactCreator);
