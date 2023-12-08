import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import './moduleList.css'
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
    setModules,
} from "./modulesReducer";
import * as client from "../../../../kanbas-node-server-app/modules/client";
import {createModule, findModulesForCourse} from "../../../../kanbas-node-server-app/modules/client";
function ModuleList() {
    const { courseId } = useParams();
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
            dispatch(deleteModule(moduleId));
        });
    };

    useEffect(() => {
        findModulesForCourse(courseId)
            .then((modules) =>
                dispatch(setModules(modules))
            );
    }, [courseId]);

    const modules = useSelector((state) => state.modulesReducer.modules);
    const module = useSelector((state) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
            dispatch(addModule(module));
        });
    };

    return (

        <div className="modules">
            <ol className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start list-group-item-secondary">
                    <div className="ms-2 me-auto">

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle"  type="button" data-bs-toggle="dropdown">Course Dropdown</button>
                            <ul className="dropdown-menu list-group">

                                <li className="list-group-item">
                                    <button onClick={handleAddModule}
                                            className="btn btn-success">
                                        Add</button>

                                    <button onClick={handleUpdateModule}
                                            className="btn btn-primary">
                                        Update
                                    </button>

                                    <input value={module.name}
                                           onChange={(e) =>
                                               dispatch(setModule({ ...module, name: e.target.value }))}
                                    />
                                    <textarea value={module.description}
                                              onChange={(e) =>
                                                  dispatch(setModule({ ...module, description: e.target.value }))}
                                    />
                                </li>


                                {modules
                                            .filter((module) => module.course === courseId)
                                            .map((module, index) => (
                                                <li key={index} className=" list-group-item-grey fw-bold ">
                                                    <a className="dropdown-item"><h3>{module.name}</h3></a>
                                                    <div className="edit_delete_btn">
                                                        <button
                                                            onClick={() => dispatch(setModule(module))}
                                                            className="btn btn-warning">
                                                            Edit
                                                        </button>

                                                        <button
                                                            onClick={() =>  handleDeleteModule(module._id)}
                                                            className="btn btn-danger">
                                                            Delete
                                                        </button>
                                                    </div>

                                                    <hr className="dropdown-divider"/>
                                                    <a className="dropdown-item"><div className=" dropdown-item">
                                                        <p>{module.description}</p></div></a>
                                                    <hr className="dropdown-divider"/>
                                                </li>))}

                            </ul>

                        </div>
                    </div>
                </li>
            </ol>
        </div>


    );
}
export default ModuleList;