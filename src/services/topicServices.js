import axios from 'axios';
import { SERVER_URL } from "../constants/constants";
import api from "./api";



export async function showAllTopic() {
    const response = await api.get(`/topics/list`);
    return response;
}


export async function showAllId(subTopicsId) {
    return await api.get(`/topics/list/${subTopicsId}`);
}

export async function showAllSubId(inTopicId) {
    return await api.get(`/topics/list?${inTopicId}`);
}

// export async function showAllTopic() {
//     try {
//       const response = await axios.get(`${SERVER_URL}/topics/list`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching topics:', error);
//       throw error;
//     }
//   }
  
//   export async function showAllId(subTopicsId) {
//     try {
//       const response = await axios.get(`${SERVER_URL}/topics/list/${subTopicsId}`);
//       return response.data;
//     } catch (error) {
//       console.error(`Error fetching topics with ID ${subTopicsId}:`, error);
//       throw error;
//     }
//   }
  
//   export async function showAllSubId(inTopicId) {
//     try {
//       const response = await axios.get(`${SERVER_URL}/topics/list?${inTopicId}`);
//       return response.data;
//     } catch (error) {
//       console.error(`Error fetching sub-topics with ID ${inTopicId}:`, error);
//       throw error;
//     }
//   }
    