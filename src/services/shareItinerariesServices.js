import api from "./api";




export async function listShareItinerariesUserId(userId) {

    return await api.get(`/shareItineraries/listBySearch?users_id=${userId}`);
}




    
export async function shareItinerariesUserId(useridShare,itineraryId) {
    const data = {
        users: {
            id: useridShare
        },
        itineraries: {
            id: itineraryId
        }
    };
    return await api.post(`/shareItineraries/create`,data);
}