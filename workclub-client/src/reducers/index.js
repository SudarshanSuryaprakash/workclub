import { combineReducers } from 'redux';

import expandReducer from './expandReducer';
import contactInputReducer from './contactInputReducer';
import contactReducer from './contactReducer';
import toggleActive from './toggleActive';

export default combineReducers({
  isExpanded: expandReducer,
  contactInput: contactInputReducer,
  contacts: contactReducer,
  active: toggleActive,
});
