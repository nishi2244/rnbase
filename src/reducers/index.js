import { combineReducers } from 'redux';
import listData from './companyListReducer';

const rootReducer = combineReducers({
  listData,
});

export default rootReducer;
