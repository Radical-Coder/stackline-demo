import { combineReducers } from '@reduxjs/toolkit';
import productReducer from './reducers';

const rootReducer = combineReducers({
    products: productReducer
});

export default rootReducer;