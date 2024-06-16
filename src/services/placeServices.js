
import { ACCESS_TOKEN, SERVER_URL } from "../constants/constants";
import anonymousApi from "./anonymousApi";
import axios from 'axios';
let accessToken = localStorage.getItem(ACCESS_TOKEN);

export function showAllV1() {
    const response = fetch(`${SERVER_URL}/places/list`,
        {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        }
    );

    // 401 -> gọi api refeshtoken -> token -> gọi api -> return

    return response;
}

export async function showAllPlace() {
    const response = await anonymousApi.get(`/public/places/list`);
    return response;
}

// export async function showAllPlace() {
//     try {
//       const response = await axios.get(`${SERVER_URL}/places/list`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching topics:', error);
//       throw error;
//     }
//   }




