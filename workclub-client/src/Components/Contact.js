import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AirplanemodeInactiveIcon from '@material-ui/icons/AirplanemodeInactive';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';

import { editContactInStore, statusUpdateInStore } from '../actions';

const Contact = ({
  id,
  firstName,
  lastName,
  email,
  phoneNumber,
  onDelete,
  editContactInStore,
  statusUpdateInStore,
  status,
}) => {
  const handleClickDelete = () => {
    onDelete(email);
  };

  const handleEdit = () => {
    editContactInStore(id);
  };

  const handleStatus = () => {
    statusUpdateInStore(id);
  };

  const showInactive = () => (status === false ? <h1>INACTIVE</h1> : null);
  const contactClassName = () =>
    status === false ? 'contact inactive' : 'contact';

  return (
    <div className={contactClassName()}>
      {showInactive()}
      <h1>{`First Name: ${firstName}`}</h1>
      <p>{`Last Name: ${lastName}`}</p>
      <p>{`Email: ${email}`}</p>
      <p>{`Phone Number: ${phoneNumber}`}</p>
      <button onClick={handleClickDelete}>
        <DeleteIcon className='workclub-dark-color' />
      </button>
      <button onClick={handleEdit}>
        <EditIcon className='workclub-dark-color' />
      </button>
      <button onClick={handleStatus}>
        <AirplanemodeInactiveIcon className='workclub-dark-color' />
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
  };
};

export default connect(mapStateToProps, {
  editContactInStore,
  statusUpdateInStore,
})(Contact);
