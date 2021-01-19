export const fatchPost = () => async (dispatch) => {
  console.log("res");
  dispatch({ type: "FATCH_POSTS" });
};
