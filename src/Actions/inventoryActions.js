import axios from "axios";
import { server } from "../store";
// import { server } from "../store";

export const getAllInventoryAction =
  (search = "", currentPage) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "getAllInventoryRequest",
      });

      // const options = {
      //   withCredentials: true,
      // };

      const { data } = await axios.get(
        `${server}/get/all/product?keyword=${search}&page=${currentPage}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      dispatch({
        type: "getAllInventorySuccess",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "getAllinventoryFail",
        payload: error.response.data.message,
      });
    }
  };

export const deleteInventoryAction = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteInventoryRequest",
    });

    // const options = {
    //   withCredentials: true,
    // };

    await axios.delete(`/api/v1/delete/product/${productId}`);

    dispatch({
      type: "deleteInventorySuccess",
    });
  } catch (error) {
    dispatch({
      type: "deleteInventoryFail",
      payload: error.response.data.message,
    });
  }
};
