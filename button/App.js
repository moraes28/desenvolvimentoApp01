import * as React from 'react';
import { Appbar, FAB, Surface } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = () => {

  return (
    <React.Fragment>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content title="Camera" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>

      <FAB
        style={styles.fab}
        big
        icon="camera"
        onPress={ () => console.log('Pressed') }
      />
    </React.Fragment>
  );

};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    backgroundColor: "#FF1493",
    right: 0,
    bottom: 0
  },
  appbar: {
    backgroundColor: "#1E90FF"
  }
})


export default MyComponent;