import { createContext, useState } from "react";

const addTaskToList = (taskItems, taskVal) => {
  const existingTaskItem = taskItems.find(element => element.name === taskVal);

  if (!existingTaskItem) {
    const newItem = {name:taskVal, isCompleted: false}
    return [...taskItems, newItem];
  }
  
  return [...taskItems];
}

const removeFromList = (taskItems, taskVal) => {
  return taskItems.filter(element => element.name !== taskVal.name);
}


const changeCompletedTask = (taskItems, taskCheckBox) => {
  const newIsCompleted = !(taskCheckBox.isCompleted);
  
  return taskItems.map(taskItem => (
    (taskItem.name === taskCheckBox.name) ? (
      {...taskItem, isCompleted: newIsCompleted}
    ): taskItem
  ))
}

const removeCompletedTasks = (taskItems) => {
  return taskItems.filter(taskItem => taskItem.isCompleted !== true);
}


export const TasksContext = createContext({
  taskItems: [],
  createtask: '',
  completedTasks: [],
  onCheckboxHandler: () => null,
  onChangeHandler: () => null,
  onSubmitHandler: () => null, 
  onRemoveHandler: () => null,
  onRemoveCompletedHandler: () => null
});

export const TasksProvider = ({children}) => {
  const [taskItems, setTaskItems] = useState([]);
  const [createtask, setCreateTask] = useState('');

  const onChangeHandler = (event) => {
    const value = event.target.value;
    setCreateTask(value);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setTaskItems(addTaskToList(taskItems, createtask));
  }

  const onRemoveHandler = (taskToRemove) => {
    setTaskItems(removeFromList(taskItems, taskToRemove));
  }

  const onCheckboxHandler = (taskCheckBox) => {
    setTaskItems(changeCompletedTask(taskItems, taskCheckBox));
  }

  const onRemoveCompletedHandler = (taskItems) => {
    setTaskItems(removeCompletedTasks(taskItems));
  }


  const value = {taskItems, createtask, onChangeHandler, onSubmitHandler, onRemoveHandler, onCheckboxHandler, onRemoveCompletedHandler}
  
  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
