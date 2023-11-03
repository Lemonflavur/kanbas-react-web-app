import ModuleList from "../Modules/ModuleList";
import './index.css';
import '../../vendors/fontawesome/css/all.css';
import db from "../Database";
import {React} from "react";

function Home() {
    const coursesC = db.courses;
    //let getCourseID = coursesC.id;
    //let getCourseName = coursesC.name;
    return (

        <div>

            <div className="button-col">
                <div className="wd-float-left top-button-padding-right">
                    <button type="button" className="btn btn-light btn-outline-secondary">Collapse All</button>
                </div>
                <div className="wd-float-left top-button-padding-right ">
                    <button type="button" className="btn btn-light btn-outline-secondary">View Progress</button>
                </div>
                <div className="wd-float-left top-button-padding-right">
                    <label><select type="button" className="btn btn-light btn-outline-secondary">
                        <option value="PUBLISH ALL">Publish All</option>
                    </select>
                    </label></div>
                <div className="wd-float-left top-button-padding-right btn-outline-secondary">
                    <button type="button" className="btn btn-danger">Module</button>
                </div>
                <div className="wd-float-left top-button-padding-right btn-outline-secondary">
                    <button type="button" className="btn btn-light btn-outline-secondary"><i
                        className="fa-solid fa-ellipsis-v"></i></button>
                </div>
                <div className="wd-float-done"></div>
            </div>
            <h2>Home</h2>
            <ModuleList />
            <h2>Status</h2>



            <div className="course-status-grid-row">
                <div className="course-status-nav-col">
                    <h4>Course Status</h4>
                    <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-light btn-outline-secondary">
                             Unpublished
                        </button>
                        <button type="button" className="btn btn-success">
                             Published
                        </button>
                    </div>
                    <div className="top-button-padding-right">
                        <button type="button" className="btn btn-light btn-outline-secondary">
                            <a href="#">Import Existing Content</a></button>
                    </div>
                    <div className="top-button-padding-right">
                        <button type="button" className="btn btn-light btn-outline-secondary">
                            <a href="#">Import From Commons</a></button>
                    </div>
                    <div className="top-button-padding-right">
                        <button type="button" className="btn btn-light btn-outline-secondary">
                            <a href="#">Choose Home Page</a></button>
                    </div>
                    <div className="top-button-padding-right">
                        <button type="button" className="btn btn-light btn-outline-secondary">
                            <a href="#">View Course Stream</a></button>
                    </div>
                    <div className="top-button-padding-right">
                        <button type="button" className="btn btn-light btn-outline-secondary">
                            <a href="#">New Announcement</a></button>
                    </div>
                    <div className="top-button-padding-right">
                        <button type="button" className="btn btn-light btn-outline-secondary">
                            <a href="#">New Analytics</a></button>
                    </div>
                    <div className="top-button-padding-right">
                        <button type="button" className="btn btn-light btn-outline-secondary">
                            <i className="fa-solid fa-circle-check" ></i>
                            <a href="#">View Course Notifications</a></button>
                    </div>

                </div>


            </div>
        </div>
    );
}
export default Home;

