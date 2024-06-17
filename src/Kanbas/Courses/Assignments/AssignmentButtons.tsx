import { CiSearch } from "react-icons/ci";
import {FaPlus} from "react-icons/fa6";
import {Link, Routes} from "react-router-dom";

export default function AssignmentButtons() {

    return (
        <div id="wd-assignment-buttons" className="text-nowrap">

               <div id="wd-input" className="form-outline" >
                   <input type="text" className="form-control float-end" id="searchInput"  placeholder=" Search..." />
                   <s> <CiSearch /></s>
               </div>
            
                <Link to={`/Kanbas/Courses/_id/Assignments/_id`} className="btn btn-lg btn-danger me-1 float-end">
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment</Link>
            
            <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
        </button>

        </div>

);}