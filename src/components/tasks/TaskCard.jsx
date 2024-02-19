import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { removeTask, updateStatus } from "../../redux/features/tasks/tasksSlice";

const TaskCard = ({ task }) => {
  // const {id, title, description, deadline, assignTo, priority}= task || {}
  const dispatch = useDispatch();

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task?.priority === "high" ? "text-red-500" : ""
        } ${task?.priority === "medium" ? "text-yellow-500" : ""} ${
          task?.priority === "low" ? "text-green-500" : ""
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.deadline}</p>
        <div className="flex gap-3">
          <button title="Delete" onClick={() => dispatch(removeTask(task.id))}>
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button title="Change Status" onClick={()=>dispatch(updateStatus({id:task.id,status:task.status}))}>
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
