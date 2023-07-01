import { makeAutoObservable, runInAction } from 'mobx';
import { addTask, deleteTask, editTask, getAllTasks } from '@/service/api';

export interface ITask {
  id: string | number,
  title: string,
  completed: boolean,
};

class TaskStore {
  taskList: ITask[] = [];
  
  constructor () {
    makeAutoObservable(this);
  };

  getAllTaskAction = async () => {
    try {
      const tasks = await getAllTasks();
      runInAction(() => {
        this.taskList = tasks;
      });
    } catch (e) {
      console.log('getAllTaskAction:' + e);
    };
  };

  addTask = async (title: string) => {
    try {
      const newTask =await addTask(title); 
      this.taskList.push(newTask);
    } catch (e) {
      console.log('addTask:' + e);
    };
  };

  editTaskAction = async (task: ITask) => {
    try {
      const editedTask = await editTask(task);
      runInAction(() => {
        const index = this.taskList.findIndex(task => task.id === editedTask.id);
        
        if (index !== -1) {
          this.taskList[index] = editedTask;
        }
      });
    } catch (error) {
      console.error('Error editing task:', error);
    }
  };

  deleteTaskAction = async (id: string | number) => {
    try {
      deleteTask(id);
      this.getAllTaskAction();
    } catch (error) {
      console.error('Error deleted task:', error);
    }
  }
};

export default TaskStore;