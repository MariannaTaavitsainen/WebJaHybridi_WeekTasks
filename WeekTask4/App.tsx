import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { Task } from './types/Task';
import styles from './styles';

import {getTasks, saveTask} from './storage/taskStorage';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const loadSavedTasks = async () => {
      const savedTasks = await getTasks();
      setTasks(savedTasks);
    };
    loadSavedTasks();
  }, []);

  const addTask = async (taskName: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: taskName,
      done: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    await saveTask(updatedTasks);
  }

const toggleTaskDone = async (taskId: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, done: !task.done }
        : task
    );

    setTasks(updatedTasks);
    await saveTask(updatedTasks);
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <AddTask onAddTask={addTask} />

      <TaskList 
        tasks={tasks} 
        onToggle={toggleTaskDone} 
      />

      <StatusBar style="auto" />
    </View>
  );
}

