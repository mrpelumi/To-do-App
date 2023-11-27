import TaskItems from '../../components/taskItems/taskItems.component';
import TaskForm from '../../components/taskForm/taskForm.component';
import { useContext } from 'react';
import { TasksContext } from '../../context/taskList.context';
import TodoLogo from '../../assets/To-Do-Logo.png';
import {ReactComponent as CancelLogo} from '../../assets/x-logo.svg';
import './home.styles.scss';

const Home = () => {
  const {onRemoveCompletedHandler, taskItems} = useContext(TasksContext);

  const onRemoveFunc = () => onRemoveCompletedHandler(taskItems);
  return (
    <div className='page-container'>
      <img src={TodoLogo} alt='To-do Logo' />
      <div className='home-container'>
        <TaskForm />
        <div className='task-items-container'>
          <TaskItems />
          <span onClick={onRemoveFunc}><CancelLogo /> Clear Completed</span>
        </div> 
      </div>
    </div>
    
  )

}

export default Home;