
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