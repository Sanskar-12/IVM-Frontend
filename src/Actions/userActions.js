import axios from "axios";
// import {server} from "../store"

export const loginAction = (username, password) => async (dispatch) => {
  try {
    dispatch({
      type: "loginRequest",
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: true,
    };

    const { data } = await axios.post(
      `/api/v1/login`,
      { username, password },
      config
    );

    dispatch({
      type: "loginSuccess",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "loginFail",
      payload: error.response.data.message,
    });
  }
};

export const getUserDetailAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

    const { data } = await axios.get(`/api/v1/me`);

    dispatch({
      type: "loadUserSuccess",
      payload: data.user
    })
  } catch (error) {
    dispatch({
      type: "loadUserFail",
      payload: error.response.data.message,
    });
  }
};

export const logoutAction = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });


    // const config={
    //   withCredentials: true,
    // }

    await axios.get(`/api/v1/logout`);

    dispatch({
      type: "logoutSuccess",
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
