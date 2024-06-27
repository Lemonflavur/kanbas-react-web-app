import axios from "axios";
import {USERS_API} from "../People/client";
const axiosWithCredentials = axios.create({ withCredentials: true });
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const QUIZZES_API = `${REMOTE_SERVER}/api/quizzes`;


//Creates a quiz
/*
export const createQuizz = async (id: string) => {
    const response = await axiosWithCredentials.post(QUIZZES_API, {
        course: id
    });
    return response.data;
};
 */

export const createQuiz = async (quiz: any) => {
    const response = await axiosWithCredentials.post(`${QUIZZES_API}`, quiz);
    return response.data;
};

//Update quiz
export const updateQuiz = async (quiz: any) => {
    const response = await axiosWithCredentials.put(`${QUIZZES_API}/${quiz._id}`, quiz);
    return response.data;
};

//Find All quizzes
export const findAllQuizzes = async () => {
    const response = await axiosWithCredentials.get(QUIZZES_API);
    return response.data;
};

//Finds a quiz by its ID
export const findQuizById = async (quizId: string) => {
    const response = await axiosWithCredentials.get(`${QUIZZES_API}/${quizId}`);
    return response.data;
};

//Finds quizzes by partial name
export const findQuizByPartialName = async (name: string) => {
    const response = await axiosWithCredentials.get(`${QUIZZES_API}?name=${name}`);
    return response.data;
};

//Delete quiz
export const deleteQuiz = async (quizId: string) => {
    const response = await axiosWithCredentials.delete( `${QUIZZES_API}/${quizId}` );
    return response.data;
};
