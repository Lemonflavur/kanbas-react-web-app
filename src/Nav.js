//import Signin from "../kanbas-node-server-app/users/signin";
import { Link, useLocation } from "react-router-dom";
function Nav() {
    const { pathname } = useLocation();
    return (
        <div>
            <h1>Labs</h1>
            <nav className="nav nav-tabs mt-2">

                <Link to="/Labs/a3"
                      className={`nav-link ${pathname.includes("a3") ? "active" : ""}`}>Assignment 3</Link>
                <Link className="nav-link" to="/Labs/a4">Assignment 4</Link>
                <Link className="nav-link" to="/Labs/a5">Assignment 5</Link>
                <Link to="/users/signin"
                      className={`nav-link ${pathname.includes("signin") ? "active" : ""}`}>Project</Link>
                <Link to="/hello"
                      className={`nav-link ${pathname.includes("hello") ? "active" : ""}`}>Hello</Link>
                <Link to="/Kanbas"
                      className={`nav-link ${pathname.includes("Kanbas") ? "active" : ""}`}>Kanbas</Link>

            </nav>
        </div>
    );
}
export default Nav;