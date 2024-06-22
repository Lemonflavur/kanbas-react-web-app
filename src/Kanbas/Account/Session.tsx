import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
    const [pending, setPending] = useState(true);
    const dispatch = useDispatch();
    {/*create a function that can read which profile a
    user has ex: Faculty versu student, and takes user to
     specific page based on their ROLE.
     const fetchUserProfile = async () => {
     if
     }*/}
    const fetchProfile = async () => {
        try {
            const currentUser = await client.profile();
            dispatch(setCurrentUser(currentUser));
        } catch (err: any) {
            console.error(err);
        }
        setPending(false);
    };
    useEffect(() => {
        fetchProfile();
    }, []);
    if (!pending) {
        return children;
    }
}
