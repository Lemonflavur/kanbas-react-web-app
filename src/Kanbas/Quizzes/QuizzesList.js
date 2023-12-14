import React, {useEffect, useState} from "react";
import * as client from "./client";
import {BsFillCheckCircleFill, BsPencil, BsPlusCircleFill, BsThreeDots, BsThreeDotsVertical} from "react-icons/bs";


import {BiPlus} from "react-icons/bi";
import {Link, useNavigate, useParams} from "react-router-dom";
import {findQuizById} from "./client";
//import {createQuizCredentials, createQuizInfo, deleteQuiz} from "./client";

function QuizzesList() {

    const { courseId } = useParams();
    const links = ["Home", "Modules", "Assignments", "Grades", "Quizzes" ,
        "QuizDetails", "QuizEditor", "QuizQuestions"];

    const [quizzes, setQuizzes] = useState([]);
    const [quiz, setQuiz] = useState({quizname: "", status: "", endDate: "", points: "", questionCount: "" });

    const [error, setError] = useState("");
    const [credentials, setCredentials] = useState({quizname: ""});
    const navigate = useNavigate();

    const createNewQuizCredentials = async () => {
        try {
            await client.createQuizInfo(credentials);
            navigate(`/Kanbas/Courses/courseId/quizDetails`);
        } catch (err) {
            setError(err.response.data.message);
        }
    };

    const createQuiz = async () => {
        try {
            const newQuiz = await client.createQuiz(quiz);
            setQuizzes([newQuiz, ...quizzes]);
            navigate(`/Kanbas/Courses/${courseId}/QuizDetails`);
        } catch (err) {
            console.log(err);
        }
    };

    const deleteQuiz = async (quiz) => {
        try {
            await client.deleteQuiz(quiz);
            setQuizzes(quizzes.filter((q) => q._id !== quiz._id));
        } catch (err) {
            console.log(err);
        }
    };

    const selectQuiz = async (user) => {
        try {
            const q = await client.findQuizById(user._id);
            setQuiz(q);
        } catch (err) {
            console.log(err);
        }
    };
    const updateQuiz = async () => {
        try {
            const status = await client.updateQuiz(quiz);
            setQuizzes(quizzes.map((u) => (u._id === quiz._id ? quiz : u)));
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


    return (
        <div>
            <h1>Quizzes</h1>
            {error && <div>{error}</div>}
            <td className="text-nowrap">
                <input
                    placeholder="New Quiz"
                    value={quiz.quizname}
                    onChange={(e) => setQuiz({ ...quiz, quizname: e.target.value })}/>

                <input
                    placeholder="Status"
                    value={quiz.status}
                    onChange={(e) => setQuiz({ ...quiz, status: e.target.value })}/>

                <input
                    placeholder="Due Date"
                    value={quiz.endDate}
                    onChange={(e) => setQuiz({ ...quiz, endDate: e.target.value })}/>

                <input
                    placeholder="Points"
                    value={quiz.points}
                    onChange={(e) => setQuiz({ ...quiz, points: e.target.value })}/>

                <input
                    placeholder="Number of Questions"
                    value={quiz.questionCount}
                    onChange={(e) => setQuiz({ ...quiz, questionCount: e.target.value })}/>

                <button
                onClick={createQuiz}
                className="btn btn-danger">
                <BiPlus
                    className="text-light fs-6 text"/>
                Quiz
                </button>

                <BsFillCheckCircleFill
                    onClick={updateQuiz}
                    className="me-2 text-success fs-1 text" />

            </td>

            <table className="table">

                <thead>
                <tr>
                    <th>Quiz</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th>Points</th>
                    <th>Number of Questions</th>
                </tr>
                </thead>
                <tbody>
                {quizzes.map((quiz) => (
                    <tr key={quiz._id}>
                        <td>
                            <Link to={`/Kanbas/Courses/${courseId}/QuizDetails/${quiz._id}`}>
                                {quiz.quizname}
                            </Link>
                        </td>
                        <td>{quiz.status}</td>
                        <td>{quiz.endDate}</td>
                        <td>{quiz.points}</td>
                        <td>{quiz.questionCount}</td>

                        <button className="btn btn-warning me-2">
                            <BsPencil onClick={() => selectQuiz(quiz)} />
                        </button>
                        <td><BsThreeDotsVertical onClick={() => deleteQuiz(quiz)} /></td>

                    </tr>))}

                </tbody>
            </table>


        </div>


    );
}
export default QuizzesList;