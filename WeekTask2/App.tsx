import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Switch, Text, View } from 'react-native';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.container}>
        <Pressable
          onPress={() => setIsVisible(true)}>
          <Text > Show Modal</Text>
        </Pressable>
        <Modal
          visible={isVisible}
          onRequestClose={() => {
            setIsVisible(!isVisible);
          }}>
          <View style={styles.modalView}>
              <Pressable
                onPress={() => setIsVisible(!isVisible)}>
                <Text>Hide Modal</Text>
              </Pressable>
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'darkgray',
    height: 200,
  },
});
