import axios from "axios";
import { BACKEND_URL_ENDPOINT, GET_ALL_CATEGORIES_API } from "../constants/backend";

import {
  CATEGORY_LIST_REQUEST,
  CATEGORY_LIST_SUCCESS,
  CATEGORY_LIST_FAILURE,
  CATEGORY_DETAILS_REQUEST,
  CATEGORY_DETAILS_SUCCESS,
  CATEGORY_DETAILS_FAILURE,
} from "../constants/categoryActionConstants";

export const listCategories = () => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_LIST_REQUEST,
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
      .get(GET_ALL_CATEGORIES_API, config)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data.data)
          dispatch({
            type: CATEGORY_LIST_SUCCESS,
            payload: res.data.data,
          });
        } else {
          dispatch({
            type: CATEGORY_LIST_FAILURE,
            payload: 'Not able to fetch the categories',
          });
        }
      });
  } catch (err) {
    dispatch({
      type: CATEGORY_LIST_FAILURE,
      payload: 'Not able to fetch the categories',
    });
  }
};

export const fetchCategoryDetails = (categoryId) => async (dispatch) => {
  try {
    dispatch({
      type: CATEGORY_DETAILS_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };

    await axios
      .get(GET_ALL_CATEGORIES_API+ '/' + categoryId, config)
      .then((res) => {
        if (res.status === 200) {
          dispatch({ type: CATEGORY_DETAILS_SUCCESS, payload: res.data.data });
        } else {
          dispatch({ type: CATEGORY_DETAILS_FAILURE, payload: res.data.message });
        }
      });
  } catch (err) {
    dispatch({
      type: CATEGORY_DETAILS_FAILURE,
      payload: err.response.data.message,
    });
  }
};
