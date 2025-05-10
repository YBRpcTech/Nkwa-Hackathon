import Api from "../api/axios";

// Action Types
export const CREATE_INVOICE_REQUEST = 'CREATE_INVOICE_REQUEST';
export const CREATE_INVOICE_SUCCESS = 'CREATE_INVOICE_SUCCESS';
export const CREATE_INVOICE_FAIL = 'CREATE_INVOICE_FAIL';

// Action Creator
export const createInvoice = (payload) => async (dispatch) => {
  dispatch({ type: CREATE_INVOICE_REQUEST });

  try {
    const { data } = await Api.post('/api/invoice', payload); // Adjust endpoint

    // Handle the response data
    dispatch({
      type: CREATE_INVOICE_SUCCESS,
      payload: data, // Now, the payload contains the entire response (including invoiceId)
    });
  } catch (error) {
    dispatch({
      type: CREATE_INVOICE_FAIL,
      payload: error.response?.data?.message || error.message,
    });
  }
};
