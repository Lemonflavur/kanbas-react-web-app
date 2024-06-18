import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
    
    const [profile, setProfile] = useState<any>({});
    const navigate = useNavigate();
    
    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile(account);
        }   catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }
    };
    
    const dispatch = useDispatch();
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kanbas/Account/Signin");
    };
    
    useEffect(() => {fetchProfile(); }, []);
    
    return(
        <div>
            <h1>Profile</h1>
            {profile && (
                <div >
                    <input
                        value={profile.username}
                        onChange={(e) =>setProfile({...profile, username: e.target.value})}
                        className="form-control w-25"/><br/>
                    <input
                        value={profile.password}
                        onChange={(e) =>setProfile({...profile, password: e.target.value})}
                        className="form-control w-25"/><br/>
                    <input
                        value={profile.firstName}
                        onChange={(e) =>setProfile({...profile, firstName: e.target.value})}
                        className="form-control w-25"
                    /><br/>
                    <input
                        value={profile.lastName}
                        onChange={(e) =>setProfile({...profile, lastName: e.target.value})}
                        className="form-control w-25"
                    /><br/>
                    <input
                        value={profile.dob}
                        onChange={(e) =>setProfile({dob: e.target.value})}
                        className="form-control w-25"/><br/>
                    <input
                        value={profile.email}
                        onChange={(e) =>setProfile({email: e.target.value})}
                        className="form-control w-25"/><br/>
                    <select
                        onChange={(e) => setProfile({...profile, role: e.target.value})}
                        className="form-control w-25">
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select> <br/>
                    
                    <button onClick={signout} className="btn btn-danger w-100">
                        Sign out
                    </button>


                </div>
            )}
        
        </div>
    )
}