import { combineReducers } from 'redux';

import { authentication } from './Authentication.Reducer';
import { registration } from './Registration.Reducer';
import { users } from './User.Reducer';
import { alert } from './Alert.Reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert
});

export default rootReducer;