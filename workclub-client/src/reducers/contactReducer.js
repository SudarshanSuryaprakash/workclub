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
    case 'EDIT_CONTACT_IN_STORE':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, editing: !contact.editing }
            : contact
        ),
      };
    case 'UPDATE_CONTACT':
      const {
        firstName,
        lastName,
        phoneNumber,
        id,
        email,
        editing,
      } = action.payload.fields;
      return {
        ...state,
        contacts: state.contacts.map((contact) => {
          if (contact.id === id) {
            return {
              ...contact,
              firstName,
              lastName,
              phoneNumber,
              email,
              editing: !editing,
            };
          } else {
            return contact;
          }
        }),
      };
    case 'STATUS_UPDATE':
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? { ...contact, status: !contact.status }
            : contact
        ),
      };

    default:
      return state;
  }
};
