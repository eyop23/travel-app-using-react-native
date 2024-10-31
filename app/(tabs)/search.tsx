import { StyleSheet, View, Text } from "react-native";
const page = () => {
  return (
    <View style={styles.container}>
      <Text>search</Text>
    </View>
  );
};
export default page;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
