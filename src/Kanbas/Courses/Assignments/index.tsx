import {FaPlus} from "react-icons/fa6";
import AssignmentButtons from "./AssignmentButtons";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import * as db from "../../Database";
import {useParams} from "react-router-dom";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">

            <AssignmentButtons /> <br /><br /><br /><br />

            <ul id="wd-assignments-title" className="list-group rounded-0">
                
                <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />
                        ASSIGNMENTS 40% of Total
                        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                        <LessonControlButtons />
                    </div>
                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <TfiWrite />
                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                A1
                            </a>
                              Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
                            <br/><b>Due</b> May 13 at 11:59pm | 100 pts
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <TfiWrite />
                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                A2
                            </a>
                            Multiple Modules | <b>Not available until</b> May 13 at 12:00am |
                            <br/><b>Due</b> May 20 at 11:59pm | 100 pts
                            <LessonControlButtons />
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />
                            <TfiWrite />
                            <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                                A3
                            </a>
                            Multiple Modules | <b>Not available until</b> May 20 at 12:00am |
                            <br/><b>Due</b> May 27 at 11:59pm | 100 pts
                            <LessonControlButtons />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );}
