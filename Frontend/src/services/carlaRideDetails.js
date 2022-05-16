import { BACKEND_URL } from "./constants";
import { BACKEND_PORT } from "./constants";
export const fechInRideDetails = async () => {
    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }
    const response = await fetch(`${BACKEND_URL}:${BACKEND_PORT}/rideDetails/getRideDetails`, options);
    const status = response.status;
    const data  = await response.json();
    return {status, data};
}