import { useLocalSearchParams } from "expo-router";
import { StyleSheet, View, Text } from "react-native";
const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Listing Detail {id}</Text>
    </View>
  );
};
export default ListingDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
