import React, {useState} from "react";
import {Button, TextInput, View} from 'react-native';
import firebase from "firebase";

import ISignIn from "./type";
import Component from "../../components";
import styles from "../../styles";
import APP_ROUTES from "../../AppRoutes";

const SignIn: React.FC<ISignIn> = ({navigation}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate(APP_ROUTES.home);
        console.log('User connected !');
      })
      .catch(e => {
        console.log(e);
      })
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
