import Colors from "@/constants/Colors";
import { ListingType } from "@/types/listingType";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from "react-native";
// import { FlatList } from "react-native-reanimated/lib/typescript/Animated";
type Props = {
  listing: any[];
  category: string;
};
const Listings = ({ listing, category }: Props) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    console.log("ipdating");
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, [category]);
  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity style={styles.item}>
          <View>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <View style={styles.bookmark}>
            <Ionicons name="bookmark-outline" size={20} color={Colors.white} />
          </View>
          <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode="tail">
            {item.name}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <FontAwesome5
                name="map-marker-alt"
                size={18}
                color={Colors.primaryColor}
              />
              <Text style={styles.itemLocationTxt}>{item.location}</Text>
            </View>
            <Text style={styles.itemPriceTxt}>${item.price}</Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };
  return (
    <View>
      <FlatList
        data={loading ? [] : listing}
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        Category List
      </FlatList>
    </View>
  );
};
export default Listings;
const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    width: 220,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 30,
  },
  bookmark: {
    position: "absolute",
    top: 185,
    right: 30,
    backgroundColor: Colors.primaryColor,
    padding: 10,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  itemTxt: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
    marginBottom: 10,
  },
  itemLocationTxt: {
    fontSize: 12,
    marginLeft: 5,
  },
  itemPriceTxt: {
    fontSize: 12,
    fontWeight: "600",
    color: Colors.primaryColor,
  },
});
