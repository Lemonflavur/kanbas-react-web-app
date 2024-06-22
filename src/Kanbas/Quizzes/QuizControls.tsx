import { FaPlus } from "react-icons/fa6";
import {FaEllipsisV} from "react-icons/fa";

export default function QuizControls() {
    
    return (
    
        <div id="wd-quiz-controls" className="text-nowrap">
            <input
                id="wd-input-search-quiz"
                className="form-control me-2 w-25 float-start"
                placeholder="Search for Quiz"
            />
            <button id="wd-add-quiz-btn" className="btn btn-lg btn-secondary me-1 border-gray float-end">
                <FaEllipsisV className="position-relative me-2" style={{ bottom: "1px" }} />
            </button>
            <button id="wd-add-quiz-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </button>

        </div>
        )
}