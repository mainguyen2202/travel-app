
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
    return await api.post(`/private/itineraryArticles/create`, data);
}

export async function itineraryArticlesDetail(itineraryArticlesId) {
    return await api.get(`/private/itineraryArticles/detail/${itineraryArticlesId}`);
}

export async function itineraryArticlesListBySearch(inItinerarieId, inputDateStart, latitude, longitude) {
    return await api.get(`/private/itineraryArticles/listBySearch?itineraries_id=${inItinerarieId}&date_start=${inputDateStart}&latitude=${latitude}&longitude=${longitude}`);
}

export async function itineraryArticlesEdit(itineraryArticlesId, dateStartByItineraryArticles) {
    const data = {
        dateStart: dateStartByItineraryArticles
    };
    return await api.post(`/private/itineraryArticles/edit/${itineraryArticlesId}`, data);
}
export async function itineraryArticlesRemove(itineraryArticlesId) {
    return await api.delete(`/private/itineraryArticles/remove/${itineraryArticlesId}`);
}