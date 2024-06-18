import { FaPencil } from "react-icons/fa6";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

/**
 * PeopleDetails() passes a reference to fetchUsers
 * as a parameter so that PeopleDetails
 * can notify PeopleTable that a user has
 * been remove and that the list of users must be updated.
 * @param fetchUsers
 * @constructor
 */
export default function PeopleDetails({ fetchUsers }: {fetchUsers: () => void; }) {
    const navigate = useNavigate();
    const { uid, cid } = useParams();
    const [user, setUser] = useState<any>({});
    const [role, setRole] = useState("");
    
    const fetchUser = async () => {
        if (!uid) return;
        const user = await  client.findUserById(uid);
        setUser(user);
    };
    
    const [name, setName] = useState("");
    const [editing, setEditing] = useState(false);
    const saveUser = async () => {
        const [firstName, lastName] = name.split(" ");
        const updateUser = { ...user, firstName, lastName };
        await client.updateUser(updateUser);
        setUser(updateUser);
        setEditing(false);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };
    
    const saveEmail = async () => {
        const [email] = name.split(" ");
        const updateUser = { ...user, email };
        await client.updateUser(updateUser);
        setUser(updateUser);
        setEditing(false);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };
    
    const saveRole = async (role: string) => {
        //const [role] = name.split(" ");
        const updateUser = { ...user, role };
        await client.updateUser(updateUser);
        setUser(updateUser);
        setEditing(false);
        fetchUsers();
        //navigate(`/Kanbas/Courses/${cid}/People`);
    };
    
    const deleteUser = async (uid: string) => {
        await client.deleteUser(uid);
        fetchUsers();
        navigate(`/Kanbas/Courses/${cid}/People`);
    };
    
    useEffect(() => {
        if (uid) fetchUser();
    }, [uid]);
    if (!uid) return null;
    return (
        <div className="position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            
            {/* This is the X icon that closes the popup*/}
            <Link to={`/Kanbas/Courses/${cid}/People`} className="btn position-fixed end-0 top-0">
                <IoCloseSharp className="fs-1" /> </Link>
            
            <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
    
            <div className="text-danger fs-4">
                {!editing && (
                    <FaPencil onClick={() => setEditing(true)}
                              className="float-end fs-5 mt-2"/>)}
                {editing && (
                    <FaCheck onClick={() => saveUser()}
                             className="float-end fs-5 mt-2 me-2"/>)}
                {!editing && (
                    <div onClick={() => setEditing(true)}>
                        {user.firstName} {user.lastName}</div>)}
                {user && editing && (
                    <input className="form-control w-50"
                           defaultValue={`${user.firstName} ${user.lastName}`}
                           onChange={(e) => setName(e.target.value)}
                           onKeyDown={(e) => {
                               if (e.key === "Enter") {saveUser();}}}/>
                )}
                {user && editing && (
                    <input className="form-control w-50"
                           defaultValue={`${user.email}`}
                           onChange={(e) => setName(e.target.value)}
                           onKeyDown={(e) => {
                               if (e.key === "Enter") {saveEmail();}}}/>
                )}
            </div>
            
            <div>
                <label htmlFor="wd-role-selector"> <b>Role:</b></label>
                <select id="wd-role-selector"
                        value={user.role}
                        onChange={(e) => saveRole(e.target.value)}
                        className="form-control w-50 me-2">
                    <option defaultValue={user.role}></option>
                    <option value="STUDENT">Students</option>
                    <option value="TA">Assistants</option>
                    <option value="FACULTY">Faculty</option>
                    
                </select> <br/>
    
                {/*<b>Roles:</b> {user.role} <br />*/}
            </div>
            <b>Login ID:</b> {user.loginId} <br />
            <b>Section:</b> {user.section} <br />      <b>Total Activity:</b> {user.totalActivity}
            <hr/>
            <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end">Delete</button>
            <button onClick={() => navigate(`/Kanbas/Courses/${cid}/People`)} className="btn btn-secondary float-end me-2">Cancel</button>
        </div>
    );
}

    
