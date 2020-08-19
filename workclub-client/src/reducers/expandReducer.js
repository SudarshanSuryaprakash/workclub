export default (state = false, action) => {
  switch (action.type) {
    case 'EXPAND_CONTACT':
      return action.payload;
    default:
      return state;
  }
};
