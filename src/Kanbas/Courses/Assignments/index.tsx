import {FaPlus} from "react-icons/fa6";
import AssignmentButtons from "./AssignmentButtons";
import {BsGripVertical} from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import { TfiWrite } from "react-icons/tfi";
import * as db from "../../Database";
import {useParams} from "react-router-dom";
import {useState} from "react";
import { addAssignment, deleteAssignment, updateAssignment, editAssignment }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Assignments() {
    
    const { cid } = useParams();
    const [assignments, setAssignments] = useState<any[]>(db.assignments);
    //const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    //const dispatch = useDispatch();
    
    return (
        <div id="wd-assignments">

            <AssignmentButtons /> <br /><br /><br /><br />

            <ul id="wd-assignments-title" className="list-group rounded-0">
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <li className="wd-assignments-title list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />
                                {assignment.title}
                                <LessonControlButtons />
                            </div>
                        </li>
                    ))
                }
    
                <ul className="wd-lessons list-group rounded-0">
                    <li className="wd-lesson list-group-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        <TfiWrite />
                        <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                            A1
                        </a>
                        Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
                        <br/><b>Due</b> May 13 at 11:59pm | 100 pts
        
                    </li>
    
                </ul>
                
            </ul>
        </div>
    );}
