import { ArrowRightIcon, TrashIcon } from "@heroicons/react/24/outline";

export const TaskCard = ({ task }) => {
  const { id, title, description, deadline, assignTo, priority } = task || {};
  /*   const task = {
    id: 1,
    status: "pending",
    title: "Remove Button",
    description:
      "We need a remove button in our task card. Meke the button red and use Heroicon for tashbin icon.",
    date: "2023-08-28",
    assignedTo: "Mir Hussain",
    priority: "high",
  }; */
  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1>{task?.title}</h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.deadline}</p>
        <div className="flex gap-3">
          <button title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button title="In progress">
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};