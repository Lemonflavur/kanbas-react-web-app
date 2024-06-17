import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER; //Grabs information from the backend
export const USERS_API = `${REMOTE_SERVER}/api/users`; //Grabs User information using the backend API

//Creates a user
export const createUser = async (user: any) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
}
//Update user
export const updateUser = async (user: any) => {
    const response = await axios.put(`${USERS_API}/${user._id}`, user);
    return response.data;
};

//Deletes a user
export const deleteUser = async (userId: string) => {
    const response = await axios.delete(`${USERS_API}/${userId}`);
    return response.data;
};
//Finds a user by their ID
export const findUserById = async (userId: string) => {
    const response = await axios.get(`${USERS_API}/${userId}`);
    return response.data;
};
//Finds users by their partial name
export const findUserByPartialName = async (name: string) => {
    const response = await axios.get(`${USERS_API}?name=${name}`);
    return response.data;
};
//Finds users by their role
export const findUsersByRole = async (role: string) => {
    const response = await axios.get(`${USERS_API}?role=${role}`);
    return response.data;
};
//Finds all users
export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
};