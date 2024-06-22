
import anonymousApi from "./anonymousApi";
import api from "./api";

export async function articlesListPlaceIdSubtopicId(inPlaceId, inSubtopicId, inPlaceIds='') {
    return await api.get(`/public/articles/list?places_id=${inPlaceId}&topics_id=${inSubtopicId}&places_ids=${inPlaceIds}`);
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






