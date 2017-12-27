import { combineReducers } from 'redux';
import fetchApplicationReducer from './fetch.application.reducer';

export default combineReducers({
  data: fetchApplicationReducer
});