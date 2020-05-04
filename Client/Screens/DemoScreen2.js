import React from "react";
import { Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../Components/CustomHeaderButton";

const DemoScreen2 = () => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text>A demo page.</Text>
    </View>
  );
};

DemoScreen2.navigationOptions = (navData) => {
  return {
    headerTitle: "Demo2",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default DemoScreen2;