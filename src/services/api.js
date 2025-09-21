import axios from 'axios';

const API_BASE_URL = 'https://your-api-url.com/api'; // Replace with your actual API URL

export const fetchProgrammingWorks = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/works`);
        return response.data;
    } catch (error) {
        console.error('Error fetching programming works:', error);
        throw error;
    }
};

export const submitProgrammingWork = async (workData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/works`, workData);
        return response.data;
    } catch (error) {
        console.error('Error submitting programming work:', error);
        throw error;
    }
};

export const fetchWorkById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/works/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching work by ID:', error);
        throw error;
    }
};