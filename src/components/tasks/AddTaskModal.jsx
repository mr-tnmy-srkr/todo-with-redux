import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    dispatch(addTask(data));
    onCancel();
  };
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const levelClass = "block mb-2 text-sm font-medium";
  const inputClass =
    "bg-gray-50 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500";
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={`Add a Task`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <label htmlFor="text" className={levelClass}>
            Title
          </label>
          <input
            type="text"
            id="text"
            className={inputClass}
            placeholder=""
            {...register("title")}
          />
          <label htmlFor="description" className={levelClass}>
            Description
          </label>
          <textarea
            name=""
            id="description"
            className={inputClass}
            cols="52"
            rows="3"
            {...register("description")}
          ></textarea>
          <label htmlFor="deadline" className={levelClass}>
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            className={inputClass}
            placeholder=""
            {...register("deadline")}
          />
          <label htmlFor="assignTo" className={levelClass}>
            Assign to
          </label>
          <select
            {...register("assignTo")}
            id="assignTo"
            className={inputClass}
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
            {...register("priority")}
            id="priority"
            className={inputClass}
          >
            <option value="">Select a option</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div className="flex gap-3 justify-center">
          <input type="submit" className="btn btn-primary" />
          <input type="reset" className="btn btn-primary" onClick={onCancel} />
        </div>
      </form>
    </Modal>
  );
};
export default AddTaskModal;
