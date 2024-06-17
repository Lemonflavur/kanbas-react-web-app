import "./index.css";
import {Link, useLocation} from "react-router-dom";
import {FaRegCircleUser} from "react-icons/fa6";
import {useParams} from "react-router";
import {courses} from "../../Database";

export default function CoursesNavigation() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const links = [
        {label: "Home", path: "/Kanbas/Courses/_id/Home"},
        {label: "Modules", path: "/Kanbas/Courses/_id/Modules"},
        {label: "Piazza", path: "/Kanbas/Courses/_id/Piazza"},
        {label: "Zoom", path: "/Kanbas/Courses/_id/Zoom"},
        {label: "Assignments", path: "/Kanbas/Courses/_id/Assignments"},
        {label: "Quizzes", path: "/Kanbas/Courses/_id/Quizzes"},
        {label: "Grades", path: "/Kanbas/Courses/_id/Grades"},
        {label: "People", path: "/Kanbas/Courses/${cid}/People"}
    ];
    
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
    
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item  border-0
              ${pathname.includes(link.label) ? "list-group-item active " : "text-danger bg-white"}`}>
                    {link.label}
                </Link>
            ))}
            
        </div>

    );}

