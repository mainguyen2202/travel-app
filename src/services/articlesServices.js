
import api from "./api";

export async function articlesListPlaceIdSubtopicId(inPlaceId,inSubtopicId) {
    return await api.get(`/articles/list?places_id=${inPlaceId}&topics_id=${inSubtopicId}`);
}

export async function showAllArticlesListDate() {
    const response = await api.get(`/articles/listDate`);
    return response;
}

export async function articlesDetail(articleId) {
    return await api.get(`/articles/detail/${articleId}`);
}

// export async function listSearchKeyWord(tuKhoaTimKiem) {
//     return await api.get(`/articles/listSearchKeyWord?name=${tuKhoaTimKiem}`);
// }

export async function getSearchResults  (searchKeyword)  {
  
      // Gọi API để lấy danh sách bài viết liên quan đến từ khóa
      return await api.get(`/articles/listSearchKeyWord?name=${searchKeyword.trim()}`);
  
    }
  





