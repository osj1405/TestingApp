import {
  View,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TextInput,
} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import { useAuth0 } from "react-native-auth0";

export default function MainScreen() {
  /* hacky way to convert to string */
  const {clearSession, clearCredentials }= useAuth0();
  const [selected, setSelected] = useState(new Date(Date.now()) + "");

  const onLogout = async () => {
    try {
      await clearSession();
      await clearCredentials();
    } catch (e) {
      console.log("Log out cancelled");
    }
  };
  return (
    <ScrollView>
      <View style={{justifyContent: "center"}}>
        <Pressable style={{justifyContent:"center", alignContent:"center"}}onPress={onLogout}>
          <View style={{width:100, height: 20, backgroundColor:"#FEFEFE"}}>

          </View>
          </Pressable>
      </View>
    </ScrollView>
  );
}
