import { Link, useLocation } from "react-router-dom";
import "./projectNavigation/signinnavigation.css";

function ProjectNavigation() {
    const links = ["Home", "Search", "Signin", "Signup", "Account", "Table"]; // array of Signin links
    const { pathname } = useLocation();
    /*let img = document.getElementById('img')
    img.src = "public/images/NU_PMSu_Notched-N_motto_RW.jpg";
    document.getElementById('body').appendChild(img);
     */
    //const img = "./src/images/NU_PMSu_Notched-N_motto_RW.png";
    return (

        <div className="list-group" style={{ width: 150 }}>



                {links.map((link, index) => (

                    <li><Link
                        key={index}
                        to={`/project/${link}`}
                        className={`list-group-item ${pathname.includes(link) && "active"}`}>
                        {link}
                    </Link></li>

                ))}
        </div>
    );
}
export default ProjectNavigation;

