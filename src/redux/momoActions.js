import Api from "../api/axios";

// Action Types
export const FETCH_MOMO_TRANSACTION_REQUEST = 'FETCH_MOMO_TRANSACTION_REQUEST';
export const FETCH_MOMO_TRANSACTION_SUCCESS = 'FETCH_MOMO_TRANSACTION_SUCCESS';
export const FETCH_MOMO_TRANSACTION_FAILURE = 'FETCH_MOMO_TRANSACTION_FAILURE';
export const MOMO_PAYMENT_REQUEST = 'MOMO_PAYMENT_REQUEST';
export const MOMO_PAYMENT_SUCCESS = 'MOMO_PAYMENT_SUCCESS';
export const MOMO_PAYMENT_FAILURE = 'MOMO_PAYMENT_FAILURE';

// Action Creator for fetching Momo transaction by invoice ID
export const fetchMomoTransaction = (invoiceId) => async (dispatch) => {
  try {
    // Dispatching the request action before making the API call
    dispatch({ type: FETCH_MOMO_TRANSACTION_REQUEST });

    // Making the API call to fetch the transaction
    const response = await Api.get(`/api/momo/transaction/${invoiceId}`);

    // Dispatching the success action after successful API response
    dispatch({
      type: FETCH_MOMO_TRANSACTION_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // Dispatching the failure action if there is an error
    dispatch({
      type: FETCH_MOMO_TRANSACTION_FAILURE,
      payload: error.response ? error.response.data : error.message,
    });
  }
};

// Action Creator for making a MoMo payment
export const makeMomoPayment = (paymentDetails) => async (dispatch) => {
  try {
    // Dispatching the request action before making the API call
    dispatch({ type: MOMO_PAYMENT_REQUEST });

    // Making the API call to make a payment
    const response = await Api.post('/api/momo/pay', paymentDetails);

    // Dispatching the success action after successful payment
    dispatch({
      type: MOMO_PAYMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    // Dispatching the failure action if there is an error
    dispatch({
      type: MOMO_PAYMENT_FAILURE,
      payload: error.response ? error.response.data : error.message,
    });
  }
};
