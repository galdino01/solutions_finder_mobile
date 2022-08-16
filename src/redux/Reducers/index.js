import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
const Reducers = combineReducers({
  auth: AuthReducer,
})
export default Reducers;
