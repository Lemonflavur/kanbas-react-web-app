import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "../Quizzes/client";


function Details() {

    const [quizInfo, setQuizInfo] = useState({quizname: ""});
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


                    <input
                        type="text"
                        value={quizInfo.quizname}
                        onChange={(e) => setQuizInfo({ ...quizInfo, quizname: e.target.value })}/>


                </div>
                )}


        </div>
    );
}
export default Details;