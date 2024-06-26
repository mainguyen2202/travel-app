import api from "./api";
import anonymousApi from "./anonymousApi";

export async function apiForgotPassword(loginDTO ){
    return await anonymousApi.post(`/auth/forgotPassword`,loginDTO);
}

export async function apiResetPassWord(token, newPassword) {
    const data = {
        token: token,
        password: newPassword
    };
    return await anonymousApi.post(`/auth/resetPassword`, data);
}

export async function apiLogout( ){
    return await anonymousApi.post(`/auth/logout`);
}

export async function checkUserName(username ){
   
    return await api.get(`/private/users/detailBySearchUserName?username=${username}`);
}

export async function showUser(userId ){
   
    return await api.get(`/private/users/detail/${userId}`);
}

export async function userEdit(name,userName,email,userId) {
    const data = {
        name: name,
        username: userName,
        email: email
    };
    return await api.post(`/private/users/editUser/${userId}`, data);
}

export async function userEditPassWord(newPassword,userId) {
    const data = {
        password: newPassword
    };
    return await api.post(`/users/editPassword/${userId}`, data);
}




    