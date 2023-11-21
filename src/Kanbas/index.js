import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
//import store from "./store";
import Courses from "./Courses";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";


function Kanbas() {
    const [courses, setCourses] = useState(db.courses);
    const URL = "http://localhost:4000/api/courses";

    const updateCourse = async () => {
        const response = await axios.put(
            `${URL}/${course._id}`,
            course
        );
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
        setCourse({ name: "" });
    };

    const deleteCourse = async (courseId) => {
        const response = await axios.delete(
            `${URL}/${course._id}`
        );
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const addNewCourse = async () => {
        const response = await axios.post(URL, course);
        setCourses([
            response.data,
            ...courses,
        ]);
        setCourse({ name: "" });

    };

    const findAllCourses = async () => {
        const response = await axios.get(URL);
        setCourses(response.data);
    };

    const [course, setCourse] = useState({
        name: "",      number: "",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    useEffect(() => {
        findAllCourses();
    }, []);

    return(
        <Provider store={store}>

            <div className="d-flex">
                <div>
                    <KanbasNavigation/>
                </div>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account" element={<h1>Account</h1>} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}/>
                        } />

                        <Route path="Courses/:courseId/*" element={
                            <Courses courses={courses}/>} />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas