import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { updateStatus } from "../../redux/features/tasks/tasksSlice";
import { useState } from "react";
import UpdateTaskModal from "./UpdateTaskModal";

const MyTasks = () => {
  let [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { tasks } = useSelector((state) => state.tasksSlice);
  // console.log(tasks);
  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {tasks?.map((task) => (
          <div
            key={task.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{task.title}</h1>
            <div className="flex gap-3">
              <button
                className="grid place-content-center"
                title="DETAILS"
                onClick={() => setIsOpen(!isOpen)}
              >
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <UpdateTaskModal isOpen={isOpen} setIsOpen={setIsOpen} task={task}/>
              <button
                className="grid place-content-center"
                title="COMPLETED"
                onClick={() =>
                  dispatch(updateStatus({ id: task.id, status: "completed" }))
                }
              >
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
