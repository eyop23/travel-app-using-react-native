import Colors from "@/constants/Colors";
import { GroupType } from "@/types/groupType";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ListRenderItem,
  Image,
} from "react-native";
type Props = {
  listing: GroupType[];
};
const GroupListings = ({ listing }: Props) => {
  const renderItems: ListRenderItem<GroupType> = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
    );
  };
  return (
    <View style={{ marginVertical: 20 }}>
      <Text style={styles.title}>Top Travel Groups</Text>
      <FlatList
        data={listing}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
export default GroupListings;
const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});
