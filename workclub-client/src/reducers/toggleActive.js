export default (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTIVE':
      return action.payload;
    default:
      return state;
  }
};
