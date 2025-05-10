import {
    FETCH_TRANSACTION_REQUEST,
    FETCH_TRANSACTION_SUCCESS,
    FETCH_TRANSACTION_FAILURE,
  } from './bitcoinActions';
  
  // Initial state
  const initialState = {
    transaction: null,
    loading: false,
    error: null,
  };
  
  // Reducer function
  const bitcoinReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_TRANSACTION_REQUEST:
        return {
          ...state,
          loading: true,  // Set loading to true when making the request
        };
      case FETCH_TRANSACTION_SUCCESS:
        return {
          ...state,
          loading: false,  // Set loading to false when the request is successful
          transaction: action.payload,  // Set the fetched transaction data
        };
      case FETCH_TRANSACTION_FAILURE:
        return {
          ...state,
          loading: false,  // Set loading to false when the request fails
          error: action.payload,  // Set the error message
        };
      default:
        return state;
    }
  };
  
  export default bitcoinReducer;
  