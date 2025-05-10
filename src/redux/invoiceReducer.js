import {
    CREATE_INVOICE_REQUEST,
    CREATE_INVOICE_SUCCESS,
    CREATE_INVOICE_FAIL,
  } from './invoiceActions';
  
  const initialState = {
    loading: false,
    transaction: null,
    invoiceId: null,  // To store the invoice ID
    error: null,
  };
  
  export const invoiceReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_INVOICE_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_INVOICE_SUCCESS:
        return {
          ...state,
          loading: false,
          transaction: action.payload.transaction,  // Transaction object
          invoiceId: action.payload.invoiceId,  // Store the invoiceId
        };
  
      case CREATE_INVOICE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  