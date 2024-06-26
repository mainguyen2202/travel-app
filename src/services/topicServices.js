import anonymousApi from "./anonymousApi";

export async function showAllTopic() {
    const response = await anonymousApi.get(`/public/topics/list`);
    return response;
}

export async function showTopicsBySubTopicId(subTopicsId) {
    return await anonymousApi.get(`/public/topics/list/${subTopicsId}`);
}
