
import api from "./api";



export async function contactsCreate(email,name,mess,subject) {
    const data = {
        
        fullName: name,
            email: email,
            subject: subject,
            mess: mess
        
             
           
        
    };
    return await api.post(`/private/contacts/create`,data);
}



