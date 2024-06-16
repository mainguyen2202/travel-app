
import anonymousApi from "./anonymousApi";
import api from "./api";

export async function articlesListPlaceIdSubtopicId(inPlaceId, inSubtopicId) {
    return await api.get(`/public/articles/list?places_id=${inPlaceId}&topics_id=${inSubtopicId}`);
}

export async function showAllArticlesListDate() {
    const response = await api.get(`/public/articles/listDate`);
    return response;
}

export async function articlesDetail(articleId) {
    return await api.get(`/public/articles/detail/${articleId}`);
}

export async function getSearchResults(searchKeyword) {
    // Gọi API để lấy danh sách bài viết liên quan đến từ khóa
    return await anonymousApi.get(`/public/articles/listSearchKeyWord?name=${searchKeyword.trim()}`);
}






