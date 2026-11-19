import { Pressable, Text, View } from "react-native";
import { Task } from "../types/Task";
import styles from "../styles";


type Props = {
    tasks: Task[];
    onToggle: (taskId: string) => void;
};

export default function TaskList({ tasks, onToggle }: Props) {
    return (
        <View>
            {tasks.map((task) => (
            <Pressable 
                key={task.id}
                onPress={() => onToggle(task.id)}
            >
                <Text style={task.done ? styles.taskDone : styles.taskName}>
                    {task.title}
                </Text>
            </Pressable>
            ))}
        </View>
    );
}