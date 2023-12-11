import * as client from "./client";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";
//import { setCurrentUser } from "./reducer";
//import {findUserByFirstName} from "./client";

function Account() {
    const [account, setAccount] = useState(null);
    const [accounts, setAccounts] = useState({ username: "", password: "", role: "USER" });
    //const frtName = useState({ firstName: "" });
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/project/signin");
    };

    useEffect(() => {
        fetchAccount();

    }, []);

    return(
        <div>
            <h1>Account</h1>
            {account && (
                <div>
                    <input
                        type="password"
                        className="form-control"
                        value={account.password}
                        onChange={(e) => setAccount({ ...account, password: e.target.value })}/>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={account.firstName}
                        onChange={(e) => setAccount({ ...account, firstName: e.target.value })}/>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        value={account.lastName}
                        onChange={(e) => setAccount({ ...account, lastName: e.target.value })}/>
                    <input
                        type="text"
                        className="form-control"
                        value={account.email}
                        onChange={(e) => setAccount({ ...account, email: e.target.value })}/>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Date of Birth"
                        value={accounts.lastName}
                        onChange={(e) => setAccount({ ...account, lastName: e.target.value })}/>

                    <select onChange={(e) => setAccount({ ...account,
                        role: e.target.value })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                    <br/>
                    <button
                        onClick={save}
                        className="btn btn-primary w-100">
                        Save
                    </button>

                    <button
                        onClick={signout}
                        className="btn btn-danger w-100">
                        Signout
                    </button>

                    <Link to="/project/admin/users"
                          className="btn btn-warning w-100">
                        Users
                    </Link>


                </div>
            )}

        </div>
    );

}

export default Account;