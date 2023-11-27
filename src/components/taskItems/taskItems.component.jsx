import { useContext } from "react";
import { TasksContext } from "../../context/taskList.context";
import TaskItem from "../taskItem/taskItem.component";

const TaskItems = () => {
  const {taskItems} = useContext(TasksContext);
  
  return (
    <div className="">
      {
        taskItems.map(task => {
          return (
            <TaskItem task={task} key={task.name} /> 
          )
        })
      }
    </div>
  ) 

}

export default TaskItems;