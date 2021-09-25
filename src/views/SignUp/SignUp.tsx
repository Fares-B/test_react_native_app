import React, {useState} from "react";
import {Button, Text, TextInput, View} from 'react-native';

import ISignUp from "./type";
import styles from "../../styles";
import Component from "../../components";
import APP_ROUTES from "../../AppRoutes";

const SignUp: React.FC<ISignUp> = ({navigation}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = () => {
    console.log("send request to firebase for sign up with props : ", email, password);
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
