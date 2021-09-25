import React, {useState} from "react";
import {Button, Text, TextInput, View} from 'react-native';

import ISignIn from "./type";
import Component from "../../components";
import styles from "../../styles";
import APP_ROUTES from "../../AppRoutes";

const SignIn: React.FC<ISignIn> = ({navigation}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    console.log("send request to firebase for sign in with props : ", email, password);
  };

  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Connexion</Text>*/}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="email"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Mot de passe"
        secureTextEntry={true}
      />
      <Button
        onPress={onSubmit}
        title="Connexion"
      />
      <Component.Link
        text="Vous n'avez pas encore de compte ?"
        navigateTo={APP_ROUTES.signUp}
        navigation={navigation}
      />
    </View>
  );
};

export default SignIn;
