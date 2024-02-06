import React from "react";
import { View, ActivityIndicator, StyleSheet, Modal } from "react-native";
import { COLORS } from "../../Theme/Color";
import { scale } from "../../Utils/Helper/Scalling";

interface Props {
  value: boolean;
}

const Loader = ({ value }: Props) => {
  return (
    <Modal
      animationType={"fade"}
      transparent={true}
      visible={value}
      onRequestClose={() => {}}
    >
      <View style={styles.Container}>
        <ActivityIndicator size="large" color={COLORS.BLACK} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  Container: {
    flex: scale(1),
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Loader;
