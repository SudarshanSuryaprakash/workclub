import React, { useState } from 'react';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';

import { updateContact } from '../actions';

const EditContact = ({ updateContact, id, editing }) => {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    id,
    editing,
  });

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    updateContact(value);
  };

  return (
    <div>
      <form autoComplete='off' className='create-contact'>
        <input
          type='text'
          name='firstName'
          onChange={handleChange}
          value={value.firstName}
          placeholder='First Name'
        />
        <div>
          <hr></hr>
          <input
            name='lastName'
            onChange={handleChange}
            value={value.lastName}
            placeholder='Last Name'
          />
          <hr></hr>

          <input
            name='email'
            onChange={handleChange}
            value={value.email}
            placeholder='Email'
          />

          <hr></hr>
          <input
            name='phoneNumber'
            onChange={handleChange}
            value={value.phoneNumber}
            placeholder='Phone Number'
          />
        </div>

        <Zoom in>
          <Fab onClick={handleEdit}>
            <AddIcon className='workclub-dark-color' />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};
export default connect(null, { updateContact })(EditContact);
