import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'; // ✅ Correct
import { invoiceReducer } from './invoiceReducer';
import bitcoinReducer from './bitcoinReducer';
import momoReducer from './momoReducer';


const rootReducer = combineReducers({
  invoice: invoiceReducer,
  bitcoin: bitcoinReducer,
  momo: momoReducer,
  // other reducers
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
