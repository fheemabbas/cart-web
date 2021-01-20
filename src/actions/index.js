export const AddCart = (data) => async (dispatch) => {
  dispatch({ type: "ADD_CART", payload: data });
};

export const RemoveCart = (data) => async (dispatch) => {
  dispatch({ type: "REMOVE_CART", payload: data });
};
