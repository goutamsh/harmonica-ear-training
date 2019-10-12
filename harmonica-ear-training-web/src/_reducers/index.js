import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import {harp_ear_raining_reducer} from './harp-ear-training.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  harp_ear_raining_reducer
});

export default rootReducer;