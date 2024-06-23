import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import * as client from "../Courses/client";
import * as enrollmentClient from "../Courses/Enrollments/client";
export default function Dashboard(
    
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }: {
        courses: any[]; course: any; setCourse: (course: any) => void;
        addNewCourse: () => void; deleteCourse: (course: any) => void;
        updateCourse: () => void; })
{
    const [publishedCourses, setPublishedCourses] = useState<any[]>([]);
    
    const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
    const fetchEnrolledCourses = async () => {
        const courses = await enrollmentClient.findMyEnrollments();
        setEnrolledCourses(courses);
    };
    
    const enrollInCourse = async (courseId: string) => {
        await enrollmentClient.createEnrollment(courseId);
        fetchEnrolledCourses();
    };
    
    const unenrollFromCourse = async (courseId: string) => {
        await enrollmentClient.deleteEnrollment(courseId);
        fetchEnrolledCourses();
    };
    
    const fetchPublishedCourses = async () => {
        const courses = await client.fetchPublishedCourses();
        setPublishedCourses(courses);
    };
    
    useEffect(() => {
        fetchPublishedCourses();
        fetchEnrolledCourses();
    }, []);
    
    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
    
            <h5>New Course
                <button className="btn btn-primary float-end"
                        id="wd-add-new-course-click"
                        onClick={addNewCourse} > Add </button>
    
                <button className="btn btn-warning float-end me-2"
                        onClick={updateCourse} id="wd-update-course-click">
                    Update
                </button>
            </h5>
            <br />
            <input value={course.name}
                   className="form-control mb-2"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) }/>
            
            <textarea value={course.description}
                      className="form-control"
                      onChange={(e) => setCourse({ ...course, description: e.target.value }) }/>
            <hr />
            <hr />
    
            {/*********************************Courses I Created**************************************/}
            <h2 id="wd-dashboard-published">My Courses ({courses.length})</h2>
            <hr />
    
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {publishedCourses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                                <div className="card rounded-3 overflow-hidden">
                                    <img src="/images/rptgtpxd-1396254731.png" height="{160}" />
                                    <div className="card-body">
                    <span className="wd-dashboard-course-link"
                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                      {course.name}
                    </span>
                                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {course.description}
                                        </p>
                                
                                        <Link className="btn btn-primary"
                                              to={`/Kanbas/Courses/${course._id}`}>Go</Link>
                                
                                
                                        <button onClick={(event) => {
                                            event.preventDefault();
                                            deleteCourse(course._id);
                                        }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                            Delete
                                        </button>
                                
                                        <button id="wd-edit-course-click"
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(course);
                                                }}
                                                className="btn btn-warning me-2 float-end" >
                                            Edit
                                        </button>
                            
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <br />
    
            <hr />
            {/*********************************Courses I have enrolled In**************************************/}
            <h2 id="wd-dashboard-courses-I-enrolled-in">Courses I'm Enrolled In ({enrolledCourses.length})</h2>
            <hr />
    
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {enrolledCourses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            
                            <Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none" >
                                
                                <div className="card rounded-3 overflow-hidden">
                                    
                                    <img src="/images/rptgtpxd-1396254731.png" height="{160}" />
                                    <div className="card-body">
                    <span className="wd-dashboard-course-link"
                          style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                      {course.name}
                        
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                unenrollFromCourse(course._id)
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click">
                            Unenroll
                        </button>
                        
                    </span>
                                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {course.description}
                                        </p>
                                
                                        <Link className="btn btn-primary"
                                              to={`/Kanbas/Courses/${course._id}`}>Go</Link>
                            
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <br />
    
    
            {/*********************************All the Course options for enrolling into**************************************/}
            <hr />
            <h2 id="wd-dashboard-published">All Courses ({courses.length})</h2> <hr />
            
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            {/*<Link to={`/Kanbas/Courses/${course._id}/Home`} className="text-decoration-none"></Link>*/}
                                <div className="card rounded-3 overflow-hidden">
                                    <img src="/images/rptgtpxd-1396254731.png" height="{160}" />
                                    <div className="card-body">
                                        <span
                                            className="wd-dashboard-course-link"
                                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                                            
                                            {/******* Enrollment button is below ********/}
                                            <button
                                                onClick={() => enrollInCourse(course._id)}
                                                className="btn btn-success float-end">
                                                Enroll
                                            </button>
                                            
                                            {course.name}
                                        </span>
                                        <p className="wd-dashboard-course-title card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {course.description}
                                        </p>

                                    </div>
                                </div>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

