import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import MyModal from "../ui/Modal/Modal";
import { useState } from "react";
import { PriorityText } from "../shared/PriorityText";
import { useDispatch } from "react-redux";
import { updateStatus } from "../../redux/features/Tasks/tasksSlice";

const MyTasks = ({ myTasks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {myTasks.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between">
            <PriorityText priority={item.priority} title={item.title} />
            <div className="flex gap-3">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="grid place-content-center"
                title="Details">
                <DocumentMagnifyingGlassIcon className="w-5 h-5 text-primary" />
              </button>
              <button
                onClick={() =>
                  dispatch(updateStatus({ id: item.id, status: "done" }))
                }
                className="grid place-content-center"
                title="Done">
                <CheckIcon className="w-5 h-5 text-primary" />
              </button>
              <MyModal title={item.title} isOpen={isOpen} setIsOpen={setIsOpen}>
                <h1>Description: {item.description}</h1>
                <h1>Date added: {item.date}</h1>
                <h1>Assigned To - {item.name}</h1>
              </MyModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
