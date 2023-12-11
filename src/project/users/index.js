import Signin from "./signin";
import { Routes, Route, Navigate } from "react-router-dom";
//import Nav from "./nav";
import Account from "./account";
function Project() {
    return (
        <div className="row">
            <div className="col-2">

            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/home" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;