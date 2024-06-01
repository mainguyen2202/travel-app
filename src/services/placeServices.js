
import { ACCESS_TOKEN, SERVER_URL } from "../constants/constants";
import api from "./api";
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

export async function showAll() {
    const response = await api.get(`/places/list`);
    return response;
}