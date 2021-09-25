import React from "react";
import {Text, View} from "react-native";
import ILoading from "./type";
import firebase from "firebase";
import APP_ROUTES from "../../AppRoutes";


const Loading: React.FC<ILoading> = ({navigation}) => {

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      navigation.navigate(APP_ROUTES.home);
    } else {
      navigation.navigate(APP_ROUTES.signIn);
    }
  })

  return (
    <View>
      <Text>load</Text>
    </View>
  )
    ;
};

export default Loading;
