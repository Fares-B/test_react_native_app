import React, {useState} from "react";
import {Button, TextInput, View} from 'react-native';
import firebase from 'firebase';

import ISignUp from "./type";
import styles from "../../styles";
import Component from "../../components";
import APP_ROUTES from "../../AppRoutes";

const SignUp: React.FC<ISignUp> = ({navigation}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate(APP_ROUTES.home);
        console.log('User account created & signed in!');
      })
      .catch(e => {
        console.log(e);
      })
  };

  return (
    <View style={styles.container}>
      {/*<Text style={styles.title}>Inscription</Text>*/}
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
        title="S'inscrire"
      />
      <Component.Link
        text="Vous avez déjà un compte ?"
        navigateTo={APP_ROUTES.signIn}
        navigation={navigation}
      />
    </View>
  );
};

export default SignUp;
