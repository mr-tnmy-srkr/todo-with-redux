import { useSelector } from "react-redux";
import Modal from "../../ui/Modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, taskId }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  const task = tasks.find((item) => item.id === taskId);
  console.log(taskId);

  const onCancel = () => {
    setIsOpen(false);
  };

  const levelClass = "block mb-2 text-sm font-medium";
  const inputClass =
    "bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={`Tasks Details`}>
      <form>
        <div className="mb-5">
          <label htmlFor="text" className={levelClass}>
            Title
          </label>
          <input
            type="text"
            id="text"
            className={inputClass}
            defaultValue={task?.title}
            disabled
          />
          <label htmlFor="description" className={levelClass}>
            Description
          </label>
          <textarea
            name=""
            id="description"
            className={inputClass}
            defaultValue={task?.description}
            cols="52"
            rows="3"
            disabled
          ></textarea>
          <label htmlFor="deadline" className={levelClass}>
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            className={inputClass}
            defaultValue={task?.deadline}
            disabled
          />
          <label htmlFor="assignTo" className={levelClass}>
            Assign to
          </label>
          <select
            id="assignTo"
            className={inputClass}
            defaultValue={task?.assignTo}
            disabled
          >
            <option value="">Select any option</option>
            <option value="tanmoy">Tanmoy Sarkar</option>
            <option value="sarkar">Sarkar Tanmoy</option>
            <option value="papai">Papai Sarkar</option>
          </select>
          <label htmlFor="priority" className={levelClass}>
            Priority
          </label>
          <select
            id="priority"
            className={inputClass}
            defaultValue={task?.priority}
            disabled
          >
            <option value="">Select a option</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-center">
          <input
            type="reset"
            className="btn btn-primary"
            onClick={onCancel}
            value={"Close"}
          />
        </div>
      </form>
    </Modal>
  );
};
export default TaskDetailsModal;
