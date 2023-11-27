import { useContext } from "react";
import { TasksContext } from "../../context/taskList.context";
import './taskForm.styles.scss';

const TaskForm = () => {
  const {onSubmitHandler, onChangeHandler, createtask} = useContext(TasksContext);
  return (
    <form onSubmit={onSubmitHandler}>
        <input className="form-input" type='text' onChange={onChangeHandler} value={createtask} placeholder="What do you need to do" />
        <button className="add-button">ADD</button>
      </form>
  )
}

export default TaskForm;