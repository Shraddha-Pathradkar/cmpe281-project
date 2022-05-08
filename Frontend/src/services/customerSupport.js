import { BACKEND_URL } from "./constants";
import { BACKEND_PORT } from "./constants";


export const postCustomerQuery = async (requestObj) => {
    
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(requestObj)
    }
    const response = await fetch(`${BACKEND_URL}:${BACKEND_PORT}/customerSupport/updateCustomerQuery`, options);
    const status = response.status;
    const data = await response.json();
    return {status, data};
}
export const fetchCustomerQuery = async () => {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }
    const response = await fetch(`${BACKEND_URL}:${BACKEND_PORT}/customerSupport/getCustomerQuery`, options);
    const status = response.status;
    const data  = await response.json();
    return {status, data};
}