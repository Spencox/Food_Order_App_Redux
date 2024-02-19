import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  userLoginReducer,
  userLogoutReducer,
} from "./reducers/userReducers";

import {
  fetchRestaurantDetailsReducer,
  listRestaurantsReducer,
} from "./reducers/restaurantReducers";

import {
  fetchCategoryDetailsReducer,
  listCategoriesReducer,
} from "./reducers/categoryReducers";

import {
  fetchCuisineDetailsReducer,
  listCuisinesReducer,
} from "./reducers/cuisineReducers";


const reducer = combineReducers({
  login: userLoginReducer,
  logout: userLogoutReducer,
  restaurantList: listRestaurantsReducer,
  restaurantDetails: fetchRestaurantDetailsReducer,
  categoryList: listCategoriesReducer,
  categoryDetails: fetchCategoryDetailsReducer,
  cuisineList: listCuisinesReducer,
  cuisineDetails: fetchCuisineDetailsReducer,
});


const userInfoFromLocalStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const restaurantsFromLocalStorage = localStorage.getItem("restaurants")
  ? JSON.parse(localStorage.getItem("restaurants"))
  : [];

const categoriesFromLocalStorage = localStorage.getItem("categories")
  ? JSON.parse(localStorage.getItem("categories"))
  : [];

const cuisinesFromLocalStorage = localStorage.getItem("cuisines")
  ? JSON.parse(localStorage.getItem("cuisines"))
  : [];

const initialState = {
  login: { userInfo: userInfoFromLocalStorage },
  logout: {},
  restaurantList: restaurantsFromLocalStorage,
  restaurantDetails: null,
  categoryList: categoriesFromLocalStorage,
  categoryDetails: null,
  cuisineList: cuisinesFromLocalStorage,
  cuisineDetails: null
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store
