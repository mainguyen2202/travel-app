import api from "./api";




export async function checkUserName(username ){
   
    return await api.get(`/users/detailBySearchUserName?username=${username}`);
}


    