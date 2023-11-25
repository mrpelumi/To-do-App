import { useContext } from "react";
import { TasksContext } from "../../context/taskList.context";

const TaskForm = () => {
  const {onSubmitHandler, onChangeHandler, createtask} = useContext(TasksContext);
  return (
    <form onSubmit={onSubmitHandler}>
        <input type='text' onChange={onChangeHandler} value={createtask} />
        <button>ADD</button>
      </form>
  )
}

export default TaskForm;