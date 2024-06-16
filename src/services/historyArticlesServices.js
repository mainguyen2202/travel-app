
import api from "./api";

export async function showAllHistoryArticles() {
    const response = await api.get(`/public/historyArticles/list`);
    return response;
}

export async function clickView(idArticles) {
    const data = {
        articles: {
            id: idArticles,
        },
    };
    return await api.post(`/public/historyArticles/clickView`,data);
}








