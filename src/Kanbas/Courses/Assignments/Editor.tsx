import {useParams} from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
    
    const assignments = db.assignments;
  return (
    <div id="wd-assignments-editor">
        <div className="mb-3">

            <label htmlFor="wd-name" className="form-label"> <b>Assignment Name</b></label>
            <br /><br />

            <input type="assignment name" className="form-control" id="wd-name" value="A1" />
         
          <br /><br />

            <div className="mb-3" id="wd-description">

                <textarea className="form-control" id="textarea1"
                          rows={3}>
                     The assignment is available online
              Submit a link to the landing page of your Web
              application running on Netlify. The landing page should include the following: Your full
              name and section Links to each of the lab assignments Link to the Kanbas application
              Links to all relevant source code repositories
              The Kanbas application should include a link to navigate back to the landing page.
                </textarea>
            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-points"
                       className="col-sm-1 col-form-label">Points
                </label>
                <div className="col-sm-3">
                    <input type="text" className="form-control"
                           id="wd-points" value={100} />
                </div>
            </div>

            <div className="mb-3 row right-align margin">

                <label  htmlFor="wd-assignments"
                       className="col-sm-1 col-form-label">Assignment Group
                </label>
                <div className="col-sm-3">
                    <select className="form-select">
                        <option id="wd-assignments" value="ASSIGNMENTS" selected> ASSIGNMENTS</option>
                        <option value="1"> n/a</option>
                        <option value="2"> n/a</option>
                        <option value="3"> n/a</option>
                    </select>
                </div>
            </div>

            <div className="mb-3 row right-align margin">

                <label  htmlFor="wd-display-grade-as"
                        className="col-sm-1 col-form-label">Display Grade as
                </label>
                <div className="col-sm-3">
                    <select className="form-select">
                        <option id="wd-display-grade-a" value="ASSIGNMENTS" selected> Percentage</option>
                        <option value="1"> n/a</option>
                        <option value="2"> n/a</option>
                        <option value="3"> n/a</option>
                    </select>
                </div>
            </div>

            <div className="mb-3">

                <label  htmlFor="wd-submission-type"
                        className="col-sm-2 col-form-label">Submission Type
                </label>
                <div className="col-sm-3">
                    <select className="form-select">
                        <option id="wd-submission-type" value="ASSIGNMENTS" selected> Online</option>
                        <option value="1"> n/a</option>
                        <option value="2"> n/a</option>
                        <option value="3"> n/a</option>
                    </select>

                    <label  htmlFor="wd-text-entry"
                            className="col-sm-6 col-form-label"> <b>Online Entry Options</b>
                    </label>

                    <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="wd-text-entry" />
                            <label className="form-check-label" htmlFor="text-entry">
                                Text Entry </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="wd-website-url" />
                            <label className="form-check-label" htmlFor="wd-website-url">
                                Website URL </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="wd-website-url" />
                            <label className="form-check-label" htmlFor="wd-website-url">
                                Media Recordings </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="wd-media-recordings" />
                            <label className="form-check-label" htmlFor="wd-media-recordings">
                                Student Annotation </label>
                        </div>

                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="wd-file-upload" />
                            <label className="form-check-label" htmlFor="wd-file-upload">
                                File Uploads </label>
                        </div>
                    </div>
                </div>


            </div>

            <div className="mb-3 row">
                <label htmlFor="wd-assign-to"
                       className="col-sm-1 col-form-label">Assign to
                </label>
                <div className="col-sm-3">
                    <input type="text" className="form-control"
                           id="wd-assign-to" value="Everyone" />
                </div>
            </div>

            <div className="mb-3  ">
                <label htmlFor="wd-due-date"
                       className="col-sm-1 col-form-label">Due
                </label>
                <div className="col-sm-3">
                    <input type="date"
                           className="form-control"
                           id="wd-due-date"
                           value="2024-05-13"/>
                </div>
            </div>

            <div className="mb-3  ">
                <label htmlFor="wd-available-from"
                       className="col-sm-1 col-form-label">Available from
                </label>
                <div className="col-sm-3">
                    <input type="date"
                           className="form-control"
                           id="wd-available-from"
                           value="2024-05-06"/>
                </div>
            </div>

            <div className="mb-3  ">
                <label htmlFor="wd-available-until"
                       className="col-sm-1 col-form-label">Until
                </label>
                <div className="col-sm-3">
                    <input type="date"
                           className="form-control"
                           id="wd-available-until"
                           value="2024-05-20"/>
                </div>
            </div>

            <br/>
                <p>____________________________________________________________</p>
                <button type="submit" className="btn btn-secondary"> Cancel </button>
                <button type="submit" className="btn btn-danger"> Save </button>

            <br /><br />
        </div>
    </div>
);}
