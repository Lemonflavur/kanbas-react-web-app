import React, { useState, useEffect } from "react";
import * as client from "./client";
import {Link, useParams} from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import Details from "./Details";
import {createUser} from "./client";
import {FaPlus} from "react-icons/fa6";

export default function PeopleTable() {
    
    const { cid } = useParams();
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    
    const createUser = async () => {
        const user = await client.createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            section: "S101",
            role: "STUDENT",
        });
        setUsers(([...users, user]));
    };
    
    const filterUserByName = async (name: string) => {
        setName(name);
        if (name) {
            const users = await client.findUserByPartialName(name);
            setUsers(users);
        } else {
            fetchUsers();
        }
    }
    const filterUserByRole = async (role: string) => {
        setRole(role);
        if (role) {
            const users = await client.findUsersByRole(role);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    
    useEffect(() => {
        fetchUsers();
    }, []);
    
    return (
        <div id="wd-people-table" >
            <PeopleDetails fetchUsers={fetchUsers}/>
            <button onClick={createUser} className="float-end btn btn-danger">
                <FaPlus className="me-2" />
                People
            </button>
            
            
            <input value={name}
                   onChange={(e) => filterUserByName(e.target.value)}
                   className="form-control float-start w-25 me-2"/>
            <select value={role}
                    onChange={(e) =>filterUserByRole(e.target.value)}
                    className="form-select float-start w-25">
                <option value="">All Roles</option>
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option>
                <option value="FACULTY">Faculty</option>
            </select>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user:any) => (
                  <tr key={user._id}>
                      
                      <td className="text-nowrap me-3 text-danger">
                          <Link to={`/Kanbas/Courses/1234/People/${user._id}`}>
                          <FaUserCircle className="text-secondary me-2" />{user.firstName}{user.lastName}
                          </Link>
                      </td>
                      <td>{user.loginId}</td><td>{user.section}</td><td>{user.role}</td><td>{user.lastActivity}</td><td>{user.totalActivity}</td>
                  </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}