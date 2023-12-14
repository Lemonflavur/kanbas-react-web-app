import axios from "axios";
import {USERS_API} from "../../project/users/client";

export const BASE_API = process.env.REACT_APP_BASE_API_URL || "http://localhost:3000";
export const QUIZZES_API = `${BASE_API}/api/quizzes`;

export const updateQuiz = async (quiz) => {
    const response = await axios.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return response.data;
};

export const quizAccount = async () => {
    const response = await axios.post(`${QUIZZES_API}/quizAccount`);
    return response.data;
};

export const createQuizInfo = async (credentials) => {
    const response = await axios.post(`${QUIZZES_API}/createQuizInfo`, credentials);
    return response.data;
};

export const deleteQuiz = async (quiz) => {
    const response = await axios.delete(`${QUIZZES_API}/${quiz._id}`);
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

export const findQuizById = async (id) => {
    const response = await axios.get(`${QUIZZES_API}/${id}`);
    return response.data;
};

