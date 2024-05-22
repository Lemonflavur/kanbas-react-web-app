import {MdDoNotDisturbAlt} from "react-icons/md";
import {FaCheckCircle} from "react-icons/fa";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdSettings } from "react-icons/io";
import {CiSearch} from "react-icons/ci";
import { CiFilter } from "react-icons/ci";

export default function Grades() {

    return (
        <div id="wd-grades">

            <div className="d-flex">

                <div className="w-50 pe-1">
                    <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
                        <LiaFileImportSolid className="me-2 fs-5" />
                        Import
                    </button>
                </div>


                <div className="w-50">
                    <select className="form-select btn-secondary w-100">
                        <option id="wd-submission-type" value="ASSIGNMENTS" selected>
                            <LiaFileImportSolid className="me-2 fs-5" /> Export</option>
                        <option value="1"> n/a</option>
                        <option value="2"> n/a</option>
                        <option value="3"> n/a</option>
                    </select>

                </div>

                <div className="w-50">
                    <button className="btn btn-lg btn-secondary w-100">
                        <IoMdSettings className="me-2 fs-5" />
                    </button>
                </div>
            </div>


            <div className="d-flex">
                <div className="mb-3 row form-outline">
                    <label htmlFor="wd-points"
                           className="col-sm-7 col-form-label"><b>Student Names</b>
                    </label>
                    <div className="col-sm-7">
                        <select className="form-select btn-secondary w-100">
                            <option id="wd-submission-type" value="ASSIGNMENTS" selected>
                                <LiaFileImportSolid className="me-2 fs-5" /> Search Student</option>
                            <option value="1"> n/a</option>
                            <option value="2"> n/a</option>
                            <option value="3"> n/a</option>
                        </select>
                    </div>
                </div>

                <div className="mb-3 row form-outline">
                    <label htmlFor="wd-points"
                           className="col-sm-7 col-form-label"><b>Assigment Names</b>
                    </label>
                    <div className="col-sm-7">
                        <select className="form-select btn-secondary w-100">
                            <option id="wd-submission-type" value="ASSIGNMENTS" selected>
                                <LiaFileImportSolid className="me-2 fs-5" /> Search Assigments</option>
                            <option value="1"> n/a</option>
                            <option value="2"> n/a</option>
                            <option value="3"> n/a</option>
                        </select>
                    </div>
                </div>
            </div>

            <button type="submit" className="btn btn-secondary">
                <CiFilter className="me-2 fs-5" />
                Sign in </button>

            <div id="wd-css-styling-tables">
                <h2>Tables</h2>
                <table className="table">
                    <thead>
                    <tr className="table-secondary"><th><b>Student Name</b></th><th>A1 SETUP Out of 100</th>
                        <th>A2 HTML Out of 100</th><th>A3 CSS Out of 100</th><th>A4 BOOTSTRAP Out of 100</th></tr>
                    </thead>
                    <tbody>
                    <tr className="table-light"><td>Jane Adams</td><td>100%</td><td>78%</td><td>85%</td><td>90%</td></tr>
                    <tr className="table-secondary"><td>Christina Allen</td><td>97%</td><td>100%</td><td>90%</td><td>90%</td></tr>
                    <tr className="table-light"><td>Samreen Ansari</td><td>100%</td><td>21%</td><td>90%</td><td>90%</td></tr>
                    </tbody>

                </table>
            </div>
        </div>
);}