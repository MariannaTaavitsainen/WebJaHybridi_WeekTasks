import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
    taskName: {
    fontSize: 18,
    padding: 10,
    fontWeight: 'bold',
  },
    taskDone: {
    color: 'gray',
    fontSize: 18,
    padding: 10,
  }
});

export default styles;