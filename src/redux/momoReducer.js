import {
    FETCH_MOMO_TRANSACTION_REQUEST,
    FETCH_MOMO_TRANSACTION_SUCCESS,
    FETCH_MOMO_TRANSACTION_FAILURE,
    MOMO_PAYMENT_REQUEST,
    MOMO_PAYMENT_SUCCESS,
    MOMO_PAYMENT_FAILURE,
  } from './momoActions';
  
  // Initial State
  const initialState = {
    transaction: null,      // Stores the fetched transaction data
    loading: false,         // Loading state for the request
    paymentLoading: false,  // Loading state for the payment process
    paymentSuccess: false,  // Indicates if the payment was successful
    paymentError: null,     // Stores payment error if any occurs
    error: null,            // Stores transaction error if any occurs
  };
  
  // Reducer function to handle different action types
  const momoReducer = (state = initialState, action) => {
    switch (action.type) {
      // Transaction Fetching Actions
      case FETCH_MOMO_TRANSACTION_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,  // Reset error when starting new request
        };
      case FETCH_MOMO_TRANSACTION_SUCCESS:
        return {
          ...state,
          loading: false,
          transaction: action.payload,  // Store the transaction data
        };
      case FETCH_MOMO_TRANSACTION_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,  // Store the error message
        };
  
      // MoMo Payment Actions
      case MOMO_PAYMENT_REQUEST:
        return {
          ...state,
          paymentLoading: true, // Set payment loading to true when the payment starts
          paymentError: null,   // Reset payment error
        };
      case MOMO_PAYMENT_SUCCESS:
        return {
          ...state,
          paymentLoading: false, // Set payment loading to false after payment success
          paymentSuccess: true,  // Indicate that the payment was successful
        };
      case MOMO_PAYMENT_FAILURE:
        return {
          ...state,
          paymentLoading: false,   // Set payment loading to false after payment failure
          paymentError: action.payload, // Store the payment error message
        };
  
      default:
        return state;
    }
  };
  
  export default momoReducer;
  