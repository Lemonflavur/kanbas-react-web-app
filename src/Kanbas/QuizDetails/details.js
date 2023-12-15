import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../Quizzes/client";


function Details() {

    const [quizInfo, setQuizInfo] = useState(null);
    const [credentials, setCredentials] = useState({quizname: ""});

    const [quiz, setQuiz] = useState({quizname: ""});
    const navigate = useNavigate();

    const fetchAccount = async () => {
        const quizInfo = await client.quizAccount();
        setQuizInfo(quizInfo);
    };
    useEffect(() => {
        fetchAccount();
    }, []);

    return(
        <div className="w-50">
            <h1>Details</h1>
            <p>Quiz Name</p>
            {quizInfo && (
                <div>
                    <b>Quiz Name</b>

                    <input
                        type="text"
                        value={quizInfo.quizname}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, quizname: e.target.value })}/>
                    <br/>

                    <b>Quiz Type</b>
                    <input
                        type="text"
                        value={quizInfo.type}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>Assignment Group</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>Shuffle Answers</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>Time Limit</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>Multiple Attempts</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>View Responses</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>Show Correct Answers</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>One Question at a Time</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>Require Respondus LockDown Browser</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>Required to View Quiz Results</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>Webcam Required</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>

                    <b>Lock Questions After Answering</b>
                    <input
                        type="text"
                        value={quizInfo.assignmentGroup}
                        className="form-control"
                        onChange={(e) => setQuizInfo({ ...quizInfo, type: e.target.value })}/>
                    <br/>


                </div>
                )}


        </div>
    );
}
export default Details;