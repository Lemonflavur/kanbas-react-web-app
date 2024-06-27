import React, { useEffect, useState } from "react";
import {FaTrash, FaCheck} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import {useNavigate, useParams} from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

export default function QuizDetails( { fetchQuizzes }: { fetchQuizzes: () => void; }){
    const navigate = useNavigate();
    const { uid, cid } = useParams();
    const [quiz, setQuiz] = useState<any>({});
   
    const [quizName, setQuizName] = useState("");
    const [assignmentGName, setAssignmentGName] = useState("");
    const [editing, setEditing] = useState(false);
    
    const saveQuiz = async () => {
        const [name]= quizName.split(" ");
        const updateQuiz = { ...quiz, name };
        await client.updateQuiz(updateQuiz);
        setQuiz(updateQuiz);
        setEditing(false);
        fetchQuizzes();
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };
    
    const saveQuizType = async (quizType: string) => {
        //const [role] = name.split(" ");
        const saveQuizType = { ...quiz, quizType };
        await client.updateQuiz(saveQuizType);
        setQuiz(saveQuizType);
        setEditing(false);
        fetchQuizzes();
        //navigate(`/Kanbas/Courses/${cid}/People`);
    };
    
    
    const saveAssignmentGroup = async (assignmentG: string) => {
        //const [assignmentG] = name.split(" ");
        const saveAssignmentGroup = { ...quiz, assignmentG };
        await client.updateQuiz(saveAssignmentGroup);
        setQuiz(saveAssignmentGroup);
        setEditing(false);
        fetchQuizzes();
        //navigate(`/Kanbas/Courses/${cid}/People`);
    };
    
    const fetchQuiz = async () => {
        if (!uid) return;
        const quiz = await client.findQuizById(uid);
        setQuiz(quiz);
    };
    const deleteQuiz = async (qid: string) => {
        await client.deleteQuiz(qid);
        fetchQuizzes();
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };
    useEffect(() => {
        if (uid) fetchQuiz();
    }, [uid]);
    if (!uid) return null;
    
    return (
        <div className="position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-100">
            {/*<Link to={`/Kanbas/Courses/${cid}/Quizzes`} className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1"/> </Link>*/}
           <br /> <hr />
    
            <div className="wd-margin-right-left">
                <div className="text-danger fs-4">
                    {!editing && (
                        <FaPencil onClick={() => setEditing(true)}
                                  className="float-end fs-5 mt-2 wd-edit" /> )}
                   
                    {!editing && (
                        <div className="wd-name text-secondary"
                             onClick={() => setEditing(true)}>
                            <h2>{quiz.name}</h2> </div>)}
                    {quiz && editing && (
                        <input className="form-control w-50 wd-edit-name"
                               defaultValue={`${quiz.name}`}
                               onChange={(e) => setQuizName(e.target.value)}
                               onKeyDown={(e) => {
                                   if (e.key === "Enter") { saveQuiz(); }}}/>)}
                    {editing && (
                        <button
                            onClick={() => saveQuiz()}
                            className="btn btn-danger float-end fs-5 mt-2 me-2 wd-save ">Save</button> )}
                </div>
                <br/>
    
                <label> Quiz Instructions:</label>
                <br />
                <div className="btn ">Edit</div> <div className="btn ">View</div>
                <div className="btn ">Insert</div> <div className="btn ">Format</div>
                <div className="btn ">Tools</div> <div className="btn ">Table</div>
                
                <select id="wd-font-size-selector"
                        className="form-control border-0 w-25  me-2">
                    <option defaultValue={12}>12pt</option>
                    <option value={14}>14pt</option>
                    <option value={16}>16pt</option>
                    <option value={18}>18pt</option>
                </select>
                <textarea
                    id="wd-instructions"
                    className="form-control"
                    rows={3}>
                </textarea>
                
                <br /><br /><br />
                
                <div className="mb-3 row">
                    <label
                        htmlFor="wd-role-selector"
                        className="col-sm-3 col-form-label">
                        <b>Quiz Type</b>
                    </label>
                    <div className="col-md">
                        <select id="wd-role-selector"
                                value={quiz.quizType}
                                onChange={(e) => saveQuizType(e.target.value)}
                                className="form-control w-25 me-2">
                            <option defaultValue={quiz.quizType}>Graded Quiz</option>
                            <option value="PRACTICE QUIZ">Practice Quiz</option>
                            <option value="GRADED SURVEY">Graded Survey</option>
                            <option value="UNGRADED SURVEY">Ungraded Survey</option>
                        </select>
                    </div>
                </div>
    
                <div className="mb-3 row">
                    <label
                        htmlFor="wd-role-selector"
                        className="col-sm-3 col-form-label">
                        <b>Assignment Group</b>
                    </label>
                    <div className="col-md">
                        <select id="wd-role-selector"
                                value={quiz.assignmentGroup}
                                onChange={(e) => saveAssignmentGroup(e.target.value)}
                                className="form-control w-25 me-2">
                            <option value="QUIZZES">Graded Quiz</option>
                            <option value="EXAMS">Exams</option>
                            <option value="ASSIGNMENTS">Assignments</option>
                            <option value="PROJECT">Project</option>
                        </select>
                    </div>
                </div>
                
                <div id="wd-options" className="align-content-md-center">
                    <label
                        htmlFor="wd-role-selector"
                        className="col-sm-3 col-form-label">
                        <b>Options</b>
                    </label>
    
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Shuffle Answers
                            </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input me-2" type="checkbox" checked={true} defaultChecked={quiz.timeLimit} id="flexCheckChecked" />
                            <label className="form-check-label me-2" htmlFor="flexCheckChecked">
                                Time Limit
                            </label>
                        <input className="col-sm-1 me-2"
                               defaultValue={quiz.timeLimit}/>
                    Minutes
                    </div>
                    
                </div>
    
                {/*<b>Quiz Type:</b>           <span className="wd-roles">         {quiz.quizType}         </span> <br />
                    <b>Assignment Group:</b>           <span className="wd-roles">         {quiz.assignmentGroup}         </span> <br />*/}
                <b>Status:</b>        <span className="wd-login-id">      {quiz.status}      </span> <br />
                <b>Due:</b>         <span className="wd-section">       {quiz.dueDate}      </span> <br />
                <b>Points:</b>  <span className="wd-total-activity">{quiz.points}</span>
        
                <hr />
            </div>
            
            <div className="align-content-center ">
                
                <button onClick={() => navigate(`/Kanbas/Courses/${cid}/Quizzes`)} className="btn btn-secondary float-end fs-5 mt-2 me-2 ">Cancel</button>
                <button onClick={() => deleteQuiz(uid)} className="btn btn-danger float-end fs-5 mt-2 me-2 ">Delete</button>
            </div>
            
        
        
        </div> ); }
        


