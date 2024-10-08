
import api from "./api";

export async function listBySearchItineraries(userId) {
    return await api.get(`/private/itineraries/listBySearch?user_id=${userId}`);
}


export async function itineraryCreate(name,participantCount,content,dateStart,dateEnd,userId) {
    const data = {
        name: name,
        participantCount:participantCount,
        content: content,
        dateStart: dateStart,
        dateEnd: dateEnd,
        users: {
            id: userId
        }
    };
    return await api.post(`/private/itineraries/create`, data);
}

export async function itinerariesRemove(itineraryId) {
    return await api.delete(`/private/itineraries/remove/${itineraryId}`);
}

export async function itinerariesDetail(itineraryId) {
    return await api.get(`/private/itineraries/detail/${itineraryId}`);
}

export async function itineraryEdit(name,participantCount,content,dateStart,dateEnd,itineraryId) {
    const data = {
        name: name,
        participantCount:participantCount,
        content: content,
        dateStart: dateStart,
        dateEnd: dateEnd
    };
    return await api.post(`/private/itineraries/edit/${itineraryId}`, data);
}


