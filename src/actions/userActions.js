import axios from "axios";
import { LOGIN_API, BACKEND_URL_ENDPOINT } from "../constants/backend";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../constants/userActionConstants";

import { useNavigate } from "react-router-dom";

export const login = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH",
      },
    };

    await axios
      .post(LOGIN_API, { username, password }, config)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data.data,
            success: 'Login successful',
          });
          sessionStorage.setItem("userInfo", JSON.stringify(res.data.data));
        } else {
          console.log(res);
          dispatch({
            type: LOGIN_FAILURE,
            error: 'Unable to Login',
          });
        }
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: LOGIN_FAILURE,
          error: 'Unable to Login',
        });
      });

    // console.log(response);
    // dispatch({ type: LOGIN_SUCCESS, payload: response, message: response });
    // localStorage.setItem("userInfo", JSON.stringify(response));
  } catch (err) {
    console.log(err);
    dispatch({
      type: LOGIN_FAILURE,
      payload: err.message,
    });
  }
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_REQUEST });

    dispatch({
      type: LOGOUT_SUCCESS,
      payload: 'Successfully logged out',
    });

    sessionStorage.removeItem("userInfo");
    window.location.replace('/')

  } catch (err) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: err.message,
    });
  }
};