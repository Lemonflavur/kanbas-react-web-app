
import { Navigate, Route, Routes, useParams } from "react-router-dom";

//import { useState, useEffect } from "react";
//import axios from "axios";

import ProjectNavigation from "./nav";
import Signin from "./users/signin";
import Home from "./users/home";
import Search from "./users/search";
import Signup from "./users/signup";
import Account from "./users/account";
import CurrentUser from "./users/currentUser";
import {Provider} from "react-redux";
import store from "./store";
import UserTable from "./users/table";
//import UserList from "./users/list";
//

function Project() {

    return (
        <Provider store={store}>

            <div>
                <ProjectNavigation/>
                <div>
                    <div
                        className="overflow-y-scroll position-fixed bottom-0 end-0"
                        style={{
                            left: "320px",
                            top: "50px",
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="/" element={<Home/>} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/signin" element={<Signin />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/account" element={<Account />} />
                            <Route path="/admin/users" element={<UserTable />} />

                        </Routes>
                    </div>
                </div>
            </div>

            </Provider>
    );
}
export default Project;