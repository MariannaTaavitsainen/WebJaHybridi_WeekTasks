import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import styles from '../styles';

type Props = {
    onAddTask: (taskName: string) => void;
};

export default function AddTask({ onAddTask }: Props) {
    const [taskName, setTaskName] = useState('');

    const handleAddTask = () => {
        if (taskName.trim() === ''){ 
            return;
        }
        onAddTask(taskName);
        setTaskName('');
    }

    return (
        <View>
            <TextInput style={styles.taskName}
                placeholder="Enter task name"
                value={taskName}
                onChangeText={setTaskName}
            />
            <Button 
            title="Add Task" onPress={handleAddTask} 
            />
        </View>
    );
}