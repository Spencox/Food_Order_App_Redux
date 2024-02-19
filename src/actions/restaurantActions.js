import axios from "axios";
import { BACKEND_URL_ENDPOINT, GET_ALL_RESTAURANTS_API } from "../constants/backend";

import {
  RESTAURANT_LIST_REQUEST,
  RESTAURANT_LIST_SUCCESS,
  RESTAURANT_LIST_FAILURE,
  RESTAURANT_DETAILS_REQUEST,
  RESTAURANT_DETAILS_SUCCESS,
  RESTAURANT_DETAILS_FAILURE,
} from "../constants/restaurantActionConstants";

export const listRestaurants = () => async (dispatch) => {
  try {
    dispatch({
      type: RESTAURANT_LIST_REQUEST,
    });

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };

    await axios
      .get(GET_ALL_RESTAURANTS_API, config)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data)
          dispatch({
            type: RESTAURANT_LIST_SUCCESS,
            payload: res.data.data,
          });
        } else {
          dispatch({
            type: RESTAURANT_LIST_FAILURE,
            payload: 'Not able to fetch the restaurants',
          });
        }
      });
  } catch (err) {
    dispatch({
      type: RESTAURANT_LIST_FAILURE,
      payload: 'Not able to fetch the restaurants',
    });
  }
};

export const fetchRestaurantDetails = (restaurantId) => async (dispatch) => {
  try {
    dispatch({
      type: RESTAURANT_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };

    await axios
      .get(GET_ALL_RESTAURANTS_API+ '/' + restaurantId, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: RESTAURANT_DETAILS_SUCCESS, payload: res.data.data });
        } else {
          dispatch({ type: RESTAURANT_DETAILS_FAILURE, payload: res.data.message });
        }
      });
  } catch (err) {
    dispatch({
      type: RESTAURANT_DETAILS_FAILURE,
      payload: err.response.data.message,
    });
  }
};
