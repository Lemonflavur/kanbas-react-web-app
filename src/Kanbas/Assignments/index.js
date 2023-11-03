import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Kanbas/Database";

function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <div>
            <div>{courseAssignments.map((assignment) => (
                <Link
                    key={assignment._id}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    className="list-group-item">
                    {assignment.title}
                </Link>
            ))}
            </div>

            <h2>Assignments for course {courseId}</h2>

            <div className="modules">
                <ol className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-secondary">
                        <div className="ms-2 me-auto">

                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle"  type="button" data-bs-toggle="dropdown">Course Dropdown</button>
                                <ul className="dropdown-menu list-group">

                                    <div className="list-group">
                                        {

                                            courseAssignments.map((assignment, index) => (
                                                    <li key={index} className=" list-group-item-grey fw-bold ">
                                                        <a className="dropdown-item"><h3>{assignment._id}</h3></a>
                                                        <hr className="dropdown-divider"/>
                                                        <a className="dropdown-item"><div className=" dropdown-item">
                                                            <p>{assignment.title}</p></div></a>
                                                        <hr className="dropdown-divider"/>
                                                    </li>

                                                ))
                                        }

                                    </div>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    );
}
export default Assignments;