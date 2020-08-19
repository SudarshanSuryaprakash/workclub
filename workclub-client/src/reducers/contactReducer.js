export default (state = { contacts: [] }, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_TO_STORE':
      return {
        ...state,
        contacts: [action.payload.contact, ...state.contacts],
      };
    case 'DELETE_CONTACT_FROM_STORE':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.email !== action.payload.email
        ),
      };

    default:
      return state;
  }
};
