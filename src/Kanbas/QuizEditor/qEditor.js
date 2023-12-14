import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import * as client from "../Quizzes/client";

function QEditor() {

    const [quizzes, setQuizzes] = useState([]);
    const [quiz, setQuiz] = useState({quizname: "", status: "", endDate: "", points: "", questionCount: "" });

    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({quizname: ""});
    const navigate = useNavigate();

    const createQuiz = async () => {
        try {
            const newQuiz = await client.createQuiz(quiz);
            setQuizzes([newQuiz, ...quizzes]);
        } catch (err) {
            console.log(err);
        }
    };

    const fetchQuizzes = async () => {
        const quizzes = await client.findAllQuizzes();
        setQuizzes(quizzes);
    };



    useEffect(() =>
    { fetchQuizzes();
    }, []);


    return(
        <div>

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Details</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Questions</a>
                </li>
            </ul>

            <br/>

            <div className="text-nowrap w-50">
                <input
                    className="form-control"
                    placeholder="Unnamed Quiz"
                    value={quiz.quizname}
                    onChange={(e) => setQuiz({ ...quiz, quizname: e.target.value })}/>
                <br/>
                <b>Quiz Instructions:</b>
                <p>Edit View Insert Format Tools Table</p>

                <textarea
                    value=""
                    className="form-control w-200"></textarea>

                <br/>

                <div>
                    <b>Quiz Type</b>
                    <select
                        onChange={(e) => setQuiz({ ...quiz, type: e.target.value })}>
                        <option value="GRADED QUIZ">Graded Quiz</option>
                        <option value="UNGRADED QUIZ">Ungraded Quiz</option>
                        <option value="GRADED EXAM">Graded Exam</option>
                        <option value="UNGRADED EXAM">Ungraded Exam</option>
                    </select>

                    <br/>
                    <br/>

                    <b>Assigment Group</b>
                    <select
                        onChange={(e) => setQuiz({ ...quiz, assignmentGroup: e.target.value })}>
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="ASSIGNMENTS">QUIZZES</option>
                        <option value="ASSIGNMENTS">EXAMS</option>
                    </select>

                    <br/>
                    <br/>
                    <div>
                        <b>Options</b>
                        <br/>
                        <input
                            type="checkbox"
                            checked={quiz.shuffleAnswer}
                            className="float-start"
                        />
                        Shuffle Answer

                        <br/>
                        <input
                            type="checkbox"
                            checked={quiz.timeLimit}
                            className="float-start"
                        />
                        Time Limit

                        <div className="form-control">
                            <br/>
                            <input
                                type="checkbox"
                                checked={quiz.multipleAttempts}
                                className="float-start"
                            />

                            Multiple Attempts
                        </div>
                    </div>



                    <input
                        className="form-control"
                        placeholder="Unnamed Quiz"
                        value={quiz.quizname}
                        onChange={(e) => setQuiz({ ...quiz, quizname: e.target.value })}/>
                </div>
            </div>

        </div>
    );
}
export default QEditor;