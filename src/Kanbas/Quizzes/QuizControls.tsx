import { FaPlus } from "react-icons/fa6";
import {FaEllipsisV} from "react-icons/fa";
import QuizEditor from "./QuizEditor";

export default function QuizControls({ quizName, setQuizName, addQuiz }:
                                         { quizName: string; setQuizName: (title: string) => void; addQuiz: () => void; }) {
    
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
            <button id="wd-add-quiz-btn" className="btn btn-lg btn-danger me-1 float-end"
                    data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Quiz
            </button>
    
    
            <QuizEditor dialogTitle="Add Module" quizName={quizName}
                        setQuizName={setQuizName} addQuiz={addQuiz} />

        </div>
        )
}