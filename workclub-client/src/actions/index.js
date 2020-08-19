export const expandContact = (toExpand) => {
  return {
    type: 'EXPAND_CONTACT',
    payload: toExpand,
  };
};

export const contactInputChange = (name, value) => {
  return {
    type: 'CONTACT_INPUT_CHANGE',
    payload: { name, value },
  };
};
export const editContactInStore = (id) => {
  return {
    type: 'EDIT_CONTACT_IN_STORE',
    payload: { id },
  };
};

export const addContactToStore = (contact) => {
  return {
    type: 'ADD_CONTACT_TO_STORE',
    payload: { contact },
  };
};

export const emptyFields = () => {
  return {
    type: 'EMPTY_FIELDS',
  };
};

export const deleteContactFromStore = (email) => {
  return {
    type: 'DELETE_CONTACT_FROM_STORE',
    payload: { email },
  };
};

export const updateContact = (fields) => {
  return {
    type: 'UPDATE_CONTACT',
    payload: { fields },
  };
};

export const statusUpdateInStore = (id) => {
  return {
    type: 'STATUS_UPDATE',
    payload: { id },
  };
};
