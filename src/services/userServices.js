import api from "./api";




export async function checkUserName(username ){
   
    return await api.get(`/users/detailBySearchUserName?username=${username}`);
}


export async function showUser(userId ){
   
    return await api.get(`/users/detail/${userId}`);
}

export async function userEdit(name,userName,email,userId) {
    const data = {
        name: name,
        username: userName,
        email: email
    };
    return await api.post(`/users/editUser/${userId}`, data);
}
export async function userEditPassWord(newPassword,userId) {
    const data = {
        password: newPassword
    };
    return await api.post(`/users/editPassword/${userId}`, data);
}



    