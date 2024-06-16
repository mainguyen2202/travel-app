import api from "./api";
import anonymousApi from "./anonymousApi";

export async function ResetPassword( ){
   
    return await anonymousApi.post(`public/users/forgotPassword`);
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
    return await api.post(`/private/users/editPassword/${userId}`, data);
}



    