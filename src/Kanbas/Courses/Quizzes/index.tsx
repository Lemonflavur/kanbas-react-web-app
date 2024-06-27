import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import {useNavigate, useParams} from "react-router";
import QuizControls from "./QuizControls";
import LessonControlButtons from "./LessonControls";
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import * as db from "../../Database";
import * as client from "./client";
import {Link} from "react-router-dom";
import QuizDetails from "./QuizDetails";
import {FaCheckCircle, FaEllipsisV, FaTrash} from "react-icons/fa";

export default function () {
    
    const { qid, cid } = useParams();
    //const quizzes = db.quizzes;
    const [quizzes, setQuizzes] = useState<any[]>([]);
    const [quizName, setQuizName] = useState("");
    //const quizPoints = us
    const navigate = useNavigate();
    
    const fetchQuizzes = async () => {
        /*if (!qid) return;
        const quizzes = await client.findUserById(uid);
        setQuizzes(quiz);
        */
        const quizzes = await client.findAllQuizzes();
        setQuizzes(quizzes);
    };
    
    const filterQuizByName = async (quizName: string) => {
        setQuizName(quizName);
        if (quizName) {
            const quizzes = await client.findQuizByPartialName(quizName);
            setQuizzes(quizzes);
        } else {
            fetchQuizzes();
        }
    };
    
    
    useEffect(() => {
        fetchQuizzes();
    }, []);
    
    const createQuiz = async () => {
    const quiz = await client.createQuiz({
        name: `Unnamed${quizzes.length + 1}`,
        //secondName: `Quiz`,
        status: "AVAILABLE",
        dueDate: `June 30`,
        points: 11,
        quantity: 40,
    });
    setQuizzes(([...quizzes, quiz]));
};
    
    return (
        <div id="wd-assignment-quizzes-table">
            
            <input
                onChange={(e) => filterQuizByName(e.target.value)}
                placeholder="Search for Quiz"
                id="wd-input-search-quiz"
                className="form-control me-2 w-25 float-start"
            />
                <button id="wd-add-quiz-btn" className="btn btn-lg btn-secondary me-1 border-gray float-end">
                    <FaEllipsisV className="position-relative me-2" style={{ bottom: "1px" }} />
                </button>
    
                {/*Navigates to Quiz Editor Screen<Link to={`/Kanbas/Courses/1234/Quizzes/editor`}
                       className="btn btn-lg btn-danger me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Quiz</Link>*/}
                
                <button
                    onClick={createQuiz}
                    id="wd-add-quiz-btn"
                    className="btn btn-lg btn-danger me-1 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#wd-add-module-dialog">
                    <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Quiz
                </button>
                {/*<button
                    id="wd-add-quiz-btn"
                    className="btn btn-lg btn-danger me-1 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#wd-add-module-dialog">
                    <FaPlus className="position-relative me-2" style={{bottom: "1px"}}/>
                    Quiz
                </button>*/}
            <br/> <br/><hr/>
    
            <QuizDetails fetchQuizzes={fetchQuizzes}/>
            
            
            <table id="wd-quiz-table" className="table table-bordered">
                <thead>
                <tr className="table table-secondary ">
                    <th>Assignment Quizzes</th>
                </tr>
                </thead>
                <tbody>
            
                {quizzes.map((quiz) => (
                    <tr key={quiz._id}>
                        {/*<li className="wd-quiz list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                            
                            </div>*/}
                            <td className="text-nowrap me-3">
                                
                                <div id="wd-quiz-sections">
                                        <Link to={`/Kanbas/Courses/_id/Quizzes/${quiz._id}/`}>
                                        <LiaSpaceShuttleSolid className="float-start me-4 text-success"/>
                                        {quiz.name} <br/>
                                        </Link>
                                    
                                        <b>{quiz.status}</b> | <b>Due</b> {quiz.dueDate} | {quiz.points} pts | {quiz.quantity} Questions
                                        <LessonControlButtons/>
                                    
                                    
                                    
                                </div>
                                
                {/*</li>*/}
                            </td>
                    </tr>
                ))}
                
                </tbody>
            </table>
            </div>
    )
    
}