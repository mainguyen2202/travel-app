import api from "./api";

export async function showAllId(subTopicsId) {
    return await api.get(`/topics/list/${subTopicsId}`);
}