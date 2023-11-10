import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./Reducers/userReducers";
import { getAllInventory } from "./Reducers/inventoryReducers";
import { getAllOrders } from "./Reducers/orderReducers";
import { createOrder } from "./Reducers/requisitionReducers";

// export const server="http://localhost:8080/api/v1"

const store = configureStore({
  reducer: {
    user: userReducer,
    inventory: getAllInventory,
    orders: getAllOrders,
    requistion:createOrder
  },
});

export default store;

