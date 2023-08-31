import React from "react";
import MyModal from "../ui/Modal/Modal";
import { useSelector } from "react-redux";

export const TasksDetailModal = ({ taskId, isOpen, setIsOpen }) => {
  const { tasks } = useSelector((state) => state.tasksSlice);
  const task = tasks.find((item) => item.id === taskId);
  console.log(task);
  return (
    <MyModal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      {task?.description}
    </MyModal>
  );
};
