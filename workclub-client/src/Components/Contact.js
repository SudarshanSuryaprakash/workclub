import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import AirplanemodeInactiveIcon from '@material-ui/icons/AirplanemodeInactive';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux';

const Contact = ({
  editing,
  index,
  onEdit,
  firstName,
  lastName,
  email,
  phoneNumber,
  onDelete,
  contacts,
}) => {
  const handleClickDelete = () => {
    onDelete(email);
  };

  const handleEdit = () => {
    console.log(editing);
    contacts[index].editing = true;
    onEdit(index);
    console.log(contacts);
  };

  return (
    <div className='contact'>
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.contacts,
  };
};

export default connect(mapStateToProps, {})(Contact);
