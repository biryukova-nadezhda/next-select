import { ITask } from "@/stores/TaskStore";

const API_URL = 'http://localhost:3001/tasks';

export const getAllTasks = async (limit: number | null = null): Promise<ITask[]> => {
  const res = await fetch(API_URL, {cache: 'no-store'});
  const tasks = await res.json();

  if (limit) {
    return tasks.slice(0, limit);
  };

  return tasks;
};

export const addTask = async (title: string): Promise<ITask> => {
  const res = await fetch(API_URL, {
    method: 'post',
    body: JSON.stringify({
      title: title,
      completed: false
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const newTask = await res.json();
  return newTask;
};

export const editTask = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${API_URL}/${task.id}`, {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  const editingTask = await res.json();
  return editingTask;
};

export const deleteTask = async (id: string | number): Promise<void> => {
  await fetch(`${API_URL}/${id}`, {
    method: 'delete',
  });
};