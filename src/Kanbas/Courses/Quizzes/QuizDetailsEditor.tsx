import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";
import * as client from "./client";
import {Link} from "react-router-dom";
import {LiaSpaceShuttleSolid} from "react-icons/lia";

export default function QuizDetailsEditor() {
    
    const { qid, cid } = useParams();
    const navigate = useNavigate();
    //const quizzes = db.quizzes;
    const [quiz, setQuiz] = useState<any>({});
    const [quizzes, setQuizzes] = useState<any[]>([]);
    const [quizName, setQuizName] = useState("");
    //const quizPoints = us
    
    const [editing, setEditing] = useState(false);
    const saveQuiz = async () => {
        const updateQuiz = { ...quiz };
        await client.updateQuiz(updateQuiz);
        setQuiz(updateQuiz);
        setEditing(false);
        fetchQuizzes();
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };
    
    const createQuiz = async () => {
        const quiz = await client.createQuiz({});
        setQuizzes(([...quizzes, quiz]));
        saveQuiz();
    };
    
   
    const fetchQuizzes = async () => {
        const quizzes = await client.findAllQuizzes();
        setQuizzes(quizzes);
    };
    
    useEffect(() => {
        fetchQuizzes();
    },[]);
    
    return (
        <div>
            <ul id="wd-editor-tab"
                className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active text-secondary" aria-current="page" href="#">Details</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-danger" href="#">Questions</a>
                </li>
            </ul> <br />
    
            
               
                {quiz.name} <br/>
           
            <b>{quiz.status}</b> | <b>Due</b> {quiz.dueDate} | {quiz.points} pts | {quiz.quantity} Questions
            {quiz && editing && (
                <input className="form-control w-50 wd-edit-name"
                       defaultValue="Unnamed Quiz"
                       onChange={(e) => setQuizName(e.target.value)}
                       onKeyDown={(e) => {
                           if (e.key === "Enter") { createQuiz(); }}}
                />
            )}
    
            <input
                className="form-control w-50"
                id="wd-quiz-name"
                placeholder="Unnamed Quiz" />
    
            <br /><br />
    
            
        </div>
    )
}