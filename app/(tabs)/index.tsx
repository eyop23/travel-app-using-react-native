import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import {
  StyleSheet,
  View,
  Text,
  Touchable,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import listingData from "@/data/destinations.json";
import Colors from "@/constants/Colors";
import { SearchBar } from "react-native-screens";
import CategoryButton from "@/components/CategoryButton";
import { useState } from "react";
import Listings from "@/components/Listings";
import GroupListings from "@/components/GroupListings";
import groupData from "@/data/groups.json";
const page = () => {
  const headerHeight = useHeaderHeight();
  const [category, setCategory] = useState("All");
  const onCatChanged = (category: string) => {
    console.log(category);
    setCategory(category);
  };
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: "https://xsgames.co/randomusers/avatar.php?g=male",
                  // uri: "https://drive.google.com/file/d/1loET7P2L8YpKHMoEYSSmkdj0XvbFXcnk/view",
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                backgroundColor: Colors.white,
                padding: 10,
                borderRadius: 10,
                shadowColor: "#171717",
                shadowOffset: { width: 2, height: 4 },
                shadowRadius: 3,
                shadowOpacity: 0.2,
              }}
            >
              <Ionicons name="notifications" size={20} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headingTxt}>Explore the beautifull world!</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.searchSectionWrapper}>
            <View style={styles.SearchBar}>
              <Ionicons
                name="search"
                size={18}
                style={{ marginRight: 5 }}
                color={Colors.black}
              />
              <TextInput placeholder="search..." />
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
              <Ionicons name="options" size={28} color={Colors.white} />
            </TouchableOpacity>
          </View>
          <CategoryButton onCategoryChanged={onCatChanged} />
          <Listings listing={listingData} category={category} />
          <GroupListings listing={groupData} />
        </ScrollView>
      </View>
    </>
  );
};
export default page;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
    // justifyContent: "center",
    // alignItems: "center",
  },
  headingTxt: {
    fontSize: 28,
    fontWeight: "800",
    color: Colors.black,
    marginTop: 10,
  },
  SearchBar: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
  },
  searchSectionWrapper: {
    flexDirection: "row",
    marginVertical: 20,
  },
  filterBtn: {
    backgroundColor: Colors.primaryColor,
    padding: 12,
    borderRadius: 10,
    marginLeft: 20,
  },
});
