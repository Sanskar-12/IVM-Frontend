import axios from "axios";

export const createOrderAction=(formData)=>async(dispatch)=>{
    try {
        dispatch({
          type: "createOrdersRequest",
        });
    
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
          // withCredentials: true,
        };
    
        const { data } = await axios.post(
          `/api/v1/order/add-order`,
          {requisition_name:formData.requisition_name,
            department:formData.department,
            lab:formData.lab,
            itemtype:formData.itemtype,
            vendor_id:formData.vendor_id,
            items:formData.items
        
        },
          config
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