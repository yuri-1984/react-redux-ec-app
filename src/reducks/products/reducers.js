import * as Actions from "./actions";
import initialState from "../store/initialState";

export const ProductsReducer = (state = initialState.products, action) => {
  switch (action.type) {
    case Actions.DELETE_PRODUCT:
      return {
        ...state,
        //新しい配列として扱ってくれるので[[]]で記述
        list: [...action.payload],
      };
    case Actions.FETCH_PRODUCTS:
      return {
        ...state,
        //新しい配列として扱ってくれるので[[]]で記述
        list: [...action.payload],
      };
    default:
      return state;
  }
};
