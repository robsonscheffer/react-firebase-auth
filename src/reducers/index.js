import { compose } from 'redux';

import UserReducer from './user';

const reducers = compose({
  UserReducer,
});

export default reducers;
