import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

//Updates a course
export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course.id}`, course);
    return response.data;
};

//Deletes a course
export const deleteCourse = async (id: string) => {
    const response = await axios.delete(`${COURSES_API}/${id}`);
    return response.data;
};

//Creates a new Course
export const createCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course);
    return response.data;
};

export const fetchAllCourses = async () => {
    const { data } = await axios.get(COURSES_API);
    return data;
};
