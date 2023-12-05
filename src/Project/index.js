import {Navigate, Route, Routes} from "react-router-dom";
import Signin from "./users/signin";
import ProjectNavigation from "./users/ProjectNavigation";
import Courses from "../Kanbas/Courses";
import Project from "./users";

function Assignment6() {
    return (
        <div className="col-10">
            <div>
                <ProjectNavigation/>
            </div>
            <Routes>
                <Route path="/" element={<Navigate to="/Project/home" />} />
                <Signin/>

            </Routes>
        </div>
    );
}
export default Assignment6;