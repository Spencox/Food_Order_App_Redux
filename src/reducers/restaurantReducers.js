import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAILURE,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAILURE,
} from "../constants/restaurantActionConstants";

export const listRestaurantsReducer = (state = { restaurants: [] }, action) => {
  switch (action.type) {
    case RESTAURANT_LIST_REQUEST:
      return { loading: true };
    case RESTAURANT_LIST_SUCCESS:
      return { loading: false, success: true, restaurants: action.payload };
    case RESTAURANT_LIST_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const fetchRestaurantDetailsReducer = (state = { restaurant: {} }, action) => {
  switch (action.type) {
    case RESTAURANT_DETAILS_REQUEST:
      return { loading: true };
    case RESTAURANT_DETAILS_SUCCESS:
      return { loading: false, success: true, restaurant: action.payload };
    case RESTAURANT_DETAILS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};