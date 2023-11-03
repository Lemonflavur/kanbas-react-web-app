import "./index.css";

function topButtons() {

    return(
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
                        className="fa-solid fa-ellipsis-v" style="color: grey"></i></button>
                </div>
                <div className="wd-float-done"></div>
            </div>


        </div>
    );
}
export default topButtons();