import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router";
import QuizControls from "./QuizControls";
import LessonControlButtons from "./LessonControls";
import { LiaSpaceShuttleSolid } from "react-icons/lia";
import * as db from "../Database";

export default function () {
    
    const { cid } = useParams();
    const [ quizzes, setQuizzes ] = useState<any[]>(db.quizzes);
    const [quizName, setQuizName] = useState("");
    //const quizPoints = us
    
    
    const addQuiz = () => {
        setQuizzes([ ...quizzes, { _id: new Date().getTime().toString(),
            name: quizName, course: cid } ]);
        setQuizName("");
    };
    
    const deleteQuiz = (quizID: string) => {
        setQuizzes(quizzes.filter((q) => q._id !== quizID));
    };
    
    return (
        <div>
            <QuizControls setQuizName={setQuizName} quizName={quizName} addQuiz={addQuiz}/><br/> <br/><hr/>
            <ul id="wd-quizzes" className="list-group rounded-0">
                {quizzes
                    .filter((quiz) => quiz.course === cid)
                    .map((quiz: any) => (
                        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                
                                Assignment Quizzes
                            </div>
                            
                                <ul className="wd-lessons list-group rounded-0">
                                
                                <li className="wd-lesson list-group-item p-3 ps-1">
                                    <LiaSpaceShuttleSolid className="float-start me-2 text-success"/>
                                    {quiz.name} <br/>
                                    {quiz.status} | {quiz.dueDate} | {quiz.points} | {quiz.quantity}
                                    LEARNING OBJECTIVES
                                    <LessonControlButtons
                                        quizId={quiz._id}
                                        deleteQuiz={deleteQuiz}/>
                                </li>
                                
                            </ul>
                            )
                        </li>
                        ))}
                </ul>
            </div>
    )
    
}