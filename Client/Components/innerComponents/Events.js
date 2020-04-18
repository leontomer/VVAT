import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { EVENTS } from "../../dummy-data/dummy-data";

const Events = () => {
  const renderEventItem = (itemData) => {
    return (
      <View style={styles.listItem}>
        <Text style={{ fontWeight: "bold" }}>{itemData.item.time}</Text>
        <Text>{itemData.item.type}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>UPCOMING EVENTS</Text>
      </View>
      <View style={styles.list}>
        <FlatList
          data={EVENTS}
          renderItem={renderEventItem}
          keyExtractor={(item, index) => item.id}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "dancing-script",
    fontSize: 25,
    color: "black",
  },
  header: {
    flex: 1,
    justifyContent: "center",
  },
  list: {
    flex: 3,
    width: "95%",
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
    height: 40,
  },
});

export default Events;
