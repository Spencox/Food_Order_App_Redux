import {
    CUISINE_LIST_REQUEST, 
    CUISINE_LIST_SUCCESS,
    CUISINE_LIST_FAILURE, 
    CUISINE_DETAILS_REQUEST, 
    CUISINE_DETAILS_SUCCESS,
    CUISINE_DETAILS_FAILURE, 
} from "../constants/cuisineActionConstants"

export const listCuisinesReducer = (state = { cuisines: [] }, action) => {
    switch (action.type) {
      case CUISINE_LIST_REQUEST:
        return { loading: true };
      case CUISINE_LIST_SUCCESS:
        return { loading: false, success: true, cuisines: action.payload };
      case CUISINE_LIST_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const fetchCuisineDetailsReducer = (state = { cuisine: {} }, action) => {
    switch (action.type) {
      case CUISINE_DETAILS_REQUEST:
        return { loading: true };
      case CUISINE_DETAILS_SUCCESS:
        return { loading: false, success: true, cuisine: action.payload };
      case CUISINE_DETAILS_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };