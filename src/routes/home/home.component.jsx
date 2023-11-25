import TaskItems from '../../components/taskItems/taskItems.component';
import TaskForm from '../../components/taskForm/taskForm.component';
import { useContext } from 'react';
import { TasksContext } from '../../context/taskList.context';
import TodoLogo from '../../assets/To-Do-Logo.png';
// import { HomeContainer } from './home.styles';
import './home.styles.scss';

const Home = () => {
  const {onRemoveCompletedHandler, taskItems} = useContext(TasksContext);

  const onRemoveFunc = () => onRemoveCompletedHandler(taskItems);
  return (
    <div className='home-container'>
      <img src={TodoLogo} alt='To-do Logo' />
      <TaskForm />
      <TaskItems />
      <span onClick={onRemoveFunc}>&#x2717; Clear Completed</span>
    </div>
  )

}

export default Home;