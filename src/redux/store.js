import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Uses localStorage
import {thunk} from 'redux-thunk'; // Ensure correct import
import reducer from './reducer'; // Your root reducer

// Redux Persist Configuration
const persistConfig = {
  key: 'root', // Key for the storage
  storage, // Define the storage engine (localStorage in this case)
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, reducer);

// Create the Redux store with persisted reducer
export const store = createStore(persistedReducer, applyMiddleware(thunk));

// Create a persistor object
export const persistor = persistStore(store);
