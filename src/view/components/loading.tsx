import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';

interface LoadingProps {
  visible: boolean;
}

const Loading: React.FC<LoadingProps> = ({visible}) => {
  return (
    <Modal transparent animationType="slide" visible={visible}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default Loading;
