import api from "./api";



export async function listBySearchFeedbacks(articleId) {
    return await api.get(`/feedbacks/listBySearch?articles_id=${articleId}`);
}

export async function handleFeedbacksHeart(heart,articleId) {
    return await api.get(`/feedbacks/listByHeart?heart=${heart}&articles_id=${articleId}`);
}


export async function feedbacksCreate(idArticles,idUser,currentValue,review) {
    const data = {
        articles: {
            id: idArticles
        },
        users: {
            id: idUser
        }
        ,
        heart: currentValue,
        review: review
    };
    return await api.post(`/feedbacks/create`,data);
}
