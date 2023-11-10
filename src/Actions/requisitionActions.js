import axios from "axios";
import { server } from "../store";

export const createOrderAction=(formData)=>async(dispatch)=>{
    try {
        dispatch({
          type: "createOrdersRequest",
        });
    
        
        const { data } = await axios.post(
          `${server}/order/add-order`,
          {requisition_name:formData.requisition_name,
            department:formData.department,
            lab:formData.lab,
            itemtype:formData.itemtype,
            vendor_id:formData.vendor_id,
            items:formData.items
        
        },
        { headers: {
          "Content-Type": "application/json",
        },
          withCredentials: true,
        }
        );
    
        dispatch({
          type: "createOrdersSuccess",
          payload: data.orders,
        });
      } catch (error) {
        dispatch({
          type: "createOrdersFail",
          payload: error.response.data.message,
        });
      }
}