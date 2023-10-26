import { Link, useLocation } from "react-router-dom";
import "./kanbasnavigation.css";

function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar"]; // array of Kanbas links
    const { pathname } = useLocation();
    return (
        <div className="list-group" style={{ width: 150 }}>
            <nav className="kanbas-nav">
            {links.map((link, index) => (
                <li><Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link></li>

            ))} </nav>
        </div>
    );
}
export default KanbasNavigation;

