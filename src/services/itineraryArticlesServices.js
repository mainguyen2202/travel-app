
import api from "./api";

export async function itineraryArticlesCreate(idArticles, idItineraries) {
    const data = {
        articles: {
            id: idArticles
        },
        itineraries: {
            id: idItineraries
        },
        status: 1
    };
    return await api.post(`/itineraryArticles/create`,data);
}

export async function itineraryArticlesDetail(itineraryArticlesId) {
    return await api.get(`/itineraryArticles/detail/${itineraryArticlesId}`);
}

export async function itineraryArticlesListBySearch(inItinerarieId,inputDateStart) {
    return await api.get(`/itineraryArticles/listBySearch?itineraries_id=${inItinerarieId}&date_start=${inputDateStart}`);
}

export async function itineraryArticlesEdit(itineraryArticlesId,dateStartByItineraryArticles) {
    const data = {
        dateStart: dateStartByItineraryArticles
    };
    return await api.post(`/itineraryArticles/edit/${itineraryArticlesId}`, data);
}
export async function itineraryArticlesRemove(itineraryArticlesId) {
    return await api.delete(`/itineraryArticles/remove/${itineraryArticlesId}`);
}