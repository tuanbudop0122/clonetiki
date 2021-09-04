let initialState = {
  a :[],
productDetail:'',
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PETCH_PRODUCT":
      state.a = action.payload;
      return { ...state };
    case "PETCH_PRODUCT_DETAIL":
      state.productDetail = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
