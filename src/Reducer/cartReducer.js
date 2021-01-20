export default (state = [], action) => {
  switch (action.type) {
    case "ADD_CART":
      return [...state, action.payload];
    case "REMOVE_CART":
      return action.payload;
    case "UPDATE_CART":
      return action.payload;
    default:
      return state;
  }
};
