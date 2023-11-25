import { useContext } from "react";
import { TasksContext } from "../../context/taskList.context";


const TaskItem = ({task}) => {
  const {onRemoveHandler, onCheckboxHandler} = useContext(TasksContext);
  const {name} = task;
  
  const onRemoveHandlerFunc = () => onRemoveHandler(task);
  const onCheckboxHandlerFunc = () => onCheckboxHandler(task);

  return (
    <div>
      <input type="checkbox" name="task" onClick={onCheckboxHandlerFunc} /> 
      <label>{name}</label>
      <span onClick={onRemoveHandlerFunc}>&#128465;</span>
      <hr />
    </div>     
  )
}

export default TaskItem;