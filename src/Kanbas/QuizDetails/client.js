import axios from "axios";

export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:3000";
export const QUIZZES_API = `${BASE_API}/api/quizzes`;

export const quizInformation = async () => {
    const response = await axios.post(`${QUIZZES_API}/quizInformation`);
    return response.data;
};

export const createQuizCredentials = async (credentials) => {
    const response = await axios.post(`${QUIZZES_API}/createquizinfo`, credentials);
    return response.data;
};

export const createQuiz = async (quiz) => {
    const response = await axios.post(`${QUIZZES_API}`, quiz);
    return response.data;
};

export const findAllQuizzes = async () => {
    const response = await axios.get(`${QUIZZES_API}`);
    return response.data;
};

