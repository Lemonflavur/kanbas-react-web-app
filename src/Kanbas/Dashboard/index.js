import { React } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
import './dashboard.css';

function Dashboard(
    { courses, course, setCourse, addNewCourse,
                       deleteCourse, updateCourse }
) {

    const coursesC = db.courses;
    let getCourseCount = coursesC.length;

    return (

        <div>
            <h1>Published Courses {(getCourseCount)}</h1>
            <h5>Course</h5>
            <input value={course.name} className="form-control"
                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
            <input value={course.number} className="form-control"
                   onChange={(e) => setCourse({ ...course, number: e.target.value }) }/>
            <input value={course.startDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
            <input value={course.endDate} className="form-control" type="date"
                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) }/>

            <button onClick={addNewCourse}
                    className="btn btn-success"> Add</button>
            <button onClick={updateCourse}
                    className="btn btn-warning">Update</button>

            {courses.map((course) => (
                    <div className="dashboard-cards d-flex flex-row flex-wrap ">
                        <div className="card" >
                            <img className="card-img-top" src="" alt=""/>
                            <i className="fa-solid fa-ellipsis-vertical"></i>
                            <div className="card-body">
                    <Link key={course.id} to={`/Kanbas/Courses/${course.id}`} className="card-body">
                        {course.number} {course.name} <br/>

                        <button
                            onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);}}
                            className="btn btn-primary"> Edit</button>

                        <button onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);}}
                                className="btn btn-danger"> Delete</button>
                    </Link>
                            </div>
                        </div>
                    </div>


                ))}

        </div>
    );
}
export default Dashboard;