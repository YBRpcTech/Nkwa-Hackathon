import Api from "../api/axios";


// Action types
export const FETCH_TRANSACTION_REQUEST = 'FETCH_TRANSACTION_REQUEST';
export const FETCH_TRANSACTION_SUCCESS = 'FETCH_TRANSACTION_SUCCESS';
export const FETCH_TRANSACTION_FAILURE = 'FETCH_TRANSACTION_FAILURE';

// Action to fetch Bitcoin transaction by invoice ID
export const fetchBitcoinTransaction = (id) => async (dispatch) => {
  try {
    dispatch({ type: FETCH_TRANSACTION_REQUEST });
    
    // API call to fetch the transaction
    const response = await Api.get(`/api/invoice/transaction/${id}`);
    
    // Dispatch success action with transaction data
    dispatch({
      type: FETCH_TRANSACTION_SUCCESS,
      payload: response.data,  // This is the Bitcoin transaction data
    });
  } catch (error) {
    // Dispatch failure action if there's an error
    dispatch({
      type: FETCH_TRANSACTION_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};
