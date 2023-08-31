import React from "react";
import MyModal from "./Modal";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addTask } from "../../../redux/features/Tasks/tasksSlice";
export const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(addTask(data));
    onCancel();
  };
  const onCancel = () => {
    reset();
    setIsOpen(!isOpen);
  };

  return (
    <MyModal title={"Add Task Form"} isOpen={isOpen} setIsOpen={setIsOpen}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <label htmlFor="title">Title</label>
        <input
          {...register("title")}
          type="text"
          name="title"
          placeholder="enter title"
        />
        <label htmlFor="description">Description</label>
        <textarea {...register("description")} name="description"></textarea>
        <label htmlFor="date">Select Date</label>
        <input {...register("date")} type="date" name="date" />
        <label htmlFor="name">Select Option</label>
        <select {...register("name")} name="name" id="">
          <option value="Naimur Reza">Naimur Reza</option>
          <option value="Abdur Rahman">Abdur Rahman</option>
          <option value="Jarif Khan">Jarif Khan</option>
          <option value="Masudur Rahmna">Masudur Rahman</option>
          <option value="Kalam Uddin">Kalam Uddin</option>
          <option value="Mizanuur Rahmnan">Mizanur Rahmna</option>
        </select>
        <label htmlFor="priority">Set Priority Level</label>
        <select {...register("priority")} name="priority">
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <div className="flex items-center mt-3 gap-3">
          <p onClick={() => onCancel()} className="btn btn-danger">
            Cancel
          </p>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </MyModal>
  );
};
