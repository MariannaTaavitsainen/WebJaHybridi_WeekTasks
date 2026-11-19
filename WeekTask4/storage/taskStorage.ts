import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../types/Task';

const STORAGE_KEY_TASKS = '@tasks';

const saveTask = async (tasks: Task[]) => {
  try {
    await AsyncStorage.setItem(
      STORAGE_KEY_TASKS, JSON.stringify(tasks));
  } catch (error) {
    console.log('Task saving failed:', error);
  }
};

const getTasks = async (): Promise<Task[]> => {
  try {
    const data = await AsyncStorage.getItem(STORAGE_KEY_TASKS);

    if (data !== null) {
      return JSON.parse(data) as Task[];
    } 
  } catch (error) {
    console.log('Getting tasks failed:', error);
  }
  return [];
};

export { saveTask, getTasks };