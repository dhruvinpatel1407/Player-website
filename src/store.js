import reducer from './reducer'; // Your root reducer
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import {thunk} from "redux-thunk"; // Corrected import for redux-thunk

// Create the Redux store with the reducer and apply middleware
export const store = createStore(reducer, applyMiddleware(thunk));
