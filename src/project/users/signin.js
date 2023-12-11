import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./reducer";

function Signin() {

    const [credentials, setCredentials] = useState({ username: "", password: "" });
    //const [username, setUsername] = useState("");
    //const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    //const dispatch = useDispatch();

    const signInAccount = async () => {
        try{
            await client.signin(credentials);
            navigate("/project/account");
        } catch (error) {
            setError(error);
        }
    };

    return (
        <div>
            {error && <div className="alert alert-danger">{error.message} Invalid Credentials!!!</div>}
            <h1>Signin</h1>
            <input
                type="username"
                className="form-control"
                placeholder="Username"
                value={credentials.username}
                onChange= {(e) => setCredentials({...credentials, username: e.target.value})}/>
            <br/>
            <input
                type="text"
                className="form-control"
                placeholder="Password"
                value={credentials.password}
                onChange= {(e) => setCredentials({...credentials, password: e.target.value})}/>
            <br/>
            <button
                onClick={signInAccount}
                className="btn btn-primary">
                Signin </button>
        </div>
    );
}
export default Signin;