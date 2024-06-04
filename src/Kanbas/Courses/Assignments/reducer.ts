import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
    assignments: assignments,
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                lessons: [],
                name: assignment.title,
                course: assignment.course,
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },
        deleteAssignment: (state, { payload: moduleId }) => {
            state.assignments = state.assignments.filter(
                (m: any) => m._id !== moduleId);
        },
        updateAssignment: (state, { payload: module }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === module._id ? module : m
            ) as any;
        },
        editAssignment: (state, { payload: moduleId }) => {
            state.assignments = state.assignments.map((m: any) =>
                m._id === moduleId ? { ...m, editing: true } : m
            ) as any;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;