
import { jwtDecode } from "jwt-decode";
import { ACCESS_TOKEN, SERVER_URL } from "../constants/constants";

export function login(userName, passWord) {
    const loginDTO = {
        username: userName,
        password: passWord
    };
    const response = fetch(`${SERVER_URL}/auth/login`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        
        body: JSON.stringify(loginDTO)
    });

    return response;
}

export function getCurrentUser() {
    try {
        const token = localStorage.getItem(ACCESS_TOKEN);
        return jwtDecode(token);
    } catch (error) {
        return null;
    }
}

export function logout() {
    localStorage.removeItem(ACCESS_TOKEN);
}