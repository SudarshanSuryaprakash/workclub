export default (
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  },
  action
) => {
  switch (action.type) {
    case 'CONTACT_INPUT_CHANGE':
      const { name, value } = action.payload;
      return { ...state, [name]: value };

    case 'EMPTY_FIELDS':
      return { firstName: '', lastName: '', email: '', phoneNumber: '' };

    default:
      return state;
  }
};
