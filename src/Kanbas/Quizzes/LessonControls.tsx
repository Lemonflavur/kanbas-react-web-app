import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons(
    { quizId, deleteQuiz }: { quizId: string; deleteQuiz: (moduleId: string) => void; }
) {
    return (
        <div className="float-end">
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteQuiz(quizId)}/>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4 text-secondary" />
        </div>
    );}
