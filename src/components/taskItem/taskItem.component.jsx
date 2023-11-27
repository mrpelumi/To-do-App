import { useContext } from "react";
import { TasksContext } from "../../context/taskList.context";
import {ReactComponent as TrashBin} from '../../assets/trash-bin.svg';
import './taskItem.styles.scss';


const TaskItem = ({task}) => {
  const {onRemoveHandler, onCheckboxHandler} = useContext(TasksContext);
  const {name, isCompleted} = task;
  
  
  const onRemoveHandlerFunc = () => onRemoveHandler(task);
  const onCheckboxHandlerFunc = () => onCheckboxHandler(task);

  return (
    <>
      <div className="task-container">
        <div className="task-checkbox-container">
          <input className="task-checkbox" type="checkbox" name="task" onClick={onCheckboxHandlerFunc} /> 
          {
            isCompleted ? (<label className="task-name strike">{name}</label>):(<label className="task-name">{name}</label>)
          }
        </div>
        <span className="delete-icon-container" onClick={onRemoveHandlerFunc}>{<TrashBin />}</span>
      </div>  
      <hr />
    </>
       
  )
}

export default TaskItem;