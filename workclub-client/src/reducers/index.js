import { combineReducers } from 'redux';

import expandReducer from './expandReducer';
import contactInputReducer from './contactInputReducer';
import contactReducer from './contactReducer';

export default combineReducers({
  isExpanded: expandReducer,
  contactInput: contactInputReducer,
  contacts: contactReducer,
});
