import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import listingData from "@/data/destinations.json";
import { ListingType } from "@/types/listingType";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;
const ListingDetails = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const listing: ListingType = (listingData as ListingType[]).find(
    (item) => item.id === id
  );

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  borderRadius: 6,
                }}
              >
                <Feather name="arrow-left" size={20} />
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                backgroundColor: "rgba(255,255,255,0.5)",
                borderRadius: 10,
                padding: 4,
              }}
            >
              <View
                style={{
                  backgroundColor: Colors.white,
                  padding: 10,
                  borderRadius: 6,
                }}
              >
                <Ionicons name="bookmark-outline" size={20} />
              </View>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={styles.container}>
        <Image source={{ uri: listing.image }} style={styles.image} />
        <View style={styles.contentWrapper}>
          <Text style={styles.listingName}>{listing.name}</Text>
          <View style={styles.listingLocationWrapper}>
            <FontAwesome5
              name="map-marker-alt"
              size={18}
              color={Colors.primaryColor}
            />
            <Text style={styles.listingLocationTxt}>{listing.location}</Text>
          </View>
        </View>
        {/* <Text>Listing Detail {id}</Text> */}
      </View>
    </>
  );
};
export default ListingDetails;
const styles = StyleSheet.create({
  image: {
    width: width,
    height: IMG_HEIGHT,
  },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  contentWrapper: {
    padding: 20,
  },
  listingName: {
    fontSize: 24,
    fontWeight: "500",
    color: Colors.black,
    letterSpacing: 0.5,
  },
  listingLocationWrapper: {
    flexDirection: "row",
    marginTop: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  listingLocationTxt: {
    fontSize: 14,
    marginLeft: 5,
    color: Colors.black,
  },
});
