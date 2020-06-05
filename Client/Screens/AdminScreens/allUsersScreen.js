import React, { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { getallusers } from "../../store/actions/adminActions";
import { ListItem } from "react-native-elements";

const allUsersScreen = (props) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const LongClickHandler = () => {
    Alert.alert("Edit user profile");
  };

  const ClickHandler = () => {
    Alert.alert("See user profile");
  };

  const getAllUsers = async () => {
    try {
      setIsLoading(true);
      const tempUsers = await dispatch(getallusers());
      setUsers([...tempUsers]);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Occurred!", error, [{ text: "Okay" }]);
    }
    setIsLoading(false);
  }, [error]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const keyExtractor = (item, index) => index.toString();

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <ListItem
        title={item["name"]}
        subtitle={item["email"]}
        leftAvatar={{ source: require("../../assets/pro2.png") }}
        bottomDivider
        chevron
        onLongPress={LongClickHandler}
        onPress={() => {
          props.navigation.navigate({
            routeName: "userProfile",
            params: { userEmail: item["email"], userName: item["name"] },
          });
        }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          <FlatList
            keyExtractor={keyExtractor}
            data={users}
            renderItem={renderItem}
          />
        </>
      )}
    </View>
  );
};

allUsersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Manage Users",
  };
};

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default allUsersScreen;
