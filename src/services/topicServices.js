import api from "./api";



export async function showAllTopic() {
    const response = await api.get(`/topics/list`);
    return response;
}


export async function showAllId(subTopicsId) {
    return await api.get(`/topics/list/${subTopicsId}`);
}

export async function showAllSubId(inTopicId) {
    return await api.get(`/topics/list?${inTopicId}`);
}


    