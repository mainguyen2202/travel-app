
import api from "./api";

export async function listBySearchLike(userId) {
    return await api.get(`/private/likes/listBySearch?users_id=${userId}`);
}

export async function likeCreate(idArticles, idUser) {
    const data = {
        articles: {
            id: idArticles,
        },
        users: {
            id: idUser,
        },
    };
    return await api.post(`/private/likes/clickLike`, data);
}



